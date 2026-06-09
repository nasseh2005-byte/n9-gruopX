import Link from 'next/link';

const points = [
  'A single premium hub for products, partners, downloads, and services.',
  'Dark luxury presentation with a clean brand-first hierarchy.',
  'Built to feel minimal, cinematic, and globally refined.',
];

const stats = [
  { value: '06', label: 'Products' },
  { value: '03', label: 'Partners' },
  { value: '24/7', label: 'Presence' },
];

export default function Home() {
  return (
    <main className="page-shell home-minimal">
      <header className="nav wrap nav-glass">
        <div className="brand brand-lux">
          <img src="/n9-group-logo.svg" alt="N9 Group" width="54" height="54" style={{ borderRadius: 16 }} />
          <div>
            <div className="brand-title">N9 Group</div>
            <small style={{ color: 'var(--muted)' }}>Intelligent Digital Systems</small>
          </div>
        </div>
        <nav className="nav-links">
          <a href="/products">Products</a>
          <a href="/downloads">Downloads</a>
          <a href="/services">Services</a>
          <a href="/partners">Partners</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="wrap hero hero-minimal">
        <div className="hero-copy hero-copy-minimal">
          <div className="mini-caption">N9 Group / Digital Identity</div>
          <h1>A premium dark home for the N9 ecosystem.</h1>
          <p className="lead lead-minimal">
            N9 Group unifies its products, downloads, services, and partners into one refined experience—built to feel calm, premium, and unmistakably modern.
          </p>
          <div className="actions actions-minimal">
            <Link data-tech-sound="true" className="btn" href="/products">Explore products</Link>
            <Link data-tech-sound="true" className="btn ghost" href="/contact">Start a project</Link>
          </div>
          <div className="hero-stats">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-art hero-minimal-art">
          <div className="panel float-card orbit-card orbit-card-minimal">
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />
            <div className="mini-caption">Why this site exists</div>
            <h2 style={{ margin: '12px 0 10px' }}>A single place to present the full N9 identity.</h2>
            <p style={{ color: 'var(--muted)', marginTop: 0 }}>
              The website is intentionally brand-led: it shows the logo, tone, products, and vision first—without visual clutter.
            </p>
            <div className="grid" style={{ marginTop: 18, gap: 12 }}>
              {points.map((item) => (
                <div className="info-item info-item-lux" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
