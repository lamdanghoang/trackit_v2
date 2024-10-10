"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts'
import { Search, ChevronDown } from 'lucide-react'

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
                <div className="bg-white rounded-lg shadow">
                    <h3 className="px-4 py-2 rounded-t-lg flex items-center text-lg font-semibold bg-lido/90 text-gray-50 backdrop-blur-sm">
                        Total Value Locked
                    </h3>
                    <p className="flex p-4 text-3xl font-bold items-center">$4,200,000</p>
                </div>
                <div className="bg-white rounded-lg shadow">
                    <h3 className="px-4 py-2 rounded-t-lg flex items-center text-lg font-semibold bg-lido/90 text-gray-50 backdrop-blur-sm">
                        24h Volume
                    </h3>
                    <p className="flex p-4 text-3xl font-bold items-center">$1,850,000</p>
                </div>
                <div className="bg-white rounded-lg shadow">
                    <h3 className="px-4 py-2 rounded-t-lg flex items-center text-lg font-semibold bg-lido/90 text-gray-50 backdrop-blur-sm">
                        Active Pools
                    </h3>
                    <p className="flex p-4 text-3xl font-bold items-center">5</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow mb-8">
                <h3 className="px-4 py-2 mb-5 rounded-t-lg flex items-center text-xl font-bold bg-lido/90 text-gray-50 backdrop-blur-sm">
                    Pools Performance
                </h3>
                <ResponsiveContainer width="100%" height={300} >
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="TVL" fill="#8884d8" name="TVL" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="Volume" fill="#82ca9d" name="24h Volume" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow">
                <h3 className="px-6 py-2 rounded-t-lg flex items-center text-xl font-bold bg-lido/90 text-gray-50 backdrop-blur-sm">
                    Pools
                </h3>
                <div className="px-6 py-2 flex justify-between items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search pools..."
                            className="pl-10 pr-4 py-2 border border-gray-500 rounded-lg"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                    {/* <button className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
                        Sort by <ChevronDown className="ml-2" size={20} />
                    </button> */}
                </div>
                <div className='px-6 '>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-600">
                                <th className="pb-2">Pool</th>
                                <th className="pb-2">TVL</th>
                                <th className="pb-2">24h Volume</th>
                                <th className="pb-2">APY</th>
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