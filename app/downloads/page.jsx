export default function DownloadsPage() {
  const apps = ['N9 LAW System', 'N9 SMS', 'N9 AI'];
  return (
    <main className="wrap" style={{ padding: '40px 0' }}>
      <div className="section-title"><div><h2>التنزيلات</h2><p>تطبيقات متاحة قريبًا عبر المتاجر والمنصات.</p></div></div>
      <div className="grid downloads">
        {apps.map((app) => (
          <div className="card download-card" key={app}>
            <div className="icon" style={{ margin: '0 auto 12px' }}>⬇️</div>
            <h3>{app}</h3>
            <p style={{ color: 'var(--muted)' }}>نسخة احترافية جاهزة للتوزيع على المنصات المختلفة.</p>
            <div className="stores"><a className="store" href="#">App Store</a><a className="store" href="#">Google Play</a><a className="store" href="#">Windows</a></div>
          </div>
        ))}
      </div>
    </main>
  );
}
