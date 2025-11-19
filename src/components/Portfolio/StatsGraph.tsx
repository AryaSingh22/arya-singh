import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface StatsData {
    name: string;
    value: number;
    color: string;
}

interface StatsGraphProps {
    data: StatsData[];
    title: string;
    subtitle?: string;
}

// Custom tooltip for the graph
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="glass p-4 rounded-lg border border-chrome/20">
                <p className="text-chrome font-semibold">{payload[0].payload.name}</p>
                <p className="text-neon-cyan text-2xl font-bold">{payload[0].value}%</p>
            </div>
        );
    }
    return null;
};

export default function StatsGraph({ data, title, subtitle }: StatsGraphProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="card-metallic p-8"
        >
            <div className="mb-8">
                <h3 className="text-3xl font-bold gradient-text mb-2">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-muted-foreground">
                        {subtitle}
                    </p>
                )}
            </div>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <defs>
                        {data.map((entry, index) => (
                            <linearGradient key={index} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={entry.color} stopOpacity={0.8} />
                                <stop offset="100%" stopColor={entry.color} stopOpacity={0.3} />
                            </linearGradient>
                        ))}
                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(215 15% 25%)"
                        opacity={0.3}
                    />

                    <XAxis
                        dataKey="name"
                        stroke="hsl(210 15% 65%)"
                        tick={{ fill: 'hsl(210 15% 65%)', fontSize: 12 }}
                    />

                    <YAxis
                        stroke="hsl(210 15% 65%)"
                        tick={{ fill: 'hsl(210 15% 65%)', fontSize: 12 }}
                    />

                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(215 25% 20% / 0.2)' }} />

                    <Bar
                        dataKey="value"
                        radius={[8, 8, 0, 0]}
                        animationDuration={1000}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={`url(#gradient-${index})`}
                                className="hover:opacity-80 transition-opacity"
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

            {/* Stats summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {data.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="text-center p-4 rounded-lg bg-muted/30 border border-border/30"
                    >
                        <div
                            className="text-3xl font-bold mb-1"
                            style={{ color: stat.color }}
                        >
                            {stat.value}%
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                            {stat.name}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// Alternative: 3D-styled circular progress indicators
export function CircularStats({ stats }: { stats: StatsData[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                    className="relative"
                >
                    <div className="card-metallic p-6 text-center">
                        {/* Circular progress */}
                        <div className="relative w-32 h-32 mx-auto mb-4">
                            <svg className="transform -rotate-90 w-32 h-32">
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="56"
                                    stroke="hsl(218 15% 16%)"
                                    strokeWidth="8"
                                    fill="none"
                                />
                                <motion.circle
                                    cx="64"
                                    cy="64"
                                    r="56"
                                    stroke={stat.color}
                                    strokeWidth="8"
                                    fill="none"
                                    strokeLinecap="round"
                                    initial={{ strokeDasharray: '0 352' }}
                                    whileInView={{
                                        strokeDasharray: `${(stat.value / 100) * 352} 352`
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                                    style={{
                                        filter: `drop-shadow(0 0 8px ${stat.color})`
                                    }}
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl font-bold gradient-text">
                                    {stat.value}%
                                </span>
                            </div>
                        </div>

                        <h4 className="text-foreground font-semibold">
                            {stat.name}
                        </h4>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
