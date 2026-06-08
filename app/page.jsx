import Link from 'next/link';

const products = [
  { icon: '⚖️', title: 'N9 LAW System', desc: 'منصة قانونية ذكية لإدارة الإجراءات والبيانات والعمليات المرتبطة بالقطاع القانوني.' },
  { icon: '✉️', title: 'N9 SMS', desc: 'نظام مراسلات وإشعارات ذكي للتواصل السريع والتنبيهات المؤسسية.' },
  { icon: '🧠', title: 'N9 AI', desc: 'طبقة ذكاء مستقبلية لتقديم التحليلات والتوصيات والمساعدة الذكية.' },
];

const pillars = [
  'واجهة فاخرة داكنة مستوحاة من أنظمة التصميم الحديثة',
  'محتوى يشرح سبب بناء الموقع: منصة واحدة لعرض الهوية، المنتجات، الشركاء، والتنزيلات',
  'تجربة عالمية تصلح للشركات، العرض المؤسسي، والتوسع المستقبلي',
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="nav wrap nav-glass">
        <div className="brand brand-lux">
          <img src="/n9-group-logo.svg" alt="N9 Group" width="52" height="52" style={{ borderRadius: 16 }} />
          <div>
            <div className="brand-title">N9 Group</div>
            <small style={{ color: 'var(--muted)' }}>Intelligent Digital Systems</small>
          </div>
        </div>
        <nav className="nav-links">
          <a href="/products">المنتجات</a>
          <a href="/downloads">التنزيلات</a>
          <a href="/services">الخدمات</a>
          <a href="/partners">الشركاء</a>
          <a href="/about">حول</a>
          <a href="/contact">التواصل</a>
        </nav>
      </header>

      <section className="wrap hero hero-cinematic">
        <div className="hero-copy">
          <span className="badge badge-lux">منصة عالمية ذكية • واجهة مستقبلية • حلول أعمال متقدمة</span>
          <h1>منصة N9 Group صُممت لتبدو مثل نظام تصميم عالمي فخم، لا مجرد موقع عادي.</h1>
          <p className="lead">
            هذا الموقع بُني ليجمع هوية المجموعة في مكان واحد: عرض المنتجات، التنزيلات، الشركاء، الخدمات، والتواصل المؤسسي.
            الهدف أن يشعر الزائر أنه أمام علامة تقنية راقية، حديثة، وذات رؤية مستقبلية.
          </p>
          <div className="actions">
            <Link data-tech-sound="true" className="btn" href="/products">استعراض المنتجات</Link>
            <Link data-tech-sound="true" className="btn ghost" href="/contact">طلب مشروع Enterprise</Link>
          </div>
          <div className="pill-row">
            <span className="pill">فخامة</span>
            <span className="pill">عمق بصري</span>
            <span className="pill">Dark Premium</span>
            <span className="pill">Cinematic Motion</span>
          </div>
        </div>

        <div className="hero-art hero-orbit">
          <div className="panel float-card orbit-card">
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />
            <div className="tag tag-lux">N9 AI Intelligence Core</div>
            <h3 style={{ margin: '14px 0 8px' }}>لماذا هذا الموقع موجود؟</h3>
            <p style={{ color: 'var(--muted)' }}>
              لإظهار N9 Group كمنصة موحّدة تضم القانون، المراسلات، الذكاء، والتنزيلات ضمن تجربة فاخرة قابلة للتطوير.
            </p>
            <div className="grid" style={{ marginTop: 18, gap: 12 }}>
              {pillars.map((item) => (
                <div className="info-item info-item-lux" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section-block">
        <div className="section-title">
          <div><h2>أبرز المنتجات</h2><p>عرض سريع لأقوى الحلول داخل المنظومة.</p></div>
          <Link href="/products">عرض الكل</Link>
        </div>
        <div className="grid products products-lux">
          {products.map((p) => (
            <article key={p.title} className="product product-lux">
              <div className="icon icon-lux">{p.icon}</div>
              <div><h3>{p.title}</h3><p style={{ color: 'var(--muted)' }}>{p.desc}</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
