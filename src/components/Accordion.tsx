import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

interface AccordionProps {
    icon: string;
    title: string;
    date: string;
    location: string;
    description: string;
    badge?: React.ReactNode;
}

const Accordion = ({ title, badge, date, location, description }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        if (description.trim() === '') return;
        setIsOpen(prev => !prev);
    }

    return (
        <div className="flex flex-col items-start font-mono">
            <div className="flex gap-3 relative w-full">
                <div className="w-14 h-14 bg-secondary rounded-xs">
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
                {description && <div className="absolute top-4 -translate-y-1/2 right-0">
                    <button onClick={toggleAccordion} className={`cursor-pointer transition-[rotate] duration-150 ease-out text-2xl ${isOpen ? 'rotate-180' : ''}`}>
                        <KeyboardArrowDownIcon className={`text-primary-400`} />
                    </button>
                </div> }
            </div>
            <div className={`w-full transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-20' : 'max-h-0'}`}>
                <p className="text-secondary text-xs pt-3">{description}</p>
            </div>
        </div>
    );
}

export default Accordion;
