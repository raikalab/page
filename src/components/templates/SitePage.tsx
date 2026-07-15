import { ContactSection } from "../organisms/ContactSection";
import { Footer } from "../organisms/Footer";
import { GamesSection } from "../organisms/GamesSection";
import { Header } from "../organisms/Header";
import { Hero } from "../organisms/Hero";

export function SitePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GamesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
