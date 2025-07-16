import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface AccordionProps {
    icon: string;
    title: string;
    date: string;
    location: string;
    description: string;
    badge?: React.ReactNode;
}

const Accordion = ({ title, badge, date, location, description }: AccordionProps) => {
    return (
        <div className="flex flex-col items-start font-mono">
            <div className="flex gap-4 relative w-full">
                <div className="w-14 h-14 bg-secondary rounded-lg">
                    <i className="icon icon-accordion"></i>
                </div>
                <div className="flex gap-1 justify-center flex-col grow">
                    <div className="flex gap-2">
                        <h3 className="text-secondary font-semibold text-sm">{title}</h3>
                        {badge}
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-secondary">{location}</span>
                        <span className="text-tertiary">* {date}</span>
                    </div>
                </div>
                <div className="absolute top-4 -translate-y-1/2 right-0">
                    <KeyboardArrowDownIcon className="text-primary-400 text-2xl" />
                </div>
            </div>
            <div className="accordion-content">
                <p className="text-secondary">{description}</p>
            </div>
        </div>
    );
}

export default Accordion;
