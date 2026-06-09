import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title">
          <div>
            <h2>About</h2>
            <p>الهوية، الرؤية، والسبب وراء بناء هذه المنصة.</p>
          </div>
          <Link href="/contact">تواصل</Link>
        </div>
        <div className="card">
          <p style={{ color: 'var(--muted)', marginTop: 0 }}>
            تم بناء N9 Group لتكون منصة موحدة تعرض هوية المجموعة ومنتجاتها وخدماتها وشركاءها في تجربة فاخرة وحديثة.
            الهدف هو أن يشعر الزائر أنه أمام علامة تقنية راقية وليست مجرد موقع تقليدي.
          </p>
          <ul>
            <li>الهوية: تقنية فاخرة، داكنة، وعالمية</li>
            <li>المؤسس: Nasseh Zaher Alnaman</li>
            <li>الوظيفة: عرض المنتجات والخدمات والشركاء والتنزيلات</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
