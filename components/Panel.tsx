type Props = {
    children: React.ReactNode,
    title: string,
    className: string,
}

const Panel: React.FC<Props> = ({ children, title, className }) => {
    const classes = `rounded-lg shadow-md relative ${className} overflow-auto `;
    return (
        <section className={classes}>
            <div className="bg-gray-800/40 ">
                <h3 className="sticky top-0 p-2 rounded-t-lg cursor-move z-10 transition-all duration-300 ease-in-out flex items-center text-sm font-semibold bg-gray-700/90 text-gray-200 backdrop-blur-sm">
                    {title}
                </h3>

                {children}

            </div>
        </section>
    );
}

export default Panel;