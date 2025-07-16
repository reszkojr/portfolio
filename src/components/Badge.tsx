interface BadgeProps {
    Icon?: React.ElementType;
    text: string;
}

const Badge = ({ Icon, text }: BadgeProps) => {
    return (
        <span className="inline-block bg-primary-400/20 text-primary-400 font-mono text-[0.6rem] font-extrabold px-[5px] pt-[3px] pb-[2px] italic rounded-md text-nowrap h-min">
            {Icon && <Icon fontSize={"inherit"} className="mr-1 text- text-primary-400" />}
            {text}
        </span>
    );
}

export default Badge;

