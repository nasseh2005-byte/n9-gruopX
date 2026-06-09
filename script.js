const siteData = {
  brand: {
    name: 'N9 Group',
    tagline: 'Intelligent Digital Systems'
  },
  stats: [
    { value: '6+', label: 'منتجات وحلول رئيسية' },
    { value: '4', label: 'مجالات أعمال أساسية' },
    { value: '24/7', label: 'رؤية تشغيلية ذكية' }
  ],
  products: [
    { icon: '⚖️', title: 'N9 LAW System', desc: 'منصة قانونية ذكية لإدارة الإجراءات، البيانات، والعمليات المرتبطة بالقطاع القانوني.' },
    { icon: '✉️', title: 'N9 SMS', desc: 'نظام مراسلات وإشعارات ذكي، مصمم للتواصل السريع والتنبيهات والرسائل المؤسسية.' },
    { icon: '🧠', title: 'N9 AI', desc: 'طبقة ذكاء مستقبلية لتقديم التحليلات والتوصيات والمساعدة الذكية داخل المنصة.' },
    { icon: '🏪', title: 'Taksim Point Digitals', desc: 'حلول رقمية موجهة للتشغيل التجاري، التجزئة، والخدمات ذات الواجهة المباشرة مع العملاء.' },
    { icon: '🎓', title: 'IUM | N9', desc: 'بوابة أكاديمية أو تعليمية قابلة للتوسع لدعم المحتوى التعليمي والإدارة الرقمية.' },
    { icon: '⚙️', title: 'Jaras Engine', desc: 'محرك عمل قابل للتخصيص للأتمتة، إدارة العمليات، وتنسيق البيانات داخل منتجات N9.' }
  ],
  downloads: [
    'N9 LAW System',
    'N9 SMS',
    'N9 AI'
  ],
  services: [
    { tag: 'Business Design', title: 'تصميم سلايدات عملية وعلمية', desc: 'عروض احترافية للبزنس والدراسة والتقارير التنفيذية.' },
    { tag: 'Analytics UI', title: 'تصميم داش بوردات بيانية', desc: 'لوحات تحكم مرئية تركز على البيانات، المؤشرات، واتخاذ القرار.' },
    { tag: 'Development', title: 'تطوير مواقع وتطبيقات وأنظمة', desc: 'بناء منتجات رقمية حديثة، قابلة للتوسع، ومهيأة للاستخدام العالمي.' }
  ],
  partners: [
    { title: 'مكتب سلطان المالكي للاستشارات القانونية والمحاماة', desc: 'شريك قانوني داعم للهوية القانونية والاحتراف المؤسسي.' },
    { title: 'مطاعم تقسيم بوينت', desc: 'شريك تجاري مرتبط بتجارب رقمية وواجهات خدمة العملاء.' },
    { title: 'جامعة مينيسوتا الأمريكية الإسلامية', desc: 'شريك أكاديمي يعكس البعد التعليمي والمعرفي للمنصة.' }
  ],
  contact: {
    name: 'Nasseh Zaher Alnaman',
    email: 'nasseh2005@gmail.com',
    phone: '+966 530021367',
    instagram: 'nassehX10'
  }
};

function createStat({ value, label }) {
  return `<div class="stat"><strong>${value}</strong><span style="color:var(--muted)">${label}</span></div>`;
}

function createProduct({ icon, title, desc }) {
  return `<div class="product"><div class="icon">${icon}</div><div><h3>${title}</h3><p style="color:var(--muted)">${desc}</p></div></div>`;
}

function createService({ tag, title, desc }) {
  return `<div class="card"><span class="tag">${tag}</span><h3>${title}</h3><p style="color:var(--muted)">${desc}</p></div>`;
}

function createPartner({ title, desc }) {
  return `<div class="card"><h3>${title}</h3><p style="color:var(--muted)">${desc}</p></div>`;
}

function createDownloadCard(name) {
  return `<div class="card download-card"><div class="icon" style="margin:0 auto 12px;">⬇️</div><h3>${name}</h3><p style="color:var(--muted)">تطبيق ذكي قابل للتوسّع مع دعم App Store وGoogle Play وWindows.</p><div class="stores"><a class="store" href="#">App Store</a><a class="store" href="#">Google Play</a><a class="store" href="#">Windows</a></div></div>`;
}

function hydrate() {
  const stats = document.querySelector('.stats');
  if (stats) stats.innerHTML = siteData.stats.map(createStat).join('');

  const products = document.querySelector('.products');
  if (products) products.innerHTML = siteData.products.map(createProduct).join('');

  const services = document.querySelector('#services .cards');
  if (services) services.innerHTML = siteData.services.map(createService).join('');

  const partners = document.querySelector('#partners .cards');
  if (partners) partners.innerHTML = siteData.partners.map(createPartner).join('');

  const downloads = document.querySelector('.downloads');
  if (downloads) downloads.innerHTML = siteData.downloads.map(createDownloadCard).join('');

  const contactName = document.querySelector('#contact h3');
  if (contactName) contactName.textContent = siteData.contact.name;
}

hydrate();

window.addEventListener('DOMContentLoaded', () => {
  const heroBtn = document.querySelector('.btn');
  if (heroBtn) heroBtn.addEventListener('click', () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  });
});
