import Link from 'next/link';

const items = [
  { icon: '⚖️', title: 'N9 LAW System', desc: 'منصة قانونية ذكية لإدارة الإجراءات والبيانات والعمليات المرتبطة بالقطاع القانوني.' },
  { icon: '✉️', title: 'N9 SMS', desc: 'نظام مراسلات وإشعارات ذكي للتواصل السريع والتنبيهات المؤسسية.' },
  { icon: '🧠', title: 'N9 AI', desc: 'طبقة ذكاء مستقبلية لتقديم التحليلات والتوصيات والمساعدة الذكية.' },
  { icon: '🏪', title: 'Taksim Point Digitals', desc: 'حلول رقمية موجهة للتشغيل التجاري والتجزئة وخدمة العملاء.' },
  { icon: '🎓', title: 'IUM | N9', desc: 'بوابة أكاديمية أو تعليمية قابلة للتوسع لإدارة المحتوى الرقمي.' },
  { icon: '⚙️', title: 'Jaras Engine', desc: 'محرك عمل قابل للتخصيص للأتمتة وتنسيق البيانات داخل منتجات N9.' },
];

export default function ProductsPage() {
  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title">
          <div>
            <h2>Products</h2>
            <p>منظومة منتجات مختصرة، واضحة، وفاخرة.</p>
          </div>
          <Link href="/contact">طلب منتج</Link>
        </div>
        <div className="grid products products-lux">
          {items.map((item) => (
            <article className="product product-lux" key={item.title}>
              <div className="icon icon-lux">{item.icon}</div>
              <div>
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
