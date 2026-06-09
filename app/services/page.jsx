import Link from 'next/link';

const services = [
  ['Business Design', 'تصميم سلايدات عملية وعلمية للبزنس والدراسة والتقارير التنفيذية.'],
  ['Analytics UI', 'تصميم داش بوردات بيانية ولوحات تحكم مرئية لاتخاذ القرار.'],
  ['Development', 'تطوير مواقع وتطبيقات وأنظمة حديثة قابلة للتوسع.'],
  ['Automation', 'أتمتة العمليات وربط الخدمات والأنظمة الداخلية.'],
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title">
          <div>
            <h2>Services</h2>
            <p>خدمات مختصرة ومباشرة تخدم الشركات والجهات المؤسسية.</p>
          </div>
          <Link href="/contact">طلب خدمة</Link>
        </div>
        <div className="grid cards">
          {services.map(([title, desc]) => (
            <div className="card" key={title}>
              <span className="tag tag-lux">{title}</span>
              <h3>{title}</h3>
              <p style={{ color: 'var(--muted)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
