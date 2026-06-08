import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title">
          <div><h2>حول N9 Group</h2><p>الهوية، الرؤية، والسبب الحقيقي لبناء هذه المنصة.</p></div>
          <Link href="/contact">تواصل معنا</Link>
        </div>
        <div className="grid" style={{ gap: 18 }}>
          <div className="card">
            <p style={{ color: 'var(--muted)', marginTop: 0 }}>
              تم بناء N9 Group لتكون منصة عرض موحّدة تجمع المنتجات، التنزيلات، الشركاء، والخدمات في تجربة فاخرة ومؤثرة.
              الهدف هو تقديم صورة عالمية حديثة تعكس أن المجموعة لا تعرض مجرد صفحات، بل نظام هوية متكامل.
            </p>
            <ul>
              <li>الهوية: تقنية فاخرة، داكنة، وعالمية</li>
              <li>المؤسس: Nasseh Zaher Alnaman</li>
              <li>الوظيفة: عرض المنتجات والخدمات والشركاء والتنزيلات</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
