import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";

type Props = {
    children: React.ReactNode,
    title: string,
    height: string,
}

const Panel: React.FC<Props> = ({ children, title, height }) => {
    const classes = `${height} w-full`;
    return (
        <section className="pb-1 rounded-lg shadow-md relative bg-gray-800/40">
            <h3 className="z-0 sticky top-0 p-2 rounded-t-lg cursor-move transition-all duration-300 ease-in-out flex items-center text-sm font-semibold bg-lido/90 text-gray-200 backdrop-blur-sm">
                {title}
            </h3>
            <ScrollArea className={classes}>
                <div>

                    {children}

                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </section>
    );
}

export default Panel;