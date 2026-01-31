import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <main id="main-content" role="main" className="flex-grow relative">
        <Navigation />
        {children}
      </main>
      <Footer />
    </div>
  );
}
