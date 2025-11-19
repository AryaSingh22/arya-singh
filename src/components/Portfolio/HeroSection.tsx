import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-6">
          <span className="text-accent text-lg font-medium tracking-wider">Hello, I'm</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-slide-up">
          Arya Singh
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-slide-up [animation-delay:0.2s]">
          Blockchain Developer
        </h2>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:0.4s]">
          Specializing in EVM-compatible smart contracts, dApps, and DeFi protocols.
          Expert in Solidity, account abstraction wallets, and gas-optimized blockchain systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up [animation-delay:0.6s]">
          <Button
            size="lg"
            className="btn-metallic hover:shadow-glow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="btn-glass text-accent border-accent/50"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16 animate-slide-up [animation-delay:0.8s]">
          <a
            href="https://github.com/AryaSingh22"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-accent/10 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-6 h-6 text-accent" />
          </a>
          <a
            href="https://www.linkedin.com/in/arya-singh-322757257/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-accent/10 hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-accent" />
          </a>
          <a
            href="mailto:singharya2209@gmail.com"
            className="p-3 glass rounded-full hover:bg-accent/10 hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-accent" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-accent animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;