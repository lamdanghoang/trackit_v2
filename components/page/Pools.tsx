"use client";
import { Search, ChevronDown } from 'lucide-react'
import BarChart from '../BarChart';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const chartData = [
    { name: 'ETH-USDC', TVL: 100000, Volume: 80000 },
    { name: 'BTC-USDT', TVL: 120000, Volume: 100000 },
    { name: 'SOL-USDC', TVL: 80000, Volume: 60000 },
    { name: 'AVAX-USDT', TVL: 60000, Volume: 40000 },
    { name: 'MATIC-USDC', TVL: 70000, Volume: 50000 },
]

const poolsData = [
    { pool: 'BTC-USDT', TVL: '$2,000,000', volume: '$750,000', APY: '10.20%' },
    { pool: 'ETH-USDC', TVL: '$1,500,000', volume: '$500,000', APY: '8.50%' },
    { pool: 'SOL-USDC', TVL: '$800,000', volume: '$300,000', APY: '7.80%' },
    { pool: 'AVAX-USDT', TVL: '$600,000', volume: '$200,000', APY: '6.90%' },
    { pool: 'MATIC-USDC', TVL: '$700,000', volume: '$250,000', APY: '7.20%' },
]

export default function Pools() {
    return (
        <main className="container mx-auto px-3 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-panel rounded-lg shadow">
                    <h3 className="px-4 py-2 rounded-t-lg flex items-center text-lg font-semibold text-blue-400 backdrop-blur-sm">
                        Trading Request
                    </h3>
                    {/* <div className="px-6 text-3xl font-bold text-gray-50">$0.56</div> */}
                    <div className="mt-2 px-6 py-2 flex justify-between items-center ">
                        <div>
                            <div className="text-sm text-gray-200 font-bold">Token</div>
                            {/* <div className="text-sm text-gray-400">1.68%</div> */}
                        </div>
                        <Input className="w-1/4 px-2 py-1 rounded " /> Lists of token
                    </div>
                    <div className="px-6 py-2 flex justify-between items-center ">
                        <div>
                            <div className="text-sm text-gray-200 font-bold">Position</div>
                            {/* <div className="text-sm text-gray-400">20.45%</div> */}
                        </div>
                        <Input className="w-1/4 px-2 py-1" /> Buy/Sell
                    </div>
                    {/* <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                        Simulate Position Performance
                    </Button> */}
                </div>
                <div className="bg-panel rounded-lg shadow">
                    <h3 className="px-4 py-2 rounded-t-lg flex items-center text-lg font-semibold text-blue-400 backdrop-blur-sm">
                        Deposit Amount
                    </h3>
                    <div className='px-5 h-9 '>
                        <Input placeholder='Type your amount' className="px-2 py-1" />
                    </div>
                    <div className="mt-2 px-6 py-2 flex justify-between items-center ">
                        <div>
                            <div className="text-sm text-gray-200 font-bold">Expect Profit</div>
                            <div className="text-sm text-gray-400">(%)</div>
                        </div>
                        <Input className="w-1/4 px-2 py-1 rounded " />
                    </div>
                    <div className="px-6 py-2 flex justify-between items-center ">
                        <div>
                            <div className="text-sm text-gray-200 font-bold">Expect Loss</div>
                            <div className="text-sm text-gray-400">(%)</div>
                        </div>
                        <Input className="w-1/4 px-2 py-1" />
                    </div>
                    {/* <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                        Simulate Position Performance
                    </Button> */}
                </div>
                <div className="bg-panel rounded-lg shadow">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                        Simulate Position Performance
                    </Button>
                </div>
            </div>

            <div className="bg-panel rounded-lg shadow mb-8">
                <h3 className="px-4 py-4 mb-5 flex items-center text-xl font-bold bg-panel text-blue-400 backdrop-blur-sm rounded-t-lg">
                    Chart
                </h3>
                {/* <ResponsiveContainer width="100%" height={300} >
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="TVL" fill="#8884d8" name="TVL" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="Volume" fill="#82ca9d" name="24h Volume" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer> */}
                <BarChart />
            </div>


            <div className="bg-panel rounded-lg shadow">
                <div className='flex justify-between items-center'>
                    <h3 className="px-6 py-2 rounded-t-lg flex items-center text-xl font-bold bg-panel text-blue-400 backdrop-blur-sm">
                        History
                    </h3>
                    <div className="px-6 py-2 flex justify-between items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search pools..."
                                className="pl-10 pr-4 py-2 border border-gray-500 rounded-lg bg-gray-100"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                        {/* <button className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
                        Sort by <ChevronDown className="ml-2" size={20} />
                    </button> */}
                    </div>
                </div>
                <div className='px-6 py-4 bg-gray-100 rounded-lg '>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-600">
                                <th className="pb-2">Symbol</th>
                                <th className="pb-2">Amount</th>
                                <th className="pb-2">24h Volume</th>
                                <th className="pb-2">PNL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {poolsData.map((pool, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-3">{pool.pool}</td>
                                    <td className="py-3">{pool.TVL}</td>
                                    <td className="py-3">{pool.volume}</td>
                                    <td className="py-3">{pool.APY}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}