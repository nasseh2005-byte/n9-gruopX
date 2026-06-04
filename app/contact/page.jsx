import ContactForm from '../components/contact-form';

export default function ContactPage() {
  return (
    <main className="wrap" style={{ padding: '40px 0' }}>
      <div className="section-title"><div><h2>التواصل وطلب مشروع</h2><p>نموذج تواصل فعلي مع تجربة استخدام احترافية.</p></div></div>
      <div className="contact">
        <ContactForm />
        <div className="card">
          <h3>Nasseh Zaher Alnaman</h3>
          <div className="info-list">
            <div className="info-item">البريد الإلكتروني: nasseh2005@gmail.com</div>
            <div className="info-item">رقم الهاتف: +966 530021367</div>
            <div className="info-item">إنستقرام: nassehX10</div>
            <div className="info-item">متاح للمشاريع المؤسسية والأنظمة المتقدمة</div>
          </div>
        </div>
      </div>
    </main>
  );
}
