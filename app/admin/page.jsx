'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEYS = {
  products: 'n9-admin-products',
  partners: 'n9-admin-partners',
  auth: 'n9-admin-auth',
};

const ADMIN_PASSWORD = 'N9-2026';

const initialProducts = [
  { id: 'law', name: 'N9 LAW System', status: 'جاهز للنشر', category: 'إدارة قانونية' },
  { id: 'sms', name: 'N9 SMS', status: 'متصل', category: 'التنبيهات والرسائل' },
  { id: 'ai', name: 'N9 AI', status: 'تجريبي', category: 'الذكاء والتحليلات' },
];

const initialPartners = [
  { id: 'law-office', name: 'مكتب سلطان المالكي للاستشارات القانونية والمحاماة', status: 'مفعل', logo: '/partner-law.svg' },
  { id: 'taksim', name: 'مطاعم تقسيم بوينت', status: 'مفعل', logo: '/taksim-point.svg' },
  { id: 'ium', name: 'جامعة مينيسوتا الأمريكية الإسلامية', status: 'مفعل', logo: '/ium.svg' },
];

const blankProduct = { id: '', name: '', status: 'جاهز للنشر', category: '' };
const blankPartner = { id: '', name: '', status: 'مفعل', logo: '/partner-law.svg' };

function safeLoad(key, fallback) {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export default function AdminPage() {
  const [hydrated, setHydrated] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [products, setProducts] = useState(initialProducts);
  const [partners, setPartners] = useState(initialPartners);
  const [productForm, setProductForm] = useState(blankProduct);
  const [partnerForm, setPartnerForm] = useState(blankPartner);
  const [editingProductId, setEditingProductId] = useState('');
  const [editingPartnerId, setEditingPartnerId] = useState('');

  useEffect(() => {
    const storedAuth = safeLoad(STORAGE_KEYS.auth, false);
    setAuthenticated(Boolean(storedAuth));
    setProducts(safeLoad(STORAGE_KEYS.products, initialProducts));
    setPartners(safeLoad(STORAGE_KEYS.partners, initialPartners));
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) save(STORAGE_KEYS.products, products); }, [products, hydrated]);
  useEffect(() => { if (hydrated) save(STORAGE_KEYS.partners, partners); }, [partners, hydrated]);
  useEffect(() => { if (hydrated) save(STORAGE_KEYS.auth, authenticated); }, [authenticated, hydrated]);

  const stats = useMemo(() => [
    { label: 'المنتجات', value: products.length },
    { label: 'الشركاء', value: partners.length },
    { label: 'التخزين', value: 'LocalStorage' },
  ], [products.length, partners.length]);

  const login = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError('');
      setPassword('');
    } else {
      setError('كلمة المرور غير صحيحة');
    }
  };

  const logout = () => {
    setAuthenticated(false);
    if (typeof window !== 'undefined') window.localStorage.removeItem(STORAGE_KEYS.auth);
  };

  const upsertProduct = (e) => {
    e.preventDefault();
    if (!productForm.name.trim()) return;
    const id = editingProductId || crypto.randomUUID();
    setProducts((prev) => {
      const exists = prev.some((item) => item.id === id);
      return exists ? prev.map((item) => (item.id === id ? { ...productForm, id } : item)) : [...prev, { ...productForm, id }];
    });
    setProductForm(blankProduct);
    setEditingProductId('');
  };

  const upsertPartner = (e) => {
    e.preventDefault();
    if (!partnerForm.name.trim()) return;
    const id = editingPartnerId || crypto.randomUUID();
    setPartners((prev) => {
      const exists = prev.some((item) => item.id === id);
      return exists ? prev.map((item) => (item.id === id ? { ...partnerForm, id } : item)) : [...prev, { ...partnerForm, id }];
    });
    setPartnerForm(blankPartner);
    setEditingPartnerId('');
  };

  const startEditProduct = (item) => { setProductForm(item); setEditingProductId(item.id); };
  const startEditPartner = (item) => { setPartnerForm(item); setEditingPartnerId(item.id); };
  const removeProduct = (id) => setProducts((prev) => prev.filter((item) => item.id !== id));
  const removePartner = (id) => setPartners((prev) => prev.filter((item) => item.id !== id));

  const resetAll = () => {
    setProducts(initialProducts);
    setPartners(initialPartners);
    setProductForm(blankProduct);
    setPartnerForm(blankPartner);
    setEditingProductId('');
    setEditingPartnerId('');
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEYS.products);
      window.localStorage.removeItem(STORAGE_KEYS.partners);
    }
  };

  if (!authenticated) {
    return (
      <main className="page-shell">
        <section className="wrap" style={{ padding: '90px 0' }}>
          <div className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
            <span className="tag tag-lux">Admin Access</span>
            <h2>قفل لوحة الإدارة</h2>
            <p style={{ color: 'var(--muted)' }}>أدخل كلمة المرور للوصول إلى لوحة الإدارة.</p>
            <form onSubmit={login}>
              <div className="field"><label>كلمة المرور</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" /></div>
              {error ? <p style={{ color: '#ff8b8b' }}>{error}</p> : null}
              <button className="btn" type="submit" data-tech-sound="true">دخول</button>
            </form>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title">
          <div><h2>لوحة الإدارة الحقيقية</h2><p>إدارة المنتجات والشركاء مع حفظ محلي، تعديل، حذف، وقفل بسيط للحماية.</p></div>
          <div className="actions" style={{ marginTop: 0 }}>
            <button className="btn ghost" type="button" onClick={logout} data-tech-sound="true">تسجيل خروج</button>
            <button className="btn ghost" type="button" onClick={resetAll} data-tech-sound="true">إعادة الضبط</button>
          </div>
        </div>

        <div className="grid cards" style={{ marginBottom: 18 }}>
          {stats.map((s) => (<div className="card" key={s.label}><span className="tag tag-lux">{s.label}</span><h3 style={{ marginBottom: 0 }}>{s.value}</h3></div>))}
        </div>

        <div className="contact">
          <form className="card" onSubmit={upsertProduct}>
            <h3>{editingProductId ? 'تعديل منتج' : 'إضافة منتج'}</h3>
            <div className="field"><label>اسم المنتج</label><input value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} placeholder="اسم المنتج" /></div>
            <div className="field"><label>الحالة</label><input value={productForm.status} onChange={(e) => setProductForm({ ...productForm, status: e.target.value })} placeholder="الحالة" /></div>
            <div className="field"><label>التصنيف</label><input value={productForm.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })} placeholder="التصنيف" /></div>
            <button className="btn" type="submit" data-tech-sound="true">{editingProductId ? 'تحديث المنتج' : 'حفظ المنتج'}</button>
          </form>

          <form className="card" onSubmit={upsertPartner}>
            <h3>{editingPartnerId ? 'تعديل شريك' : 'إضافة شريك'}</h3>
            <div className="field"><label>اسم الشريك</label><input value={partnerForm.name} onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })} placeholder="اسم الشريك" /></div>
            <div className="field"><label>الحالة</label><input value={partnerForm.status} onChange={(e) => setPartnerForm({ ...partnerForm, status: e.target.value })} placeholder="الحالة" /></div>
            <div className="field"><label>الشعار</label><select value={partnerForm.logo} onChange={(e) => setPartnerForm({ ...partnerForm, logo: e.target.value })}><option value="/partner-law.svg">partner-law.svg</option><option value="/taksim-point.svg">taksim-point.svg</option><option value="/ium.svg">ium.svg</option></select></div>
            <button className="btn" type="submit" data-tech-sound="true">{editingPartnerId ? 'تحديث الشريك' : 'حفظ الشريك'}</button>
          </form>
        </div>

        <div className="grid cards" style={{ marginTop: 18 }}>
          <div className="card">
            <h3>المنتجات الحالية</h3>
            <div className="info-list">
              {products.map((p) => (
                <div className="info-item info-item-lux" key={p.id}>
                  <strong>{p.name}</strong>
                  <div style={{ color: 'var(--muted)' }}>{p.status} • {p.category}</div>
                  <div className="pill-row">
                    <button className="pill" type="button" onClick={() => startEditProduct(p)} data-tech-sound="true">تعديل</button>
                    <button className="pill" type="button" onClick={() => removeProduct(p.id)} data-tech-sound="true">حذف</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>الشركاء الحاليون</h3>
            <div className="info-list">
              {partners.map((p) => (
                <div className="info-item info-item-lux" key={p.id}>
                  <strong>{p.name}</strong>
                  <div style={{ color: 'var(--muted)' }}>{p.status}</div>
                  <div className="pill-row">
                    <button className="pill" type="button" onClick={() => startEditPartner(p)} data-tech-sound="true">تعديل</button>
                    <button className="pill" type="button" onClick={() => removePartner(p.id)} data-tech-sound="true">حذف</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>إدارة المحتوى</h3>
            <p style={{ color: 'var(--muted)' }}>هذه اللوحة تحفظ البيانات في LocalStorage الآن، ويمكن نقلها لاحقًا إلى قاعدة بيانات فعلية بسهولة.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
