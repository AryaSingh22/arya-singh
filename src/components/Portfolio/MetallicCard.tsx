import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MetallicCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    hover3D?: boolean;
}

export default function MetallicCard({
    children,
    className = '',
    delay = 0,
    hover3D = true
}: MetallicCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay }}
            whileHover={hover3D ? {
                y: -8,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 }
            } : undefined}
            className={`
        card-metallic 
        p-6 
        relative 
        overflow-hidden
        group
        ${className}
      `}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10" />
            </div>

            {/* Metallic shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-chrome/20 to-transparent"
                    style={{
                        transform: 'translateX(-100%)',
                        animation: 'shine 2s ease-in-out infinite'
                    }}
                />
            </div>

            {/* Top metallic border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chrome to-transparent" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-chrome/30 group-hover:border-neon-cyan/50 transition-colors duration-300" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-chrome/30 group-hover:border-neon-cyan/50 transition-colors duration-300" />
        </motion.div>
    );
}

// Variant for project cards
export function ProjectCard({
    title,
    description,
    tags,
    image,
    delay = 0
}: {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    delay?: number;
}) {
    return (
        <MetallicCard delay={delay} className="h-full flex flex-col">
            {image && (
                <div className="relative h-48 -m-6 mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gunmetal to-transparent z-10" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
            )}

            <h3 className="text-2xl font-bold text-metallic mb-3">
                {title}
            </h3>

            <p className="text-muted-foreground mb-4 flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-steel-blue/30 text-chrome border border-chrome/20"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </MetallicCard>
    );
}

// Variant for skill/experience cards
export function SkillCard({
    icon,
    title,
    description,
    level,
    delay = 0
}: {
    icon: ReactNode;
    title: string;
    description: string;
    level?: number;
    delay?: number;
}) {
    return (
        <MetallicCard delay={delay} className="text-center">
            <div className="flex justify-center mb-4 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300">
                <div className="text-5xl animate-float">
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-bold gradient-text mb-2">
                {title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4">
                {description}
            </p>

            {level !== undefined && (
                <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Proficiency</span>
                        <span>{level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: delay + 0.3 }}
                            className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full shadow-glow"
                        />
                    </div>
                </div>
            )}
        </MetallicCard>
    );
}
