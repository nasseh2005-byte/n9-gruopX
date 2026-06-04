'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setStatus('success');
      setMessage('تم استلام طلبك بنجاح. سنعود إليك قريبًا.');
      e.currentTarget.reset();
    } else {
      setStatus('error');
      setMessage(data.error || 'حدث خطأ أثناء الإرسال');
    }
  }

  return (
    <form className="card" onSubmit={onSubmit}>
      <div className="field"><label>الاسم</label><input name="name" required placeholder="اسمك الكامل" /></div>
      <div className="field"><label>البريد الإلكتروني</label><input name="email" type="email" required placeholder="name@example.com" /></div>
      <div className="field"><label>نوع الطلب</label><select name="type" required><option>موقع</option><option>تطبيق</option><option>نظام</option><option>واجهة / داش بورد</option></select></div>
      <div className="field"><label>تفاصيل المشروع</label><textarea name="message" required placeholder="اكتب تفاصيل مشروعك..."></textarea></div>
      <button className="btn" type="submit" data-tech-sound="true" disabled={status === 'loading'}>{status === 'loading' ? 'جاري الإرسال...' : 'إرسال الطلب'}</button>
      {message ? <p style={{ color: status === 'success' ? 'var(--success)' : '#ff8b8b', marginTop: 12 }}>{message}</p> : null}
    </form>
  );
}
