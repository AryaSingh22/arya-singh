import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiPython, 
  SiPostgresql, 
  SiMongodb, 
  SiAmazon, 
  SiDocker,
  SiSolidity,
  SiEthereum,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';

const techStacks = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
      { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    ]
  },
  {
    category: 'Blockchain',
    technologies: [
      { name: 'Solidity', icon: SiSolidity, color: 'text-gray-300' },
      { name: 'Ethereum', icon: SiEthereum, color: 'text-purple-400' },
    ]
  },
  {
    category: 'DevOps',
    technologies: [
      { name: 'AWS', icon: SiAmazon, color: 'text-orange-400' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    ]
  }
];

const TechStackSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech-stack" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-metallic mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to build modern, scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStacks.map((stack, stackIndex) => (
              <div 
                key={stack.category}
                className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${stackIndex * 150}ms` }}
              >
                <div className="card-metallic p-6 h-full">
                  <h3 className="text-xl font-semibold text-accent mb-6 text-center">
                    {stack.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <div 
                        key={tech.name}
                        className="group flex items-center gap-4 p-3 glass rounded-lg hover:bg-accent/5 transition-all duration-300"
                        style={{ 
                          animationDelay: `${(stackIndex * stack.technologies.length + techIndex) * 100}ms` 
                        }}
                      >
                        <div className="relative">
                          <tech.icon 
                            className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`} 
                          />
                          <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 rounded transition-opacity duration-300" />
                        </div>
                        <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;