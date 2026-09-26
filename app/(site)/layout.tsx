import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="flex-grow relative focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
