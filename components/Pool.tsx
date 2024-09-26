type Props = {
    info: {
        name: string;
        price: number;
        change: number;
    }
}

const Pool: React.FC<Props> = ({ info }) => {
    return (
        <div className="block rounded-lg overflow-hidden transition-colors duration-300 mt-2 ml-1 mr-1 bg-gray-800 hover:bg-gray-700">
            <div className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-6 h-6 flex-shrink-0 mr-3"></div>
                    <div>
                        <h3 className="font-semibold text-gray-50">{info.name}</h3>
                        <p className="text-sm text-gray-100">Ends in 98d 15h 53m</p>
                        <span className="text-xs font-medium block">
                            <span className="text-gray-100">$0.14</span>
                            <span className="ml-1 text-green-600">+12.85%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pool;