import { MdOutlineKeyboardArrowDown } from "react-icons/md";  

interface AccordionProps {
    icon: string;
    title: string;
    date: string;
    location: string;
    description: string;
}

const Accordion = ({ title, date, location, description }: AccordionProps) => {
    return (
        <div className="flex flex-col items-start py-3 font-mono h-20 ">
            <div className="flex gap-4 relative w-full">
                <div className="w-14 h-14 bg-secondary rounded-lg">
                    <i className="icon icon-accordion"></i>
                </div>
                <div className="flex gap-1 h-full justify-center flex-col">
                    <h3 className="text-secondary font-semibold text-sm">{title}</h3>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-secondary">{location}</span>
                        <span className="text-tertiary">{date}</span>
                    </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0">
                    <MdOutlineKeyboardArrowDown className="text-primary text-2xl" />
                </div>
            </div>
            <div className="accordion-content">
                <p className="text-secondary">{description}</p>
            </div>
        </div>
    );
}

export default Accordion;
