import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Lead development of enterprise-scale web applications and blockchain solutions. Architect and implement scalable microservices using Node.js, React, and AWS.',
    achievements: [
      'Led a team of 5 developers in building a DeFi platform processing $10M+ in transactions',
      'Reduced application load time by 40% through optimization and caching strategies',
      'Implemented CI/CD pipelines improving deployment frequency by 300%'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'Solidity', 'AWS', 'Docker']
  },
  {
    id: 2,
    title: 'Blockchain Developer',
    company: 'CryptoInnovate',
    location: 'Remote',
    period: '2021 - 2022',
    type: 'Contract',
    description: 'Specialized in smart contract development and DApp creation. Built secure and efficient blockchain solutions for various DeFi protocols.',
    achievements: [
      'Developed 15+ smart contracts with zero security vulnerabilities',
      'Created automated testing suite reducing bug detection time by 60%',
      'Optimized gas usage in smart contracts by an average of 25%'
    ],
    technologies: ['Solidity', 'Web3.js', 'Hardhat', 'React', 'Node.js']
  },
  {
    id: 3,
    title: 'Full-Stack Developer',
    company: 'StartupLab',
    location: 'New York, NY',
    period: '2019 - 2021',
    type: 'Full-time',
    description: 'Built and maintained multiple web applications for startup clients. Focused on rapid prototyping and MVP development.',
    achievements: [
      'Successfully delivered 20+ projects with 98% client satisfaction rate',
      'Built scalable e-commerce platform serving 100K+ users',
      'Mentored junior developers and established coding best practices'
    ],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB']
  }
];

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-metallic mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              My professional journey in software development and blockchain technology
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent to-accent/50 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`relative ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 shadow-glow"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                    <Card className="card-metallic p-8 group hover:shadow-glow transition-all duration-500">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                            exp.type === 'Full-time' 
                              ? 'bg-accent/20 text-accent' 
                              : 'bg-neon-cyan/20 text-neon-cyan'
                          }`}>
                            {exp.type}
                          </span>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-accent mb-2">
                          {exp.title}
                        </h3>
                        
                        <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-foreground/80 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 text-sm font-medium glass rounded-full text-accent border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;