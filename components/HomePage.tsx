"use client";
import Panel from "./Panel";
import Pool from "./Pool";
import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./List";
import Governance from "./Gov";
import { Search, X, Maximize2, DollarSign, BarChart2, TrendingUp, Droplet } from 'lucide-react'
import Price from "./Price";
import News from "./News";

const dummy_airdrop = Array.from({ length: 8 }, () => {
    return {
        name: "ZKsync (ZK)",
        price: 0.14,
        change: 12.85,
    }
}).map((item, index) => <li key={index}>
    <Pool info={item} />
</li>);

const dummy_gov = Array.from({ length: 3 }, () => {
    return {
        name: "ZKsync (ZK)",
        price: 0.14,
        change: 12.85,
    }
}).map((item, index) => <li key={index}>
    <Governance />
</li>);

const dummy_price = Array.from({ length: 3 }, () => {
    return {
        name: "ZKsync (ZK)",
        price: 0.14,
        change: 12.85,
    }
}).map((item, index) => <li key={index}>
    <Price />
</li>);

const dummy_news = Array.from({ length: 3 }, () => {
    return {
        name: "ZKsync (ZK)",
        price: 0.14,
        change: 12.85,
    }
}).map((item, index) => <li key={index}>
    <News />
</li>);

const HomePage = () => {
    return (
        <main className="px-3 pt-4 pb-8">
            <div className="max-w-[2400px] mx-auto grid gap-4 grid-cols-8 lg:grid-cols-12">
                <div className="col-span-2 lg:col-span-3 hidden lg:block">
                    <Panel title="Claimable Airdrops" className="max-h-[600px]">
                        <List list={dummy_airdrop} />
                    </Panel>
                </div>
                <div className="col-span-8 lg:col-span-6 grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <Panel title="News" className="max-h-[300px]">
                            <List list={dummy_news} />
                        </Panel>
                        <Panel title="Prices" className="max-h-[300px]">
                            <List list={dummy_price} />
                        </Panel>
                    </div>
                    <div className="space-y-4">
                        <Panel title="Governance Proposals" className="max-h-[300px]">
                            <List list={dummy_gov} />
                        </Panel>
                        <Panel title="LlamaSearch" className="max-h-[300px]">
                            <div className="flex flex-col items-center space-y-4">
                                <img src="#" alt="Llama" className="w-24 h-24" />
                                <h3 className="text-xl font-bold">LlamaSearch</h3>
                                <div className="relative w-full">
                                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                                    <input type="search" placeholder="Search..." className="pl-8 bg-gray-700 border-gray-600 w-full" />
                                </div>
                            </div>
                        </Panel>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-3 hidden lg:block">
                    <Panel title="Claimable Airdrops" className="max-h-[600px]">
                        <List list={dummy_airdrop} />
                    </Panel>
                </div>
            </div>
        </main>
    );
}

export default HomePage;