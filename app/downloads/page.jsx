import Link from 'next/link';

const downloads = [
  { icon: '⚖️', name: 'N9 LAW System', status: 'قريبًا', note: 'Windows / Web / Mobile' },
  { icon: '✉️', name: 'N9 SMS', status: 'قريبًا', note: 'App Store / Google Play' },
  { icon: '🧠', name: 'N9 AI', status: 'قريبًا', note: 'Cross-platform intelligence' },
];

export default function DownloadsPage() {
  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title">
          <div><h2>التنزيلات</h2><p>روابط ومنصات التحميل ستصبح جاهزة عند تفعيل الإصدارات النهائية.</p></div>
          <Link href="/contact">تحديث روابط التحميل</Link>
        </div>
        <div className="grid downloads">
          {downloads.map((item) => (
            <div className="card download-card" key={item.name}>
              <div className="icon icon-lux" style={{ margin: '0 auto 12px' }}>{item.icon}</div>
              <span className="tag tag-lux">{item.status}</span>
              <h3>{item.name}</h3>
              <p style={{ color: 'var(--muted)' }}>{item.note}</p>
              <div className="stores">
                <a className="store" href="#" data-tech-sound="true">App Store</a>
                <a className="store" href="#" data-tech-sound="true">Google Play</a>
                <a className="store" href="#" data-tech-sound="true">Windows</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
