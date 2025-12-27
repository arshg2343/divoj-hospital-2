import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutDoctor from "@/components/AboutDoctor";
import PregnancyTimeline from "@/components/PregnancyTimeline";
import Services from "@/components/Services";
import HelpingPeople from "@/components/HelpingPeople";
import StatsSection from "@/components/StatsSection";
import InstagramFeed from "@/components/InstagramFeed";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-primary/30 text-gray-900">
      <Navbar />
      <Hero />
      <AboutDoctor />
      <PregnancyTimeline />
      <Services />
      <HelpingPeople />
      <StatsSection />
      <InstagramFeed />
      <Testimonials />
      <Footer />
    </main>
  );
}
