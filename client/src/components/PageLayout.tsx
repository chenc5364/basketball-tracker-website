/*
  Reusable page layout with header, content, and footer
*/
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[oklch(0.13_0.008_265)] flex flex-col">
      <Navbar />
      
      {/* Page header with title */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-[oklch(0.17_0.008_265)] to-[oklch(0.13_0.008_265)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase tracking-widest mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {subtitle || "Team Info"}
          </div>
          <h1
            className="text-white"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            {title}
          </h1>
          <div className="mt-4 w-16 h-1 bg-[oklch(0.68_0.19_42)]" />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
