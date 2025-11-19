import Navigation from '@/components/Portfolio/Navigation';
import ThreeDHero from '@/components/Portfolio/ThreeDHero';
import AboutSection from '@/components/Portfolio/AboutSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import TechStackSection from '@/components/Portfolio/TechStackSection';
import ExperienceSection from '@/components/Portfolio/ExperienceSection';
import ContactSection from '@/components/Portfolio/ContactSection';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="hero">
          <ThreeDHero
            title="Arya Singh"
            subtitle="Blockchain & Smart Contract Developer"
            description="Specializing in raw Solidity engineering, gas-optimized systems, and secure on-chain architectures. Experienced across DeFi, DEXs, DAOs, ERC-4337 wallets, escrow, flash loans, and subscription/payment systems."
          />
        </section>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
