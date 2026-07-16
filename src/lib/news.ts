import { createHash, randomUUID, timingSafeEqual } from "crypto";
import { sql } from "@vercel/postgres";

export type NewsPost = {
  id: string;
  title: string;
  summary: string;
  body: string;
  publishedAt: string;
  updatedAt: string;
};

type AdminRecord = {
  email: string;
  password: string;
};

export const ADMIN_EMAIL = "info@drugest.net";
const DEFAULT_ADMIN_PASSWORD = "hamed1234";
const SESSION_COOKIE = "drugest_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30;
const SESSION_PEPPER = "drugest-admin-session-v1";
const SINGLETON_ADMIN_ID = "singleton";

let schemaReadyPromise: Promise<void> | null = null;

async function ensureSchema() {
  if (!schemaReadyPromise) {
    schemaReadyPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS admin_settings (
          id TEXT PRIMARY KEY,
          email TEXT NOT NULL,
          password TEXT NOT NULL
        )
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS news_posts (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          summary TEXT NOT NULL,
          body TEXT NOT NULL,
          published_at TIMESTAMPTZ NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL
        )
      `;

      await sql`
        INSERT INTO admin_settings (id, email, password)
        VALUES (${SINGLETON_ADMIN_ID}, ${ADMIN_EMAIL}, ${DEFAULT_ADMIN_PASSWORD})
        ON CONFLICT (id) DO NOTHING
      `;
    })();
  }

  return schemaReadyPromise;
}

function hashSession(email: string, password: string, timestamp: number) {
  return createHash("sha256")
    .update(`${email}|${timestamp}|${password}|${SESSION_PEPPER}`)
    .digest("hex");
}

function safeCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export async function getAdminRecord(): Promise<AdminRecord> {
  await ensureSchema();

  const result = await sql`
    SELECT email, password
    FROM admin_settings
    WHERE id = ${SINGLETON_ADMIN_ID}
    LIMIT 1
  `;
  const admin = result.rows[0] as AdminRecord | undefined;

  if (admin?.email && admin?.password) {
    return admin;
  }

  const seededAdmin = { email: ADMIN_EMAIL, password: DEFAULT_ADMIN_PASSWORD };
  await sql`
    INSERT INTO admin_settings (id, email, password)
    VALUES (${SINGLETON_ADMIN_ID}, ${seededAdmin.email}, ${seededAdmin.password})
    ON CONFLICT (id) DO UPDATE SET
      email = EXCLUDED.email,
      password = EXCLUDED.password
  `;
  return seededAdmin;
}

export async function verifyAdminCredentials(email: string, password: string) {
  const admin = await getAdminRecord();

  return admin.email.toLowerCase() === email.trim().toLowerCase() && admin.password === password;
}

export async function buildAdminSessionCookieValue(admin: AdminRecord) {
  const timestamp = Date.now();

  return `${timestamp}.${hashSession(admin.email, admin.password, timestamp)}`;
}

export async function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return false;
  }

  const [timestampValue, signature] = token.split(".");
  const timestamp = Number(timestampValue);

  if (!Number.isFinite(timestamp) || !signature) {
    return false;
  }

  const now = Date.now();
  if (timestamp > now + 5 * 60 * 1000 || now - timestamp > SESSION_TTL_MS) {
    return false;
  }

  const admin = await getAdminRecord();
  const expectedSignature = hashSession(admin.email, admin.password, timestamp);

  return safeCompare(signature, expectedSignature);
}

export async function getNewsPosts(): Promise<NewsPost[]> {
  await ensureSchema();

  const result = await sql`
    SELECT id, title, summary, body, published_at, updated_at
    FROM news_posts
    ORDER BY published_at DESC
  `;

  const posts = result.rows.map((row) => ({
    id: String(row.id),
    title: String(row.title),
    summary: String(row.summary),
    body: String(row.body),
    publishedAt: new Date(String(row.published_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  }));

  return posts;
}

export async function addNewsPost(input: { title: string; summary: string; body: string }) {
  await ensureSchema();

  const publishedAt = new Date();
  const nextPost: NewsPost = {
    id: randomUUID(),
    title: input.title.trim(),
    summary: input.summary.trim(),
    body: input.body.trim(),
    publishedAt: publishedAt.toISOString(),
    updatedAt: publishedAt.toISOString(),
  };

  await sql`
    INSERT INTO news_posts (id, title, summary, body, published_at, updated_at)
    VALUES (
      ${nextPost.id},
      ${nextPost.title},
      ${nextPost.summary},
      ${nextPost.body},
      ${publishedAt.toISOString()},
      ${publishedAt.toISOString()}
    )
  `;

  return nextPost;
}

export async function updateNewsPost(
  id: string,
  input: { title: string; summary: string; body: string }
) {
  await ensureSchema();

  const updatedAt = new Date();
  const result = await sql`
    UPDATE news_posts
    SET title = ${input.title.trim()},
        summary = ${input.summary.trim()},
        body = ${input.body.trim()},
        updated_at = ${updatedAt.toISOString()}
    WHERE id = ${id}
    RETURNING id, title, summary, body, published_at, updated_at
  `;

  const row = result.rows[0];
  if (!row) {
    throw new Error("News post not found.");
  }

  return {
    id: String(row.id),
    title: String(row.title),
    summary: String(row.summary),
    body: String(row.body),
    publishedAt: new Date(String(row.published_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  } satisfies NewsPost;
}

export async function deleteNewsPost(id: string) {
  await ensureSchema();

  const result = await sql`
    DELETE FROM news_posts
    WHERE id = ${id}
    RETURNING id
  `;

  if (result.rows.length === 0) {
    throw new Error("News post not found.");
  }
}

export async function updateAdminPassword(currentPassword: string, newPassword: string) {
  const admin = await getAdminRecord();

  if (admin.password !== currentPassword) {
    throw new Error("Current password is incorrect.");
  }

  if (newPassword.length < 8) {
    throw new Error("New password must be at least 8 characters long.");
  }

  const updatedAdmin = {
    ...admin,
    password: newPassword,
  };

  await sql`
    UPDATE admin_settings
    SET email = ${updatedAdmin.email}, password = ${updatedAdmin.password}
    WHERE id = ${SINGLETON_ADMIN_ID}
  `;
  return updatedAdmin;
}

export function getAdminSessionCookieName() {
  return SESSION_COOKIE;
}