import { useRef, useState } from "react";

interface BoxProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: React.ReactNode;
    date?: string;
    href?: string;
}

const Box = ({ icon, href, title, badge, description, date }: BoxProps) => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            onClick={() => href && window.open(href, '_blank')}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative cursor-pointer group"
        >
            <div
                className={`absolute inset-0 -mx-3 -my-2 rounded-xl transition-all duration-300 pointer-events-none z-10 backdrop-blur-lg blur-[1px] ${hovered ? 'bg-primary-500/70' : 'bg-transparent'}`}
                style={{
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? 'scale(1)' : 'scale(0.95)',
                }}
            />

            <div className={"relative group-hover:brightness-150 flex flex-col items-start py-1 font-mono transition-[filter] duration-200 " + (hovered ? 'z-10' : '')}>
                <div className="flex gap-4 relative w-full items-center">
                    <div className="min-w-14 h-14 bg-secondary rounded-lg">
                        {icon}
                    </div>
                    <div className="flex gap-1 h-full justify-center flex-col">
                        <div className="flex gap-2">
                            <h3 className="text-secondary font-semibold text-sm">{title}</h3>
                            {badge}
                        </div>
                        <div className="flex gap-2">
                            <p className="text-secondary text-xs">{description}</p>
                            {date && <span className="text-tertiary group-hover:text-secondary transition-colors duration-200 text-xs">* {date}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Box;

