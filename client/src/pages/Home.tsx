/*
  Design: Urban Athletic / Sports Editorial
  Main page assembling all sections with sticky nav
*/
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ScheduleSection from "@/components/ScheduleSection";
import PracticeSection from "@/components/PracticeSection";
import StandingsSection from "@/components/StandingsSection";
import RosterSection from "@/components/RosterSection";
import VideosSection from "@/components/VideosSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.13_0.008_265)]">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <ScheduleSection />
      <PracticeSection />
      <StandingsSection />
      <RosterSection />
      <VideosSection />
      <Footer />
    </div>
  );
}
