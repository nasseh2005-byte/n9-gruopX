import Link from 'next/link';

const partners = [
  { name: 'مكتب سلطان المالكي للاستشارات القانونية والمحاماة', desc: 'شريك قانوني داعم للهوية القانونية والاحتراف المؤسسي.', logo: '/partner-law.svg' },
  { name: 'مطاعم تقسيم بوينت', desc: 'شريك تجاري مرتبط بتجارب رقمية وواجهات خدمة العملاء.', logo: '/taksim-point.svg' },
  { name: 'جامعة مينيسوتا الأمريكية الإسلامية', desc: 'شريك أكاديمي يعكس البعد التعليمي والمعرفي.', logo: '/ium.svg' },
];

export default function PartnersPage() {
  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title">
          <div>
            <h2>Partners</h2>
            <p>شركاء مختارون ضمن منظومة N9.</p>
          </div>
          <Link href="/contact">إضافة شريك</Link>
        </div>
        <div className="grid cards">
          {partners.map((p) => (
            <div className="card partner-card" key={p.name}>
              <img src={p.logo} alt={p.name} width="74" height="74" style={{ borderRadius: 18, marginBottom: 12 }} />
              <h3>{p.name}</h3>
              <p style={{ color: 'var(--muted)' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
