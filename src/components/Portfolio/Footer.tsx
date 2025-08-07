import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/AryaSingh22',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/arya-singh-322757257/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/ARYA_SINGH_BAIS',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:singharya2209@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-muted/40 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold gradient-text mb-4">
              Arya Singh
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Full-Stack Developer & Blockchain Engineer crafting premium digital experiences 
              with cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg hover:bg-accent/10 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-accent group-hover:text-neon-cyan" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-foreground/80">
                <span className="text-accent font-medium">Email:</span><br />
                singharya2209@gmail.com
              </p>
              <p className="text-foreground/80">
                <span className="text-accent font-medium">Location:</span><br />
                Bhubaneswar, India
              </p>
              <p className="text-foreground/80">
                <span className="text-accent font-medium">Availability:</span><br />
                Open for new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Arya Singh. All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;