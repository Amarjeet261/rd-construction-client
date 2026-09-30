import { Footer } from "@/components/home-page/footer";
import { Navbar } from "@/components/home-page/navbar";
import { TopBar } from "@/components/home-page/header";
import { AboutIntro } from "@/components/home-page/about";
import { BlogSection } from "@/components/home-page/blog";
import { ClientLogos } from "@/components/home-page/client-logos";
import { CTASection } from "@/components/home-page/cta";
import { HeroSection } from "@/components/home-page/hero";
import { PortfolioSection } from "@/components/home-page/project";
import { ServicesSection } from "@/components/home-page/services";
import { TeamSection } from "@/components/home-page/team";
import { TestimonialsSection } from "@/components/home-page/testimonials";
import ContactUs from "@/components/home-page/contact";
import WhatsApp from "@/components/home-page/whatsApp";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutIntro />
        <CTASection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactUs />
        <ClientLogos />
      </main>
      <Footer />
      <WhatsApp />
      <ScrollToTop />
    </>
  );
}
