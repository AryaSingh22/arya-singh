import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Zap } from 'lucide-react';

const skills = [
  { name: 'Smart Contract Development', level: 95, icon: Code },
  { name: 'Frontend Development', level: 88, icon: Globe },
  { name: 'DeFi Protocols', level: 90, icon: Zap },
  { name: 'Gas Optimization', level: 92, icon: Database },
];

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-metallic mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio */}
            <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-accent mb-6">
                Blockchain Developer & Smart Contract Expert
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Currently pursuing B.Tech in Computer Science and Engineering at IIIT Bhubaneswar (2022-2026), 
                I specialize in EVM-compatible smart contracts, dApps, and DeFi protocols. My expertise spans 
                Solidity development, ERC-4337 wallet implementation, and secure blockchain system architecture.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                I focus on building gas-optimized, scalable solutions including DAOs, flashloan bots, and 
                account abstraction wallets. My development approach emphasizes security, efficiency, and 
                innovation in the rapidly evolving Web3 ecosystem.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Solidity', 'JavaScript', 'TypeScript', 'React.js', 'Python', 'Hardhat', 'Foundry'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 glass rounded-full text-sm font-medium text-accent border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Skills */}
            <div className={`${inView ? 'animate-slide-up [animation-delay:0.2s]' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-accent mb-8">Skills & Expertise</h3>
              
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 glass rounded-lg group-hover:bg-accent/10 transition-colors">
                          <skill.icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="progress-metallic h-3 relative">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-chrome to-steel-blue rounded-full shadow-glow transition-all duration-1000 ease-out"
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;