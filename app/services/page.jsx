export default function ServicesPage() {
  const services = [
    ['Business Design', 'تصميم سلايدات عملية وعلمية للبزنس والدراسة.'],
    ['Analytics UI', 'تصميم داش بوردات بيانية ولوحات تحكم مرئية.'],
    ['Development', 'تطوير مواقع وتطبيقات وأنظمة حديثة.'],
  ];
  return (
    <main className="wrap" style={{ padding: '40px 0' }}>
      <div className="section-title"><div><h2>الخدمات</h2><p>خدمات احترافية للشركات والجهات التعليمية والتجارية.</p></div></div>
      <div className="grid cards">
        {services.map(([t, d]) => <div className="card" key={t}><span className="tag">{t}</span><h3>{t}</h3><p style={{ color: 'var(--muted)' }}>{d}</p></div>)}
      </div>
    </main>
  );
}
