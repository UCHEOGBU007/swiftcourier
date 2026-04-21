import { useState } from 'react';
import { Package, Users, TrendingUp, FileText } from 'lucide-react';
import { RegisterClient } from './RegisterClient';
import { ManageShipments } from './ManageShipments';

export function Admin() {
  const [activeTab, setActiveTab] = useState<'register' | 'manage' | 'dashboard'>('dashboard');

  const stats = [
    { label: 'Total Shipments', value: '1,234', icon: <Package className="w-8 h-8" />, color: 'bg-blue-500' },
    { label: 'Active Clients', value: '567', icon: <Users className="w-8 h-8" />, color: 'bg-green-500' },
    { label: 'In Transit', value: '89', icon: <TrendingUp className="w-8 h-8" />, color: 'bg-yellow-500' },
    { label: 'Delivered Today', value: '45', icon: <FileText className="w-8 h-8" />, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage shipments, clients, and track performance</p>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-6 py-4 font-medium ${
                  activeTab === 'dashboard'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`px-6 py-4 font-medium ${
                  activeTab === 'register'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Register New Client
              </button>
              <button
                onClick={() => setActiveTab('manage')}
                className={`px-6 py-4 font-medium ${
                  activeTab === 'manage'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Manage Shipments
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl mb-6">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`${stat.color} text-white p-3 rounded-lg`}>
                          {stat.icon}
                        </div>
                      </div>
                      <p className="text-3xl mb-1">{stat.value}</p>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <h3 className="font-semibold mb-2">Quick Actions</h3>
                  <p className="text-gray-700">
                    Use the tabs above to register new clients or manage existing shipments. All changes are saved automatically to the database.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'register' && <RegisterClient />}
            {activeTab === 'manage' && <ManageShipments />}
          </div>
        </div>
      </div>
    </div>
  );
}
