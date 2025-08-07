import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Zap } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', level: 95, icon: Globe },
  { name: 'Backend Development', level: 90, icon: Database },
  { name: 'Blockchain Development', level: 85, icon: Zap },
  { name: 'System Architecture', level: 88, icon: Code },
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
                Passionate Developer & Innovator
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                With over 6 years of experience in full-stack development, I specialize in 
                creating scalable web applications and blockchain solutions. My journey began 
                with traditional web development and evolved into the exciting world of Web3 
                and decentralized applications.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                I believe in writing clean, maintainable code and staying at the forefront 
                of technology trends. When I'm not coding, you'll find me contributing to 
                open-source projects or exploring the latest developments in AI and blockchain.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'Solidity', 'Python', 'PostgreSQL'].map((tech) => (
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