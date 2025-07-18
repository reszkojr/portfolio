interface BadgeProps {
    Icon?: React.ElementType;
    text: string;
    size?: string;
    color?: string;
}

const Badge = ({ Icon, text, size, color }: BadgeProps) => {
    const colors = {
        github: "bg-[#181717] text-white",
        linkedin: "bg-[#0077b5] text-white",
        white: "bg-white text-black",
    };

    return (
        <span className={`inline-block bg-primary-400/20 text-primary-400 font-mono ${ size ? size : "text-[0.6rem]" } font-extrabold px-[5px] pt-[3px] pb-[2px] italic rounded-xs text-nowrap h-min`}>
            {Icon && <Icon fontSize={"inherit"} className="mr-1 mb-[2px] text-primary-400" />}
            {text}
        </span>
    );
}

export default Badge;

