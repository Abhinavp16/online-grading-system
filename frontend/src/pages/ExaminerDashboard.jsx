import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    PlusCircle,
    Users,
    CheckSquare,
    Settings,
    Search,
    Bell,
    ChevronDown,
    MoreHorizontal,
    Briefcase,
    Calendar,
    LogOut,
    Edit,
    Trash2,
    Save,
    X
} from 'lucide-react';

// --- Shared Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${active
            ? 'bg-blue-50 text-blue-600 font-medium shadow-sm'
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 overflow-hidden'
            }`}>
        <Icon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
        <span>{label}</span>
    </button>
);

// --- Views ---

const DashboardHome = () => {
    const [stats, setStats] = useState({ activeExams: 0, pendingGrades: 0, totalStudents: 0 });

    useEffect(() => {
        fetch('http://localhost:5000/api/stats/teacher')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error("Error fetching stats:", err));
    }, []);

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Active Exams</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.activeExams}</h3>
                        </div>
                        <div className="p-3 rounded-xl bg-blue-500 text-white">
                            <FileText className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Pending Grades</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.pendingGrades}</h3>
                        </div>
                        <div className="p-3 rounded-xl bg-orange-500 text-white">
                            <CheckSquare className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Students</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.totalStudents}</h3>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-500 text-white">
                            <Users className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Exam Activity</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                    PH
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Physics 101 Finals</h4>
                                    <p className="text-sm text-gray-500">Submitted by 45/50 Students</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">2 hours ago</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CreateTestView = () => {
    const [testData, setTestData] = useState({
        title: '',
        subject: 'Mathematics 101',
        date: '',
        startTime: '',
        duration: '',
        instructions: '',
        assignedTo: []
    });
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        // Fetch students
        fetch('http://localhost:5000/api/students')
            .then(res => res.json())
            .then(data => setStudents(data))
            .catch(err => console.error("Error fetching students:", err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTestData(prev => ({ ...prev, [name]: value }));
    };

    const handleStudentSelect = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setTestData(prev => ({ ...prev, assignedTo: selectedOptions }));
    };

    // Toggle specific student selection
    const toggleStudent = (studentId) => {
        setTestData(prev => {
            const current = prev.assignedTo;
            if (current.includes(studentId)) {
                return { ...prev, assignedTo: current.filter(id => id !== studentId) };
            } else {
                return { ...prev, assignedTo: [...current, studentId] };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/tests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(testData)
            });
            if (response.ok) {
                setSuccessMsg('Assessment created successfully!');
                // Reset form
                setTestData({
                    title: '',
                    subject: 'Mathematics 101',
                    date: '',
                    startTime: '',
                    duration: '',
                    instructions: '',
                    assignedTo: []
                });
                setTimeout(() => setSuccessMsg(''), 3000);
            }
        } catch (error) {
            console.error("Error creating test:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Create New Assessment</h2>
                {successMsg && <span className="text-green-600 font-bold">{successMsg}</span>}
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-300">
                    <Save className="w-4 h-4" />
                    <span>{loading ? 'Saving...' : 'Save Draft'}</span>
                </button>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Exam Title</label>
                        <input
                            name="title"
                            value={testData.title}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g., Advanced Calculus Midterm"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject Course</label>
                        <select
                            name="subject"
                            value={testData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none">
                            <option>Mathematics 101</option>
                            <option>Physics 202</option>
                            <option>CS 305</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <input
                            name="date"
                            value={testData.date}
                            onChange={handleChange}
                            type="date"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                        <input
                            name="startTime"
                            value={testData.startTime}
                            onChange={handleChange}
                            type="time"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Duration (mins)</label>
                        <input
                            name="duration"
                            value={testData.duration}
                            onChange={handleChange}
                            type="number"
                            placeholder="90"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none"
                        />
                    </div>
                </div>

                {/* Student Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assign to Students</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-48 overflow-y-auto p-4 bg-gray-50 rounded-xl border border-gray-200">
                        {students.length > 0 ? students.map(student => (
                            <div
                                key={student.id}
                                onClick={() => toggleStudent(student.id)}
                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all border ${testData.assignedTo.includes(student.id)
                                    ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-100'
                                    : 'bg-white border-gray-100 hover:border-gray-300'
                                    }`}
                            >
                                <div className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${testData.assignedTo.includes(student.id) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                                    }`}>
                                    {testData.assignedTo.includes(student.id) && <CheckSquare className="w-3 h-3 text-white" />}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{student.name}</p>
                                    <p className="text-xs text-gray-500">{student.email}</p>
                                </div>
                            </div>
                        )) : (
                            <p className="text-sm text-gray-500">Loading students...</p>
                        )}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Selected: {testData.assignedTo.length} students</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                    <textarea
                        name="instructions"
                        value={testData.instructions}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none"
                        placeholder="Enter instructions for students..."></textarea>
                </div>

                <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Questions</h3>
                    <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 transition-colors">
                        <PlusCircle className="w-10 h-10 text-gray-400 mb-2" />
                        <p className="text-gray-600 font-medium">Add New Question</p>
                        <p className="text-gray-400 text-sm">Multiple Choice, Short Answer, or Essay</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

const GradingQueueView = () => {
    const [pendingResults, setPendingResults] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/results/pending')
            .then(res => res.json())
            .then(data => setPendingResults(data))
            .catch(err => console.error("Error fetching pending results:", err));
    }, []);

    const handleApprove = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/results/approve/${id}`, {
                method: 'PUT'
            });
            if (response.ok) {
                // Remove from local list
                setPendingResults(prev => prev.filter(r => r.id !== id));
            }
        } catch (error) {
            console.error("Error approving result:", error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Grading Queue</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Student</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Test Title</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Date Submitted</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Score (Auto)</th>
                            <th className="text-right px-6 py-4 text-xs font-bold text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {pendingResults.length > 0 ? pendingResults.map((result) => (
                            <tr key={result.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-bold text-gray-900">{result.studentName}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{result.testTitle}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{result.date}</td>
                                <td className="px-6 py-4 text-sm font-bold text-blue-600">{result.score}/100</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button
                                        onClick={() => handleApprove(result.id)}
                                        className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold hover:bg-green-200 transition-colors">
                                        Approve
                                    </button>
                                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors">
                                        Review
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-8 text-center text-gray-500">No pending grades.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ViewExams = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/tests')
            .then(res => res.json())
            .then(data => setExams(data))
            .catch(err => console.error("Error fetching exams:", err));
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Manage Examinations</h2>
                <div className="flex space-x-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search exams..." className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Exam Title</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Subject</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Date</th>
                            <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                            <th className="text-right px-6 py-4 text-xs font-bold text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {exams.length > 0 ? exams.map((exam, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-bold text-gray-900">{exam.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{exam.subject}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{exam.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${exam.status === 'Active' ? 'bg-green-100 text-green-700' :
                                        exam.status === 'Completed' ? 'bg-gray-100 text-gray-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                        {exam.status || 'Scheduled'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Edit</button>
                                    <button className="text-red-500 hover:text-red-700 font-medium text-sm">Delete</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-8 text-center text-gray-500">No exams found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default function ExaminerDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return <DashboardHome />;
            case 'create-test': return <CreateTestView />;
            case 'view-exams': return <ViewExams />;
            case 'grading-queue': return <GradingQueueView />;
            default: return <DashboardHome />;
        }
    };

    return (
        <div className="flex h-screen bg-[#F8F9FC] font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 bg-white flex flex-col border-r border-gray-100 z-20">
                <div className="p-8 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                        <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight block">EduExaminer</span>
                        <span className="text-xs text-indigo-600 font-medium">Faculty Portal</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 mt-2">Tools</p>
                    <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                    <SidebarItem icon={PlusCircle} label="Create Assessment" active={activeTab === 'create-test'} onClick={() => setActiveTab('create-test')} />
                    <SidebarItem icon={FileText} label="Manage Exams" active={activeTab === 'view-exams'} onClick={() => setActiveTab('view-exams')} />
                    <SidebarItem icon={CheckSquare} label="Grading Queue" active={activeTab === 'grading-queue'} onClick={() => setActiveTab('grading-queue')} />
                    <SidebarItem icon={Users} label="Students" />
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button onClick={handleLogout} className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-10">
                    <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeTab.replace('-', ' ')}</h1>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
                            <img src="https://i.pravatar.cc/100?img=12" alt="Faculty" className="w-8 h-8 rounded-full border border-white shadow-sm" />
                            <span className="text-sm font-medium text-gray-700 pr-2">Dr. Sarah Jensen</span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}
