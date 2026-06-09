import './globals.css';
import TechSound from './components/tech-sound';

export const metadata = {
  title: 'N9 Group | Premium Digital Systems',
  description: 'A premium dark digital ecosystem for N9 Group products, downloads, services, partners, and enterprise requests.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <TechSound />
        {children}
      </body>
    </html>
  );
}
