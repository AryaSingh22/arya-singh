import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    id: 1,
    title: 'DeFi Trading Platform',
    description: 'A comprehensive decentralized finance platform with automated market making, yield farming, and portfolio management features.',
    image: project2,
    technologies: ['React', 'Solidity', 'Web3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 2,
    title: 'Enterprise SaaS Dashboard',
    description: 'Modern analytics dashboard with real-time data visualization, user management, and advanced reporting capabilities.',
    image: project1,
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'tRPC', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 3,
    title: 'Luxury E-commerce Platform',
    description: 'High-end e-commerce solution with advanced product customization, AR preview, and seamless checkout experience.',
    image: project3,
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
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
              A selection of my recent work showcasing expertise in modern web development, 
              blockchain technology, and user experience design.
            </p>
          </div>
          
          <div className="grid gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className={`card-metallic overflow-hidden ${
                  project.featured ? 'lg:grid lg:grid-cols-2' : ''
                } ${index % 2 === 1 && project.featured ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Project Image */}
                  <div className={`relative group overflow-hidden ${
                    index % 2 === 1 && project.featured ? 'lg:col-start-2' : ''
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
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 && project.featured ? 'lg:col-start-1' : ''
                  }`}>
                    <div className="mb-4">
                      {project.featured && (
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full mb-4">
                          Featured Project
                        </span>
                      )}
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