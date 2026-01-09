import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import DcaPortal from './components/DcaPortal';

function App() {
    const [role, setRole] = useState('admin'); // 'admin' or 'dca'

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-[#4D148C] rounded-full"></div>
                    <span className="text-xl font-bold text-[#4D148C]">FedEx IDCAP</span>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setRole('admin')}
                        className={`px-3 py-1 rounded ${role === 'admin' ? 'bg-[#4D148C] text-white' : 'text-gray-600'}`}
                    >
                        Admin View
                    </button>
                    <button
                        onClick={() => setRole('dca')}
                        className={`px-3 py-1 rounded ${role === 'dca' ? 'bg-[#FF6600] text-white' : 'text-gray-600'}`}
                    >
                        DCA View
                    </button>
                </div>
            </nav>

            <main className="p-6">
                {role === 'admin' ? <AdminDashboard /> : <DcaPortal />}
            </main>
        </div>
    );
}

export default App;
