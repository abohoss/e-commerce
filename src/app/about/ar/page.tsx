import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "الشركة",
  description:
    "شركة دروجست للمستحضرات الدوائية — شركة مساهمة مصرية تأسست عام 2004 لتسجيل الأدوية البيطرية للحيوانات الكبيرة والدواجن.",
};

const facts = [
  { label: "تأسست", value: "3/6/2004" },
  { label: "الأصناف المسجلة", value: "19 صنفاً" },
];

export default function AboutArabicPage() {
  return (
    <div dir="rtl" lang="ar">
      <PageHeader
        eyebrow="عن الشركة"
        title="شركة مساهمة مصرية، قائمة على الخبرة البيطرية."
        description="تأسست شركة دروجست فى القاهرة عام 2004 على يد مجموعة تجمع بين الخبرة فى الصناعة الدوائية والطب البيطرى."
      >
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white"
        >
          <IconArrowRight className="h-4 w-4 rotate-180" />
          Read this page in English
        </Link>
      </PageHeader>

      <Container className="grid gap-14 py-14 sm:py-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-[0.95rem] leading-loose text-ink-soft">
          <p>
            تأسست الشركة فى 3/6/2004 كشركة مساهمة مصرية تضم عدداً من ذوى الخبرة
            فى المجال الدوائى والمستحضرات الطبية والبيطرية، ومنهم:
          </p>
          <ul className="list-inside list-disc space-y-1 text-ink">
            <li>شركة مالتى فارما للأدوية</li>
            <li>د. فؤاد محمد اللافى</li>
            <li>د. عبدالكريم محمد حتاتة</li>
            <li>د. محمد فيصل كامل</li>
          </ul>
          <p>
            بدأت الشركة فى تسجيل الأدوية والمستحضرات البيطرية الخاصة بصناعة
            الدواجن والثروة الحيوانية، حتى وصلت الأصناف إلى 19 صنفاً منتقاة
            بعناية ومطلوبة لدى السوق البيطرى بجمهورية مصر العربية.
          </p>
          <p>
            تقوم الشركة بتصنيع منتجاتها بنظام التصنيع لدى الغير على أعلى درجات
            GMP، لدى الشركة العربية للمستحضرات الطبية (أرابكوميد) والشركة
            العربية للمنتجات الجيلاتينية والدوائية (أراب كابس)، المشهود لهما
            بالكفاءة لدى الوسط الصيدلى.
          </p>
          <p>
            والشركة بصدد إنشاء مصنع لتصنيع الأدوية البيطرية والبشرية على أحدث
            تقنيات ومواصفات، على أرضها بمدينة العاشر من رمضان على مساحة 3500
            متر، مع نخبة من المستثمرين المصريين من ذوى الخبرة فى مجالات الطب
            والهندسة والصيدلة والمحاسبة. كما تم تأسيس شركة شقيقة فى عام 2013،
            يجرى حالياً تسجيل مستحضرات حديثة لها حتى وصلت الأصناف قيد التسجيل
            إلى 11 صنفاً من الأجيال الجديدة فى عالم الأدوية البيطرية.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="font-mono text-xs font-medium uppercase tracking-wide text-teal-700">
            بيانات الشركة
          </p>
          <dl className="mt-5 flex flex-col gap-4">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <dt className="text-xs text-ink-soft">{fact.label}</dt>
                <dd className="mt-1 font-display font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
