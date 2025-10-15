import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main id="main-content" role="main" className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
