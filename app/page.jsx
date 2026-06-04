import Link from 'next/link';

const products = [
  { icon: '⚖️', title: 'N9 LAW System', desc: 'منصة قانونية ذكية لإدارة الإجراءات والبيانات والعمليات المرتبطة بالقطاع القانوني.' },
  { icon: '✉️', title: 'N9 SMS', desc: 'نظام مراسلات وإشعارات ذكي للتواصل السريع والتنبيهات المؤسسية.' },
  { icon: '🧠', title: 'N9 AI', desc: 'طبقة ذكاء مستقبلية لتقديم التحليلات والتوصيات والمساعدة الذكية.' },
];

export default function Home() {
  return (
    <main>
      <header className="nav wrap">
        <div className="brand"><img src="/n9-group-logo.svg" alt="N9 Group" width="44" height="44" style={{ borderRadius: 14 }} /><div><div>N9 Group</div><small style={{ color: 'var(--muted)' }}>Intelligent Digital Systems</small></div></div>
        <nav>
          <a href="/products">المنتجات</a>
          <a href="/downloads">التنزيلات</a>
          <a href="/services">الخدمات</a>
          <a href="/partners">الشركاء</a>
          <a href="/about">حول</a>
          <a href="/contact">التواصل</a>
        </nav>
      </header>

      <section className="wrap hero">
        <div>
          <span className="badge">منصة عالمية ذكية • واجهة مستقبلية • حلول أعمال متقدمة</span>
          <h1>N9 Group منصة رقمية فاخرة، ذكية، وعالمية.</h1>
          <p className="lead">موقع متعدد الصفحات مصمم ليعرض المنتجات، الشركاء، التنزيلات، الخدمات، والمعلومات الأساسية في تجربة مؤسسية راقية، مع قابلية توسع كبيرة إلى نظام ويب متكامل.</p>
          <div className="actions">
            <Link data-tech-sound="true" className="btn" href="/products">استعراض المنتجات</Link>
            <Link data-tech-sound="true" className="btn ghost" href="/contact">طلب مشروع Enterprise</Link>
          </div>
          <div className="grid stats">
            <div className="stat"><strong>6+</strong><span style={{ color: 'var(--muted)' }}>منتجات وحلول رئيسية</span></div>
            <div className="stat"><strong>4</strong><span style={{ color: 'var(--muted)' }}>مجالات أعمال أساسية</span></div>
            <div className="stat"><strong>24/7</strong><span style={{ color: 'var(--muted)' }}>رؤية تشغيلية ذكية</span></div>
          </div>
          <div className="pill-row">
            <span className="pill">مخصص للشركات</span>
            <span className="pill">جاهز للتوسع</span>
            <span className="pill">تصميم عالمي</span>
            <span className="pill">واجهة متعددة الصفحات</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="panel float-card" style={{ transform: 'rotateY(-10deg) rotateX(6deg)' }}>
            <div className="tag">N9 AI Intelligence Core</div>
            <h3 style={{ margin: '14px 0 8px' }}>رؤية مستقبلية للمجموعة</h3>
            <p style={{ color: 'var(--muted)' }}>منظومة تدمج القانون، الرسائل، التحليلات، التعلم، والواجهات الذكية في تجربة عالمية موحّدة.</p>
            <div className="grid" style={{ marginTop: 18, gap: 12 }}>
              <div className="info-item">واجهة داكنة عالية التقنية</div>
              <div className="info-item">قابلة للتطوير إلى لوحة تحكم ذكية</div>
              <div className="info-item">جاهزة للربط مع النماذج والتحميلات</div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" id="products">
        <div className="section-title"><div><h2>أبرز المنتجات</h2><p>عرض سريع لأقوى الحلول داخل المنظومة.</p></div><Link href="/products">عرض الكل</Link></div>
        <div className="grid products">
          {products.map((p) => (
            <article key={p.title} className="product">
              <div className="icon">{p.icon}</div>
              <div><h3>{p.title}</h3><p style={{ color: 'var(--muted)' }}>{p.desc}</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
