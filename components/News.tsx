const News = () => {
    return (
        <div className="p-4 block rounded-lg overflow-hidden transition-colors duration-300 mt-2 ml-1 mr-1 bg-gray-800 hover:bg-gray-700 text-gray-50">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">CoinDesk</h3>
                <span className="text-red-400 text-xs">Negative</span>
            </div>
            <p className="text-sm text-gray-400">1h 18m ago</p>
            <p className="text-sm font-medium">Canada's CBDC Departure Risks Web3's Interoperable Future</p>
            <p className="text-sm">A lack of interoperability poses an existential threat to central bank digital currencies, as it does to Web3 itself, says Temujin Louie, CEO of Wanchain.</p>
        </div>
    );
}

export default News;