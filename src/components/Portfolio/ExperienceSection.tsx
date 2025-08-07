import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Student - Computer Science & Engineering',
    company: 'International Institute of Information Technology',
    location: 'Bhubaneswar, India',
    period: '2022 - 2026',
    type: 'Education',
    description: 'Pursuing B.Tech in Computer Science and Engineering with focus on blockchain technology, smart contract development, and Web3 applications.',
    achievements: [
      'Specialized in EVM-compatible smart contracts and DeFi protocol development',
      'Built multiple blockchain projects including ERC-4337 wallets and flashloan bots',
      'Focused on gas optimization and security best practices in smart contract development'
    ],
    technologies: ['Solidity', 'JavaScript', 'TypeScript', 'React.js', 'Hardhat', 'Foundry']
  },
  {
    id: 2,
    title: 'Blockchain Developer',
    company: 'Independent Projects',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Personal',
    description: 'Developing innovative blockchain solutions including account abstraction wallets, DeFi protocols, and automated trading systems.',
    achievements: [
      'Created ERC-4337 SmartWallet with advanced features like social recovery and Paymaster support',
      'Developed flashloan arbitrage bot leveraging Aave protocol for profitable trading',
      'Built gas-optimized decentralized escrow system with dispute resolution mechanisms'
    ],
    technologies: ['Solidity', 'Hardhat', 'Foundry', 'Ethers.js', 'OpenZeppelin', 'ERC-4337']
  },
  {
    id: 3,
    title: 'Smart Contract Developer',
    company: 'Open Source Contributions',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Contributing',
    description: 'Contributing to open-source blockchain projects and developing DAO governance systems with advanced treasury management features.',
    achievements: [
      'Implemented DAO governance protocol with proposal creation and delegation features',
      'Optimized smart contracts for gas efficiency using custom EVM logic',
      'Created comprehensive testing suites using Slither and Tenderly for security analysis'
    ],
    technologies: ['Solidity', 'OpenZeppelin', 'Slither', 'Tenderly', 'Chainlink', 'IPFS']
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