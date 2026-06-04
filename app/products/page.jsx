export default function ProductsPage() {
  const items = [
    ['⚖️', 'N9 LAW System', 'منصة قانونية ذكية لإدارة الإجراءات والبيانات والعمليات المرتبطة بالقطاع القانوني.'],
    ['✉️', 'N9 SMS', 'نظام مراسلات وإشعارات ذكي للتواصل السريع والتنبيهات المؤسسية.'],
    ['🧠', 'N9 AI', 'طبقة ذكاء مستقبلية لتقديم التحليلات والتوصيات والمساعدة الذكية.'],
    ['🏪', 'Taksim Point Digitals', 'حلول رقمية موجهة للتشغيل التجاري والتجزئة وخدمة العملاء.'],
    ['🎓', 'IUM | N9', 'بوابة أكاديمية أو تعليمية قابلة للتوسع لإدارة المحتوى الرقمي.'],
    ['⚙️', 'Jaras Engine', 'محرك عمل قابل للتخصيص للأتمتة وتنسيق البيانات داخل منتجات N9.'],
  ];
  return (
    <main className="wrap" style={{ padding: '40px 0' }}>
      <div className="section-title"><div><h2>المنتجات</h2><p>عرض كامل لحلول N9 المتقدمة.</p></div></div>
      <div className="grid products">
        {items.map(([icon, title, desc]) => (
          <article className="product" key={title}>
            <div className="icon">{icon}</div>
            <div><h3>{title}</h3><p style={{ color: 'var(--muted)' }}>{desc}</p></div>
          </article>
        ))}
      </div>
    </main>
  );
}
