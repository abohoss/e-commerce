import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { AdminPanel } from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Admin",
  description: "Publish news and manage the Drugest admin password.",
};

export default function AdminPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Publish updates and manage access."
        description="Sign in with info@drugest.net to publish news, then use Settings to change the admin password when needed."
        tone="amber"
      />

      <Container className="py-14 sm:py-16">
        <AdminPanel />
      </Container>
    </>
  );
}