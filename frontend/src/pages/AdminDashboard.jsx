import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Shield,
    Settings,
    Search,
    UserPlus,
    UserMinus,
    BarChart,
    LogOut,
    AlertTriangle,
    Database,
    Lock
} from 'lucide-react';

// --- Shared Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${active
            ? 'bg-blue-900 text-white font-medium shadow-md'
            : 'text-blue-100 hover:bg-blue-800 hover:text-white overflow-hidden'
            }`}>
        <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-blue-300 group-hover:text-white'}`} />
        <span>{label}</span>
    </button>
);

// --- Views ---

const DashboardHome = () => {
    const [stats, setStats] = useState({ totalStudents: 0, activeExams: 0 });

    useEffect(() => {
        fetch('http://localhost:5000/api/stats/teacher')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error("Error fetching admin stats:", err));
    }, []);

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm font-medium">Total Users</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">{stats.totalStudents}</h3>
                    <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">+12% this month</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm font-medium">System Load</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">24%</h3>
                    <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-full mt-2 inline-block">Healthy</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm font-medium">Active Exams</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">{stats.activeExams}</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm font-medium">Alerts</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">3</h3>
                    <span className="text-xs text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded-full mt-2 inline-block">Attention Needed</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">System Notifications</h3>
                    <div className="space-y-3">
                        <div className="flex items-start p-3 bg-red-50 rounded-lg border border-red-100">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                            <div>
                                <p className="text-sm font-bold text-red-700">Database Backup Warning</p>
                                <p className="text-xs text-red-600 mt-1">Scheduled backup failed at 02:00 AM. Please verify storage settings.</p>
                            </div>
                        </div>
                        <div className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-100">
                            <Settings className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                            <div>
                                <p className="text-sm font-bold text-blue-700">System Maintenance</p>
                                <p className="text-xs text-blue-600 mt-1">Scheduled maintenance window in 2 days.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-gray-300 hover:bg-gray-50 transition-colors">
                            <UserPlus className="w-8 h-8 text-blue-500 mb-2" />
                            <span className="text-sm font-medium text-gray-700">Add User</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-gray-300 hover:bg-gray-50 transition-colors">
                            <Database className="w-8 h-8 text-purple-500 mb-2" />
                            <span className="text-sm font-medium text-gray-700">Backup Data</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UserManagementView = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/students')
            .then(res => res.json())
            .then(data => {
                // Map backend students to UI format
                // Mocking Role, Status for now as backend only returns students
                const mappedUsers = data.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: 'Student',
                    status: 'Active',
                    last: 'N/A'
                }));
                // Add some hardcoded admins/faculty for demo purposes since backend doesn't have them
                const demoStaff = [
                    { id: 'F001', name: 'Dr. Sarah Jensen', email: 's.jensen@edu.com', role: 'Faculty', status: 'Active', last: '2 mins ago' },
                    { id: 'A001', name: 'Admin User', email: 'admin@edu.com', role: 'Admin', status: 'Active', last: 'Just now' }
                ];
                setUsers([...demoStaff, ...mappedUsers]);
            })
            .catch(err => console.error("Error fetching users:", err));
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    <UserPlus className="w-4 h-4" />
                    <span>Add New User</span>
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
                <div className="flex gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search by name, ID, or email..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
                    </div>
                    <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                        <option>All Roles</option>
                        <option>Student</option>
                        <option>Faculty</option>
                        <option>Admin</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">User</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Role</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Last Login</th>
                            <th className="text-right px-6 py-4 text-xs font-bold text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.length > 0 ? users.map((user, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{user.name}</p>
                                        <p className="text-xs text-gray-500">{user.email}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{user.last}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors">
                                        <UserMinus className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr><td colSpan="5" className="text-center py-4">Loading users...</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return <DashboardHome />;
            case 'users': return <UserManagementView />;
            case 'settings': return <div className="text-center py-20 text-gray-500">System Settings Panel (Placeholder)</div>;
            default: return <DashboardHome />;
        }
    };

    return (
        <div className="flex h-screen bg-[#F0F2F5] font-sans overflow-hidden">
            {/* Dark Sidebar for Admin */}
            <aside className="w-64 bg-[#1e293b] flex flex-col border-r border-[#334155] z-20 shadow-xl">
                <div className="p-8 flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <span className="text-xl font-bold tracking-tight block">AdminPanel</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    <p className="px-4 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 mt-2">Core</p>
                    <SidebarItem icon={LayoutDashboard} label="Overview" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                    <SidebarItem icon={Users} label="User Management" active={activeTab === 'users'} onClick={() => setActiveTab('users')} />
                    <SidebarItem icon={Settings} label="System Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
                    <SidebarItem icon={Database} label="Data Maintenance" />
                </nav>

                <div className="p-4 border-t border-[#334155]">
                    <button onClick={handleLogout} className="flex items-center space-x-3 w-full p-3 rounded-xl bg-red-900/20 text-red-400 hover:bg-red-900/40 transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <div className="flex-1 overflow-y-auto p-8">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}
