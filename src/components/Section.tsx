interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
    return (
        <>
            <div className="w-full max-w-4xl">
                <div className="flex items-center gap-2">
                    <div className="w-14 border-t-2 border-t-primary mb-2 mt-1"></div>
                    <h2 className="text-tertiary font-mono uppercase text-sm">{title}</h2>
                </div>
                {children}
            </div>
        </>
    )
}

export default Section;
