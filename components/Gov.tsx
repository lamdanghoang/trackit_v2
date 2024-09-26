const Governance = () => {
    return (
        <div className="p-4 block rounded-lg overflow-hidden transition-colors duration-300 mt-2 ml-1 mr-1 bg-gray-800 hover:bg-gray-700 text-gray-100">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">Arbitrum</h3>
                <p className="text-sm text-gray-100">Ends in: 5h 35m</p>
            </div>
            <p className="text-sm">[Non-Constitutional] Arbitrum DAO Delegate Incentive Program</p>
            <div className="flex justify-between text-sm mt-2">
                <span>Votes</span>
                <span>FOR - DIP V1.5</span>
            </div>
            <div className="flex justify-between text-sm">
                <span>121.4M (3329 Voters)</span>
                <span>87.2M</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
                <span>Quorum</span>
                <span>Progress</span>
            </div>
            <div className="flex justify-between text-sm">
                <span>121.4M</span>
            </div>
        </div>
    );
};

export default Governance;