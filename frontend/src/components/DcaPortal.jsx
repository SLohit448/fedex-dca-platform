import React from 'react';
import { Phone, CheckCircle, Clock } from 'lucide-react';

const DcaPortal = () => {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold text-gray-900">Agent Portal</h1>
                <p className="text-gray-500">My Assigned Cases</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "John Doe", amount: "$450", age: "45 days", prob: "High" },
                    { name: "Alice Smith", amount: "$1,200", age: "60 days", prob: "Medium" },
                    { name: "Bob Johnson", amount: "$3,000", age: "90 days", prob: "Low" },
                ].map((c, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg">{c.name}</h3>
                                <p className="text-gray-500 text-sm">ID: #C00{i + 1}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${c.prob === 'High' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {c.prob} Recovery
                            </span>
                        </div>

                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Amount Due:</span>
                                <span className="font-bold">{c.amount}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Days Overdue:</span>
                                <span>{c.age}</span>
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <button className="flex-1 bg-[#4D148C] text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-[#3b0f6b]">
                                <Phone size={16} /> Call
                            </button>
                            <button className="flex-1 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DcaPortal;
