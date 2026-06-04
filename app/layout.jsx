import './globals.css';
import TechSound from './components/tech-sound';

export const metadata = {
  title: 'N9 Group | منصة ذكية عالمية',
  description: 'N9 Group - منصة رقمية فاخرة، ذكية، وعالمية متعددة الصفحات.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <TechSound />
        {children}
      </body>
    </html>
  );
}
