import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import daoDashboard from '@/assets/dao-dashboard.png';

const projects = [
  {
    id: 1,
    title: 'SubZero Protocol – Gasless Payment System',
    description: 'Built a subscription and payment framework with ERC-4337-based gasless transactions. Open-source solution for seamless Web3 payment experiences.',
    image: project1,
    technologies: ['Solidity', 'ERC-4337', 'Hardhat', 'Account Abstraction', 'Gasless Transactions'],
    liveUrl: 'https://github.com/AryaSingh22',
    githubUrl: 'https://github.com/AryaSingh22',
    featured: true,
    status: 'Open Source'
  },
  {
    id: 2,
    title: 'Decentralized Escrow Contract',
    description: 'Optimized escrow with dispute resolution, minimal storage usage, and secure state machine. Built with focus on gas efficiency and security best practices.',
    image: project2,
    technologies: ['Solidity', 'State Machine Design', 'Gas Optimization', 'Hardhat', 'Security'],
    liveUrl: 'https://github.com/AryaSingh22',
    githubUrl: 'https://github.com/AryaSingh22',
    featured: true,
    status: 'Open Source'
  },
  {
    id: 3,
    title: 'DAO Governance Contract',
    description: 'Token-weighted voting, milestone-based funding, and treasury control without external libraries. Experimental governance system built from scratch.',
    image: daoDashboard,
    technologies: ['Solidity', 'DAO', 'Governance', 'Treasury Management', 'Voting Systems'],
    liveUrl: 'https://github.com/AryaSingh22',
    githubUrl: 'https://github.com/AryaSingh22',
    featured: false,
    status: 'Experimental'
  },
  {
    id: 4,
    title: 'Flash Loan Contract',
    description: 'Raw flash loan pool with repayment enforcement and reentrancy-secure design. Prototype showcasing advanced DeFi mechanics without external dependencies.',
    image: project1,
    technologies: ['Solidity', 'Flash Loans', 'DeFi', 'Reentrancy Guard', 'Foundry'],
    liveUrl: 'https://github.com/AryaSingh22',
    githubUrl: 'https://github.com/AryaSingh22',
    featured: false,
    status: 'Prototype'
  }
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-metallic mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Production-ready blockchain projects showcasing expertise in smart contract development,
              security, and gas optimization.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className={`card-metallic overflow-hidden ${project.featured ? 'lg:grid lg:grid-cols-2' : ''
                  } ${index % 2 === 1 && project.featured ? 'lg:grid-flow-col-dense' : ''}`}>

                  {/* Project Image */}
                  <div className={`relative group overflow-hidden ${index % 2 === 1 && project.featured ? 'lg:col-start-2' : ''
                    }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-4">
                        <Button
                          size="sm"
                          className="btn-metallic"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="btn-glass border-accent/50"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 && project.featured ? 'lg:col-start-1' : ''
                    }`}>
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${project.status === 'Open Source'
                          ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                          : project.status === 'Experimental'
                            ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                            : 'bg-accent/20 text-accent border border-accent/30'
                        }`}>
                        {project.status}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-medium glass rounded-full text-accent border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button
                        className="btn-metallic"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        variant="outline"
                        className="btn-glass border-accent/50"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;