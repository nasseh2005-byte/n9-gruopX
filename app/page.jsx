import Link from 'next/link';

const showcase = [
  {
    title: 'N9 LAW System',
    category: 'Legal System',
    image: '⚖️',
    href: '/products',
  },
  {
    title: 'N9 SMS',
    category: 'Messaging',
    image: '✉️',
    href: '/products',
  },
  {
    title: 'N9 AI Core',
    category: 'Intelligence',
    image: '��',
    href: '/products',
  },
  {
    title: 'Downloads Center',
    category: 'Apps',
    image: '⬇️',
    href: '/downloads',
  },
  {
    title: 'Enterprise Services',
    category: 'Services',
    image: '◈',
    href: '/services',
  },
  {
    title: 'Partners Network',
    category: 'Partners',
    image: '✦',
    href: '/partners',
  },
];

const filters = [
  'ALL',
  'SYSTEMS',
  'DOWNLOADS',
  'SERVICES',
  'PARTNERS',
  'AI',
  'LAW',
  'MESSAGING',
];

export default function Home() {
  return (
    <main className="n9-lab" dir="ltr">
      <header className="n9-topbar">
        <Link className="n9-mark" href="/" data-tech-sound="true">
          <img src="/n9-group-logo.svg" alt="N9 Group" />
          <span>N9</span>
        </Link>

        <nav className="n9-mainnav">
          <Link href="/products">PRODUCTS</Link>
          <Link href="/downloads">DOWNLOADS</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/partners">PARTNERS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        <div className="n9-actions-top">
          <span>NEW!</span>
          <Link href="/admin" data-tech-sound="true">ADMIN</Link>
        </div>
      </header>

      <section className="n9-hero-lab">
        <div className="n9-hero-grid-bg" />

        <div className="n9-hero-left">
          <p className="n9-kicker">NEW! DIGITAL ECOSYSTEM</p>

          <h1>
            N9 Group
            <span>Premium systems, apps, and services in one dark interface.</span>
          </h1>

          <p className="n9-hero-copy">
            A high-end digital hub built for N9 Group to present products, downloads,
            partners, services, and enterprise requests with a sharp, global, and
            cinematic identity.
          </p>

          <div className="n9-hero-buttons">
            <Link className="n9-primary-btn" href="/products" data-tech-sound="true">
              Explore Systems
            </Link>
            <Link className="n9-secondary-btn" href="/contact" data-tech-sound="true">
              Start Project
            </Link>
          </div>
        </div>

        <div className="n9-hero-right">
          <div className="n9-device">
            <div className="n9-device-header">
              <span />
              <span />
              <span />
              <strong>N9 CORE</strong>
            </div>

            <div className="n9-device-body">
              <div className="n9-logo-stage">
                <img src="/n9-group-logo.svg" alt="N9 Group" />
              </div>

              <div className="n9-terminal-lines">
                <span>Initialize ecosystem...</span>
                <span>Load LAW / SMS / AI modules</span>
                <span>Sync partners directory</span>
                <span>Ready for enterprise requests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="n9-filterbar">
        <div className="n9-filter-scroll">
          {filters.map((item) => (
            <button key={item} data-tech-sound="true">
              {item}
            </button>
          ))}
        </div>
        <div className="n9-search">
          <span>SEARCH</span>
          <span>⌕</span>
        </div>
      </section>

      <section className="n9-gallery">
        {showcase.map((item, index) => (
          <Link
            className={`n9-gallery-card n9-card-${index + 1}`}
            href={item.href}
            key={item.title}
            data-tech-sound="true"
          >
            <div className="n9-card-preview">
              <div className="n9-card-orb" />
              <div className="n9-card-icon">{item.image}</div>
            </div>
            <div className="n9-card-meta">
              <h2>{item.title}</h2>
              <p>Category: {item.category}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="n9-bottom-dock">
        <Link href="/about" data-tech-sound="true">
          <span>⌘</span>
          BUILT BY N9
        </Link>
        <Link href="/products" data-tech-sound="true">
          <span>▣</span>
          CODEBASE
        </Link>
        <Link href="/contact" data-tech-sound="true">
          <span>↗</span>
          SHARE
        </Link>
        <a href="#top" data-tech-sound="true">
          <span>↑</span>
          TOP
        </a>
      </section>
    </main>
  );
}
