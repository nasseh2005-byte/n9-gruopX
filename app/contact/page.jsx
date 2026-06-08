import ContactForm from '../components/contact-form';

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="wrap" style={{ padding: '56px 0 28px' }}>
        <div className="section-title"><div><h2>التواصل وطلب مشروع</h2><p>نموذج فعلي بتجربة استخدام مريحة، مع إرسال فوري ورسائل حالة.</p></div></div>
        <div className="contact">
          <ContactForm />
          <div className="card">
            <h3>Nasseh Zaher Alnaman</h3>
            <div className="info-list">
              <div className="info-item info-item-lux">البريد الإلكتروني: nasseh2005@gmail.com</div>
              <div className="info-item info-item-lux">رقم الهاتف: +966 530021367</div>
              <div className="info-item info-item-lux">إنستقرام: nassehX10</div>
              <div className="info-item info-item-lux">متاح للمشاريع المؤسسية والأنظمة المتقدمة</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
