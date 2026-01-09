import React from 'react';
import { BarChart, Users, DollarSign, Activity } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
    </div>
);

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-500">Overview of Debt Collection Performance</p>
            </header>

            {/* KPI Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard title="Total Debt" value="$4.2M" icon={DollarSign} color="bg-red-500" />
                <StatCard title="Recovery Rate" value="68%" icon={Activity} color="bg-green-500" />
                <StatCard title="Active Cases" value="1,245" icon={BarChart} color="bg-blue-500" />
                <StatCard title="Active DCAs" value="12" icon={Users} color="bg-[#4D148C]" />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity / Case List */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-lg mb-4">Priority Cases (AI Ranked)</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="p-3">Customer</th>
                                    <th className="p-3">Amount</th>
                                    <th className="p-3">Score</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { name: "Acme Corp", amount: "$12,500", score: "92", status: "New" },
                                    { name: "Globex Inc", amount: "$8,200", score: "88", status: "Assigned" },
                                    { name: "Soylent Corp", amount: "$45,000", score: "45", status: "Risk" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-3 font-medium">{row.name}</td>
                                        <td className="p-3">{row.amount}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${Number(row.score) > 80 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                {row.score}%
                                            </span>
                                        </td>
                                        <td className="p-3">{row.status}</td>
                                        <td className="p-3">
                                            <button className="text-[#4D148C] hover:underline">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Agency Performance */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-lg mb-4">Top Performing Agencies</h3>
                    <div className="space-y-4">
                        {['Alpha Collections', 'Omega Recovery', 'Swift Justice'].map((agency, i) => (
                            <div key={i} className="flex justify-between items-center">
                                <span className="text-gray-700">{agency}</span>
                                <span className="font-bold text-green-600">{95 - i * 5}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
