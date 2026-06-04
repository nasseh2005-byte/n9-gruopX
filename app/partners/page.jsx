export default function PartnersPage() {
  const partners = [
    { name: 'مكتب سلطان المالكي للاستشارات القانونية والمحاماة', desc: 'شريك قانوني داعم للهوية القانونية والاحتراف المؤسسي.', logo: '/partner-law.svg' },
    { name: 'مطاعم تقسيم بوينت', desc: 'شريك تجاري مرتبط بتجارب رقمية وواجهات خدمة العملاء.', logo: '/taksim-point.svg' },
    { name: 'جامعة مينيسوتا الأمريكية الإسلامية', desc: 'شريك أكاديمي يعكس البعد التعليمي والمعرفي.', logo: '/ium.svg' },
  ];
  return (
    <main className="wrap" style={{ padding: '40px 0' }}>
      <div className="section-title"><div><h2>الشركاء</h2><p>شبكة علاقات وشراكات مؤسسية قابلة للتوسّع والإضافة.</p></div></div>
      <div className="grid cards">
        {partners.map((p) => <div className="card" key={p.name}><img src={p.logo} alt={p.name} width="72" height="72" style={{ borderRadius: 18, marginBottom: 12 }} /><h3>{p.name}</h3><p style={{ color: 'var(--muted)' }}>{p.desc}</p></div>)}
      </div>
    </main>
  );
}
