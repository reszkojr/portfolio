import './index.css';

interface BoxProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: React.ReactNode;
    date?: string;
    href?: string;
}

const Box = ({ icon, href, title, badge, description, date }: BoxProps) => {

    return (
        <a href={href} target={'_blank'} className="relative cursor-pointer group"
        >
            <div className="box relative group-hover:brightness-150 flex flex-col items-start py-1 font-mono transition-[filter] duration-200">
                <div className="flex gap-3 relative w-full items-center">
                    <div className="min-w-14 h-14 bg-secondary rounded-xs">
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
        </a>
    );
};

export default Box;

