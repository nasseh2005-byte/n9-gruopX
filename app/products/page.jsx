import Link from 'next/link';

const items = [
  { icon: '⚖️', title: 'N9 LAW System', desc: 'منصة قانونية ذكية لإدارة الإجراءات والبيانات والعمليات المرتبطة بالقطاع القانوني.', meta: 'Legal Intelligence' },
  { icon: '✉️', title: 'N9 SMS', desc: 'نظام مراسلات وإشعارات ذكي للتواصل السريع والتنبيهات المؤسسية.', meta: 'Messaging Core' },
  { icon: '🧠', title: 'N9 AI', desc: 'طبقة ذكاء مستقبلية لتقديم التحليلات والتوصيات والمساعدة الذكية.', meta: 'AI Layer' },
  { icon: '🏪', title: 'Taksim Point Digitals', desc: 'حلول رقمية موجهة للتشغيل التجاري والتجزئة وخدمة العملاء.', meta: 'Retail Systems' },
  { icon: '🎓', title: 'IUM | N9', desc: 'بوابة أكاديمية أو تعليمية قابلة للتوسع لإدارة المحتوى الرقمي.', meta: 'Academic Platform' },
  { icon: '⚙️', title: 'Jaras Engine', desc: 'محرك عمل قابل للتخصيص للأتمتة وتنسيق البيانات داخل منتجات N9.', meta: 'Automation Engine' },
];

export default function ProductsPage() {
  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title">
          <div><h2>المنتجات</h2><p>منظومة حلول N9 المصممة كحزمة واحدة متقدمة.</p></div>
          <Link href="/contact">طلب منتج مخصص</Link>
        </div>
        <div className="grid cards">
          {items.map((item) => (
            <article className="card product product-lux" key={item.title}>
              <div className="icon icon-lux">{item.icon}</div>
              <div>
                <span className="tag tag-lux">{item.meta}</span>
                <h3>{item.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
