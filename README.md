# N9 Group Platform

واجهة رقمية فاخرة ومؤسسية مبنية بـ Next.js لعرض هوية N9 Group، المنتجات، التنزيلات، الخدمات، الشركاء، ولوحة إدارة بسيطة.

## المميزات
- تصميم داكن فاخر مستوحى من الواجهات الحديثة
- صفحات متعددة
- حركة خفيفة وصوت تقني عند الضغط
- لوحة إدارة محمية بكلمة مرور
- حفظ محلي عبر `LocalStorage`
- نموذج تواصل فعلي

## الصفحات
- `/` الرئيسية
- `/products` المنتجات
- `/downloads` التنزيلات
- `/services` الخدمات
- `/partners` الشركاء
- `/about` حول
- `/contact` التواصل
- `/admin` لوحة الإدارة
- `/api/contact` API للتواصل

## التشغيل محليًا
```bash
npm install
npm run dev
```

## البناء النهائي
```bash
npm run build
npm start
```

## النشر على GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

## النشر على Vercel
1. ادخل إلى Vercel
2. اضغط New Project
3. اختر مستودع GitHub
4. اترك الإعدادات الافتراضية:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Install Command: `npm install`
5. اضغط Deploy

## ملاحظة
كلمة مرور لوحة الإدارة الحالية:
`N9-2026`
