interface SectionProps {
    Icon: React.ElementType;
    title: string;
    children?: React.ReactNode;
}

const Section = ({ Icon, title, children }: SectionProps) => {
    return (
        <>
            <div className="w-full max-w-4xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <div>
                        <Icon className="text-primary-400 text-2xl" />
                    </div>
                    <h2 className="text-secondary text-xl font-semibold uppercase">{title}</h2>
                </div>
                {children}
            </div>
        </>
    )
}

export default Section;
