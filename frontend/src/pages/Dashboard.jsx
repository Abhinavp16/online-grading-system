import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    BarChart2,
    Calendar,
    User,
    Settings,
    Search,
    Bell,
    ChevronDown,
    MoreHorizontal,
    Download,
    Filter,
    TrendingUp,
    CheckCircle,
    Clock,
    CalendarDays,
    Mail,
    Phone,
    MapPin,
    Shield,
    Moon,
    LogOut,
    Edit3,
    Save,
    X,
    FileText,
    Sparkles,
    UploadCloud,
    ArrowRight,
    ArrowLeft,
    Timer,
    AlertCircle
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

const StatCard = ({ title, value, subtext, icon: Icon, colorClass, trend }) => (
    <div className="group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wide">{title}</p>
                    <div className="flex items-baseline space-x-3">
                        <h3 className="text-4xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">{value}</h3>
                        {trend && (
                            <span className="text-emerald-600 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 animate-pulse">
                                {trend}
                            </span>
                        )}
                    </div>
                </div>
                <div className={`p-4 rounded-2xl ${colorClass} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>
            <p className="text-gray-400 text-sm font-medium">{subtext}</p>
        </div>
    </div>
);

const ExamCard = ({ subject, title, date, time, onViewSyllabus, onStartTest }) => (
    <div className="group bg-white p-6 rounded-3xl border border-gray-100 mb-4 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-2 rounded-xl uppercase tracking-wide shadow-sm ${subject === 'Mathematics'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    : subject === 'Physics'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                        : subject === 'Computer Science'
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                            : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white'
                    }`}>
                    {subject}
                </span>
                <button className="text-gray-300 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            <h4 className="font-bold text-gray-900 mb-4 text-lg group-hover:text-blue-600 transition-colors">{title}</h4>

            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                    <div className="p-1 bg-blue-50 rounded-lg">
                        <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium">{date}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="p-1 bg-purple-50 rounded-lg">
                        <Clock className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium">{time}</span>
                </div>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={() => onViewSyllabus && onViewSyllabus(subject)}
                    className="flex-1 py-3 border-2 border-gray-200 hover:border-blue-300 rounded-2xl text-sm font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group-hover:shadow-md">
                    View Syllabus
                </button>
                <button
                    onClick={() => onStartTest && onStartTest({ subject, title })}
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                    Start Test
                </button>
            </div>
        </div>
    </div>
);

const ResultRow = ({ subject, date, score, status }) => (
    <tr className="hover:bg-gray-50 transition-colors">
        <td className="py-4 px-4 text-sm font-medium text-gray-900">
            <div className="font-semibold">{subject}</div>
            <div className="text-xs text-gray-400 font-normal">Course ID: {subject.substring(0, 3).toUpperCase()}101</div>
        </td>
        <td className="py-4 px-4 text-sm text-gray-500">{date}</td>
        <td className="py-4 px-4 text-sm font-bold text-gray-900">{score}/100</td>
        <td className="py-4 px-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status === 'Passed' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                }`}>
                {status}
            </span>
        </td>
        <td className="py-4 px-4 text-right">
            <button className="text-gray-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
            </button>
        </td>
    </tr>
);

// --- Views ---

// --- Views ---

const DashboardHome = ({ onViewSyllabus, onStartTest, upcomingExams = [], stats }) => (
    <div className="space-y-8 animate-fade-in-up">
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
                title="Current GPA"
                value="3.8"
                subtext="Above average performance"
                colorClass="bg-gradient-to-br from-emerald-500 to-emerald-600"
                icon={TrendingUp}
                trend="+0.2%"
            />
            <StatCard
                title="Exams Taken"
                value={stats?.examsTaken || 0}
                subtext="This semester"
                colorClass="bg-gradient-to-br from-blue-500 to-blue-600"
                icon={CheckCircle}
            />
            <StatCard
                title="Pending Results"
                value={stats?.pendingResults || 0}
                subtext="Awaiting grades"
                colorClass="bg-gradient-to-br from-orange-400 to-orange-500"
                icon={Clock}
            />
            <StatCard
                title="Upcoming"
                value={upcomingExams.length}
                subtext="Next 7 days"
                colorClass="bg-gradient-to-br from-purple-500 to-purple-600"
                icon={CalendarDays}
            />
        </div>

        {/* Enhanced Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Performance Chart */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Academic Performance</h3>
                        <p className="text-gray-500 text-sm mt-1">Average score trend over last 6 months</p>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-blue-50 rounded-xl text-sm font-medium text-gray-600 hover:text-blue-600 transition-all border border-gray-200 hover:border-blue-200">
                        <span>Last 6 Months</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </div>

                {/* Enhanced Chart */}
                <div className="h-72 relative w-full flex items-end justify-between px-4 pb-8 border-b border-gray-50">
                    <svg className="absolute bottom-8 left-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.3 }} />
                                <stop offset="50%" style={{ stopColor: '#6366F1', stopOpacity: 0.1 }} />
                                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                            </linearGradient>
                        </defs>
                        <path d="M0 45 C 20 40, 30 20, 50 25 S 80 5, 100 2 V 50 H 0 Z" fill="url(#grad1)" />
                        <path d="M0 45 C 20 40, 30 20, 50 25 S 80 5, 100 2" fill="none" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#6366F1" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Data points */}
                    <div className="absolute bottom-8 left-0 w-full h-full flex items-end justify-between px-4">
                        {[45, 40, 20, 25, 5, 2].map((point, idx) => (
                            <div key={idx} className="relative group/point">
                                <div
                                    className="w-3 h-3 bg-blue-600 rounded-full shadow-lg hover:scale-150 transition-transform cursor-pointer"
                                    style={{ marginBottom: `${point}%` }}
                                ></div>
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/point:opacity-100 transition-opacity whitespace-nowrap">
                                    {85 + Math.floor(Math.random() * 10)}%
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute -bottom-1 left-0 w-full flex justify-between text-xs text-gray-400 font-semibold px-2">
                        <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span>
                    </div>

                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className="border-b border-dashed border-gray-100 w-full h-0"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Upcoming Exams */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Upcoming Exams</h3>
                    <button className="text-blue-600 text-sm font-bold hover:text-blue-700 px-3 py-1 hover:bg-blue-50 rounded-lg transition-all">
                        See All
                    </button>
                </div>
                <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                    {upcomingExams.length > 0 ? (
                        upcomingExams.map(exam => (
                            <ExamCard
                                key={exam.id}
                                subject={exam.subject}
                                title={exam.title}
                                date={exam.date}
                                time={exam.startTime}
                                onViewSyllabus={onViewSyllabus}
                                onStartTest={() => onStartTest(exam)}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 my-4">No upcoming exams assigned.</p>
                    )}
                </div>
            </div>
        </div>

        {/* Enhanced Latest Updates */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Latest Updates</h3>
                    <p className="text-gray-500 text-sm mt-1">Recent activity and notifications</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-6">
                <div className="flex space-x-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Biology 101 Results Published</p>
                        <p className="text-sm text-gray-500 mt-1 mb-2">Your final grade for the semester has been released. Check your performance metrics.</p>
                        <div className="flex items-center space-x-4">
                            <span className="text-xs text-gray-400 font-semibold">2 hours ago</span>
                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">Grade: A-</span>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4 p-4 rounded-2xl hover:bg-yellow-50 transition-colors group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Bell className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Exam Schedule Change</p>
                        <p className="text-sm text-gray-500 mt-1 mb-2">The Physics Midterm has been rescheduled to accommodate the lab session.</p>
                        <div className="flex items-center space-x-4">
                            <span className="text-xs text-gray-400 font-semibold">Yesterday</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold">Important</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MyExamsView = ({ onViewSyllabus, onStartTest, upcomingExams = [] }) => (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingExams.length > 0 ? (
                upcomingExams.map(exam => (
                    <ExamCard
                        key={exam.id}
                        subject={exam.subject}
                        title={exam.title}
                        date={exam.date}
                        time={exam.startTime}
                        onViewSyllabus={onViewSyllabus}
                        onStartTest={() => onStartTest(exam)}
                    />
                ))
            ) : (
                <div className="col-span-3 text-center py-10">
                    <p className="text-gray-500">No exams assigned yet.</p>
                </div>
            )}
        </div>
    </div>
);

const ResultsView = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/my-results/S001')
            .then(res => res.json())
            .then(data => setResults(data))
            .catch(err => console.error("Error fetching results", err));
    }, []);

    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">All Results</h3>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-900">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm font-medium">Filter</span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-50">
                            <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider py-4 px-4">Subject</th>
                            <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider py-4 px-4">Date</th>
                            <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider py-4 px-4">Score</th>
                            <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider py-4 px-4">Status</th>
                            <th className="text-right text-xs font-bold text-gray-400 uppercase tracking-wider py-4 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {results.length > 0 ? results.map((res, i) => (
                            <ResultRow key={i} subject={res.testTitle} date={res.date} score={res.score} status={res.status} />
                        )) : (
                            <tr><td colSpan="5" className="text-center py-4 text-gray-500">No approved results yet.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ScheduleView = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-gray-900">Weekly Schedule</h3>
                <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-500"><ChevronDown className="w-4 h-4 rotate-90" /></button>
                    <span className="py-2 px-4 bg-gray-50 rounded-lg text-sm font-medium">Oct 23 - Oct 29</span>
                    <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-500"><ChevronDown className="w-4 h-4 -rotate-90" /></button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                    <div className="grid grid-cols-6 gap-4 mb-4">
                        <div className="text-center text-xs font-bold text-gray-400 uppercase">Time</div>
                        {days.map(d => <div key={d} className="text-center text-xs font-bold text-gray-400 uppercase">{d}</div>)}
                    </div>
                    <div className="space-y-4">
                        {timeSlots.map(time => (
                            <div key={time} className="grid grid-cols-6 gap-4 items-center">
                                <div className="text-center text-xs text-gray-500 font-medium">{time}</div>
                                {days.map((d, i) => (
                                    <div key={d} className={`h-16 rounded-xl border border-gray-50 p-2 text-xs transition-colors hover:border-blue-200 ${Math.random() > 0.7 ? 'bg-blue-50 border-blue-100 text-blue-700' :
                                        Math.random() > 0.8 ? 'bg-purple-50 border-purple-100 text-purple-700' : 'bg-gray-50/50'
                                        }`}>
                                        {Math.random() > 0.7 && (
                                            <>
                                                <div className="font-bold">CS-101</div>
                                                <div className="opacity-75">Room 302</div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfileView = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        email: 'alex.morgan@university.edu',
        phone: '+1 (555) 123-4567',
        address: '123 University Ave, Apt 4B',
        dob: 'March 15, 2003'
    });

    const handleChange = (field, value) => {
        setProfileData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="relative">
                <div className="h-48 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hover:opacity-30 transition-opacity"></div>
                </div>
                <div className="absolute -bottom-12 left-12 flex items-end">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </div>
                <div className="absolute bottom-4 right-8 flex space-x-3">
                    {isEditing ? (
                        <>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white font-medium hover:bg-white/30 transition-all shadow-sm"
                            >
                                <X className="w-4 h-4" />
                                <span>Cancel</span>
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 rounded-xl font-bold shadow-sm hover:bg-blue-50 transition-all"
                            >
                                <Save className="w-4 h-4" />
                                <span>Save Changes</span>
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white font-medium hover:bg-white/30 transition-all shadow-sm"
                        >
                            <Edit3 className="w-4 h-4" />
                            <span>Edit Profile</span>
                        </button>
                    )}
                </div>
            </div>

            <div className="pt-12 px-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* User Info & Stats */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Alex Morgan</h2>
                        <p className="text-gray-500 font-medium">Student ID: 48291</p>
                        <div className="mt-2 inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-sm font-semibold">
                            Computer Science Major
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">GPA</p>
                            <p className="text-2xl font-bold text-emerald-600 mt-1">3.8</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Credits</p>
                            <p className="text-2xl font-bold text-blue-600 mt-1">104</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Rank</p>
                            <p className="text-2xl font-bold text-purple-600 mt-1">12th</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">Sem</p>
                            <p className="text-2xl font-bold text-orange-500 mt-1">6</p>
                        </div>
                    </div>
                </div>

                {/* Details Form/Grid */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                            <div className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-blue-100 ring-4 ring-blue-50' : 'bg-gray-50 border border-transparent'}`}>
                                <Mail className={`w-4 h-4 ${isEditing ? 'text-blue-500' : 'text-gray-400'}`} />
                                {isEditing ? (
                                    <input
                                        type="email"
                                        value={profileData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="bg-transparent w-full outline-none text-sm font-medium text-gray-900 placeholder-gray-400"
                                    />
                                ) : (
                                    <span className="text-sm text-gray-900 font-medium truncate">{profileData.email}</span>
                                )}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                            <div className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-blue-100 ring-4 ring-blue-50' : 'bg-gray-50 border border-transparent'}`}>
                                <Phone className={`w-4 h-4 ${isEditing ? 'text-blue-500' : 'text-gray-400'}`} />
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        value={profileData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        className="bg-transparent w-full outline-none text-sm font-medium text-gray-900 placeholder-gray-400"
                                    />
                                ) : (
                                    <span className="text-sm text-gray-900 font-medium truncate">{profileData.phone}</span>
                                )}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Home Address</label>
                            <div className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-blue-100 ring-4 ring-blue-50' : 'bg-gray-50 border border-transparent'}`}>
                                <MapPin className={`w-4 h-4 ${isEditing ? 'text-blue-500' : 'text-gray-400'}`} />
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={profileData.address}
                                        onChange={(e) => handleChange('address', e.target.value)}
                                        className="bg-transparent w-full outline-none text-sm font-medium text-gray-900 placeholder-gray-400"
                                    />
                                ) : (
                                    <span className="text-sm text-gray-900 font-medium truncate">{profileData.address}</span>
                                )}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Date of Birth</label>
                            <div className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-blue-100 ring-4 ring-blue-50' : 'bg-gray-50 border border-transparent'}`}>
                                <Calendar className={`w-4 h-4 ${isEditing ? 'text-blue-500' : 'text-gray-400'}`} />
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={profileData.dob}
                                        onChange={(e) => handleChange('dob', e.target.value)}
                                        className="bg-transparent w-full outline-none text-sm font-medium text-gray-900 placeholder-gray-400"
                                    />
                                ) : (
                                    <span className="text-sm text-gray-900 font-medium truncate">{profileData.dob}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SettingsView = ({ onLogout }) => (
    <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-gray-400" />
                Account Preferences
            </h3>
            <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Moon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Dark Mode</p>
                            <p className="text-xs text-gray-500">Switch between light and dark themes</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                            <Bell className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Notifications</p>
                            <p className="text-xs text-gray-500">Receive email updates about exams</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Privacy Mode</p>
                            <p className="text-xs text-gray-500">Hide stats from public leaderboard</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                <button
                    onClick={onLogout}
                    className="flex items-center space-x-2 px-6 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl font-medium transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    </div>
);

const CreateTestView = ({ onGenerate }) => {
    const [syllabusFile, setSyllabusFile] = useState(null);
    const [questionsFile, setQuestionsFile] = useState(null);
    const [testName, setTestName] = useState('');
    const [duration, setDuration] = useState('30 Minutes');
    const [difficulty, setDifficulty] = useState('Medium');
    const [questionType, setQuestionType] = useState('Multiple Choice');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('http://localhost:5000/api/generate-test', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subject: testName || 'Mathematics', // Default for demo
                    duration,
                    difficulty,
                    questionType
                })
            });
            const data = await response.json();
            onGenerate(data);
        } catch (error) {
            console.error("Failed to generate test:", error);
            // Fallback for demo
            onGenerate({
                name: testName || "Custom Test",
                duration,
                difficulty,
                questionType,
                examiner: "AI Generator (Offline)"
            });
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-purple-200">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Create Custom Test</h3>
                            <p className="text-gray-500 text-sm">AI-Powered Exam Generation</p>
                        </div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mt-4">
                        Upload your course syllabus and previous year questions. Our AI will analyze the patterns and content to generate a personalized practice test that mimics the real exam environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Syllabus Upload */}
                    <div className="relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                        <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-400 transition-all cursor-pointer h-64 bg-white/50">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1 text-lg">Upload Syllabus</h4>
                            <p className="text-xs text-gray-500 mb-6">PDF, DOCX, or TXT (Max 5MB)</p>

                            <label htmlFor="syllabus-upload" className="z-10 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 shadow-sm hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                                {syllabusFile ? 'Change File' : 'Select File'}
                            </label>
                            <input id="syllabus-upload" type="file" className="hidden" onChange={(e) => setSyllabusFile(e.target.files[0])} />

                            {syllabusFile && (
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-fade-in">
                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full flex items-center border border-emerald-100">
                                        <CheckCircle className="w-3 h-3 mr-1.5" />
                                        {syllabusFile.name.length > 20 ? syllabusFile.name.substring(0, 20) + '...' : syllabusFile.name}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Previous Questions Upload */}
                    <div className="relative overflow-hidden group">
                        <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                        <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-purple-400 transition-all cursor-pointer h-64 bg-white/50">
                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1 text-lg">Previous Questions</h4>
                            <p className="text-xs text-gray-500 mb-6">PDF or Images (Max 10MB)</p>

                            <label htmlFor="questions-upload" className="z-10 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 shadow-sm hover:text-purple-600 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
                                {questionsFile ? 'Change File' : 'Select File'}
                            </label>
                            <input id="questions-upload" type="file" className="hidden" onChange={(e) => setQuestionsFile(e.target.files[0])} />

                            {questionsFile && (
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-fade-in">
                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full flex items-center border border-emerald-100">
                                        <CheckCircle className="w-3 h-3 mr-1.5" />
                                        {questionsFile.name.length > 20 ? questionsFile.name.substring(0, 20) + '...' : questionsFile.name}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Settings className="w-4 h-4 mr-2 text-gray-500" />
                        Test Configuration
                    </h4>

                    <div className="mb-6">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Test Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="e.g. Calculus Midterm Prep"
                                value={testName}
                                onChange={(e) => setTestName(e.target.value)}
                                className="w-full bg-white border-0 rounded-xl p-3 pl-10 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400 transition-all"
                            />
                            <Edit3 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Duration</label>
                            <select
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                className="w-full bg-white border-0 rounded-xl p-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none">
                                <option>30 Minutes</option>
                                <option>1 Hour</option>
                                <option>2 Hours</option>
                                <option>3 Hours</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Difficulty</label>
                            <select
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                className="w-full bg-white border-0 rounded-xl p-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none">
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                                <option>Expert</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Question Type</label>
                            <select
                                value={questionType}
                                onChange={(e) => setQuestionType(e.target.value)}
                                className="w-full bg-white border-0 rounded-xl p-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none">
                                <option>Multiple Choice</option>
                                <option>Written Theory</option>
                                <option>Mixed Mode</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={`flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-all ${isGenerating ? 'opacity-75 cursor-wait' : 'hover:shadow-blue-300 hover:translate-y-[-2px] hover:shadow-xl active:scale-95'}`}
                    >
                        {isGenerating ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                <span>Generating...</span>
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5" />
                                <span>Generate Custom Test</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

const TestTakingView = ({ testData, onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const getDurationInSeconds = (durationStr) => {
        switch (durationStr) {
            case '30 Minutes': return 1800;
            case '1 Hour': return 3600;
            case '2 Hours': return 7200;
            case '3 Hours': return 10800;
            default: return 3600;
        }
    };
    const [timeLeft, setTimeLeft] = useState(getDurationInSeconds(testData?.duration));
    const [answers, setAnswers] = useState({});
    const [flagged, setFlagged] = useState(new Set());

    // Questions (From Backend or Mock)
    const questions = testData?.questions && testData.questions.length > 0
        ? testData.questions
        : [
            { id: 1, text: "Calculate the integral of f(x) = x^2 from 0 to 3.", options: ["9", "3", "27", "18"] },
            { id: 2, text: "Which theorem relates the line integral of a vector field to a surface integral?", options: ["Green's Theorem", "Stokes' Theorem", "Divergence Theorem", "Cauchy's Theorem"] },
            { id: 3, text: "Find the limit of (sin x)/x as x approaches 0.", options: ["0", "1", "Infinity", "Undefined"] },
            { id: 4, text: "What is the derivative of ln(x)?", options: ["1/x", "e^x", "x", "ln(x^2)"] },
            { id: 5, text: "Evaluate the determinant of the identity matrix I3.", options: ["0", "1", "3", "9"] }
        ];

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleAnswer = (option) => {
        setAnswers(prev => ({ ...prev, [currentQuestion]: option }));
    };

    const toggleFlag = () => {
        setFlagged(prev => {
            const newSet = new Set(prev);
            if (newSet.has(currentQuestion)) newSet.delete(currentQuestion);
            else newSet.add(currentQuestion);
            return newSet;
        });
    };

    return (
        <div className="flex flex-col h-[calc(100vh-140px)]">
            {/* Header */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">{testData?.name || "Calculus Midterm Prep"}</h2>
                    <div className="flex items-center space-x-3 mt-1 text-sm text-gray-500">
                        <span className="font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">{testData?.difficulty || "Medium"}</span>
                        <span>•</span>
                        <span>{testData?.questionType || "Multiple Choice"}</span>
                        <span>•</span>
                        <span className="font-medium text-blue-600">Invigilator: {testData?.examiner || "Auto-Assigned"}</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-orange-500 bg-orange-50 px-4 py-2 rounded-xl font-mono font-bold">
                        <Timer className="w-5 h-5" />
                        <span>{formatTime(timeLeft)}</span>
                    </div>
                    <button
                        align="center"
                        onClick={() => onComplete(answers)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        Submit Test
                    </button>
                </div>
            </div>

            <div className="flex gap-6 flex-1 min-h-0">
                {/* Question Area */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Question {currentQuestion + 1} of {questions.length}</span>
                        <button onClick={toggleFlag} className={`p-2 rounded-lg transition-colors ${flagged.has(currentQuestion) ? 'text-yellow-500 bg-yellow-50' : 'text-gray-400 hover:bg-gray-50'}`}>
                            <AlertCircle className="w-5 h-5" />
                        </button>
                    </div>

                    <h3 className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
                        {questions[currentQuestion].text}
                    </h3>

                    <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(option)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center group ${answers[currentQuestion] === option
                                    ? 'border-blue-500 bg-blue-50/50'
                                    : 'border-gray-100 hover:border-gray-200'
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${answers[currentQuestion] === option
                                    ? 'border-blue-500 bg-blue-500 text-white'
                                    : 'border-gray-300 text-transparent group-hover:border-gray-400'
                                    }`}>
                                    <div className="w-2.5 h-2.5 bg-current rounded-full" />
                                </div>
                                <span className={`font-medium ${answers[currentQuestion] === option ? 'text-blue-900' : 'text-gray-700'}`}>
                                    {option}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto pt-8 flex justify-between items-center">
                        <button
                            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestion === 0}
                            className="flex items-center text-gray-500 hover:text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Previous
                        </button>
                        {currentQuestion === questions.length - 1 ? (
                            <button
                                onClick={() => onComplete(answers)}
                                className="flex items-center text-white bg-blue-600 hover:bg-blue-700 font-medium px-6 py-2.5 rounded-xl transition-colors shadow-lg shadow-blue-200"
                            >
                                Submit Test
                                <CheckCircle className="w-4 h-4 ml-2" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                                className="flex items-center text-white bg-gray-900 hover:bg-black font-medium px-6 py-2.5 rounded-xl transition-colors shadow-lg shadow-gray-200"
                            >
                                Next
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Navigation Palette */}
                <div className="w-72 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="text-sm font-bold text-gray-900 mb-4">Question Palette</h3>
                    <div className="grid grid-cols-4 gap-3">
                        {questions.map((q, idx) => (
                            <button
                                key={q.id}
                                onClick={() => setCurrentQuestion(idx)}
                                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-bold border-2 transition-all ${currentQuestion === idx ? 'border-blue-600 bg-blue-50 text-blue-600' :
                                    flagged.has(idx) ? 'border-yellow-400 bg-yellow-50 text-yellow-600' :
                                        answers[idx] ? 'border-emerald-500 bg-emerald-500 text-white border-transparent' :
                                            'border-gray-100 text-gray-500 hover:border-gray-200'
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100 space-y-3">
                        <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                            <div className="w-3 h-3 rounded bg-emerald-500"></div> Answered
                        </div>
                        <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                            <div className="w-3 h-3 rounded bg-yellow-400"></div> Flagged
                        </div>
                        <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                            <div className="w-3 h-3 rounded border-2 border-gray-200"></div> Not Visited
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import logo from '../assets/gradely-logo-v2.png';

const syllabusData = {
    Mathematics: {
        title: "Mathematics Syllabus",
        topics: [
            "Module 1: Multivariable Functions (Limits, Continuity)",
            "Module 2: Partial Derivatives & Chain Rule",
            "Module 3: Multiple Integrals (Double & Triple)",
            "Module 4: Vector Calculus (Gradient, Divergence, Curl)",
            "Module 5: Line Integrals & Surface Integrals"
        ]
    },
    Physics: {
        title: "Physics Syllabus",
        topics: [
            "Module 1: Laws of Thermodynamics",
            "Module 2: Entropy and Free Energy",
            "Module 3: Heat Engines and Refrigerators",
            "Module 4: Statistical Mechanics Basics",
            "Module 5: Phase Transitions"
        ]
    },
    "Computer Science": {
        title: "Computer Science Syllabus",
        topics: [
            "Module 1: Arrays, Linked Lists, Stacks, Queues",
            "Module 2: Trees (BST, AVL, Red-Black) & Graphs",
            "Module 3: Hashing & Heaps",
            "Module 4: Sorting & Searching Algorithms",
            "Module 5: Complexity Analysis (Big O)"
        ]
    },
    History: {
        title: "History Syllabus",
        topics: [
            "Module 1: Ancient Civilizations (Mesopotamia, Egypt)",
            "Module 2: Classical Antiquity (Greece & Rome)",
            "Module 3: The Middle Ages & Feudalism",
            "Module 4: The Renaissance & Reformation",
            "Module 5: The Age of Exploration"
        ]
    },
    Chemistry: {
        title: "Chemistry Syllabus",
        topics: [
            "Module 1: Hydrocarbons and Functional Groups",
            "Module 2: Stereochemistry & Isomerism",
            "Module 3: Reaction Mechanisms (SN1, SN2)",
            "Module 4: Spectroscopy (IR, NMR)",
            "Module 5: Biomolecules (Carbs, Proteins)"
        ]
    },
    Literature: {
        title: "Literature Syllabus",
        topics: [
            "Module 1: Introduction to Modernism",
            "Module 2: The Waste Land & T.S. Eliot",
            "Module 3: Harlem Renaissance Poetry",
            "Module 4: Sylvia Plath & Confessional Poetry",
            "Module 5: Contemporary Voices"
        ]
    }
};

const SyllabusModal = ({ isOpen, onClose, syllabus }) => {
    if (!isOpen || !syllabus) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{syllabus.title}</h3>
                    <p className="text-sm text-gray-500">Course Content & Topics</p>
                </div>

                <div className="space-y-3 mb-8">
                    {syllabus.topics.map((topic, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">
                                {index + 1}
                            </div>
                            <span className="text-sm font-medium text-gray-700">{topic}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={onClose}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-200"
                >
                    Close Syllabus
                </button>
            </div>
        </div>
    );
};

const StartTestModal = ({ isOpen, onClose, onConfirm, testInfo }) => {
    if (!isOpen || !testInfo) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="mb-6 text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                        <Timer className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
                    <p className="text-gray-500">You are about to begin the examination.</p>
                </div>

                <div className="space-y-4 mb-8 bg-gray-50 p-4 rounded-2xl">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 font-medium">Subject</span>
                        <span className="text-sm font-semibold text-gray-900">{testInfo.subject}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 font-medium">Exam Title</span>
                        <span className="text-sm font-semibold text-gray-900">{testInfo.title}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 font-medium">Examiner</span>
                        <span className="text-sm font-semibold text-gray-900">{testInfo.examiner || "Dr. Sarah Mitchell"}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 font-medium">Duration</span>
                        <span className="text-sm font-semibold text-gray-900">{testInfo.duration || "45 Minutes"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 font-medium">Total Questions</span>
                        <span className="text-sm font-semibold text-gray-900">{testInfo.totalQuestions || "20 Questions"}</span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onConfirm(testInfo)}
                        className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-200"
                    >
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);
    const [startTestModalOpen, setStartTestModalOpen] = useState(false);
    const [selectedSyllabus, setSelectedSyllabus] = useState(null);
    const [pendingTest, setPendingTest] = useState(null);
    const [currentTest, setCurrentTest] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    const handleViewSyllabus = (subject) => {
        const data = syllabusData[subject];
        if (data) {
            setSelectedSyllabus(data);
            setSyllabusModalOpen(true);
        }
    };

    const handleStartTest = (testInfo) => {
        // Enriched mock data "according to examiner"
        // Ensure testInfo has ID
        const enrichedTestInfo = {
            ...testInfo,
            examiner: testInfo.subject === "Mathematics" ? "Prof. Alan Turing" :
                testInfo.subject === "Physics" ? "Dr. Richard Feynman" :
                    testInfo.subject === "Computer Science" ? "Prof. Ada Lovelace" : "Dr. Jane Goodall",
            duration: "30 Minutes", // Simplified for demo, could be dynamic
            totalQuestions: 20
        };
        setPendingTest(enrichedTestInfo);
        setStartTestModalOpen(true);
    };

    const confirmStartTest = (testInfo) => {
        setCurrentTest({
            ...testInfo,
            name: testInfo.title || testInfo.name || "Practice Test",
            duration: testInfo.duration || "30 Minutes",
            difficulty: testInfo.difficulty || "Medium",
            questionType: testInfo.questionType || "Multiple Choice",
            examiner: testInfo.examiner
        });
        setStartTestModalOpen(false);
        setActiveTab('take-test');
    };

    // Handle Test Completion
    const handleTestComplete = async (answers) => {
        // Submit to backend
        try {
            await fetch('http://localhost:5000/api/submit-exam', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    testId: currentTest.id,
                    studentId: "S001", // Mocked
                    answers
                })
            });
            alert("Test submitted successfully! Awaiting teacher approval.");
        } catch (err) {
            console.error("Error submitting test:", err);
            alert("Failed to submit test.");
        }
        setActiveTab('results');
    };

    const [upcomingExams, setUpcomingExams] = useState([]);
    const [studentStats, setStudentStats] = useState({ examsTaken: 0, pendingResults: 0 });

    useEffect(() => {
        // Fetch exams for student S001 (Mocked)
        fetch('http://localhost:5000/api/student-tests/S001')
            .then(res => res.json())
            .then(data => setUpcomingExams(data))
            .catch(err => console.error("Error fetching exams:", err));

        // Fetch student stats
        fetch('http://localhost:5000/api/stats/student/S001')
            .then(res => res.json())
            .then(data => setStudentStats(data))
            .catch(err => console.error("Error fetching stats:", err));
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return <DashboardHome onViewSyllabus={handleViewSyllabus} onStartTest={handleStartTest} upcomingExams={upcomingExams} stats={studentStats} />;
            case 'my-exams': return <MyExamsView onViewSyllabus={handleViewSyllabus} onStartTest={handleStartTest} upcomingExams={upcomingExams} />;
            case 'results': return <ResultsView />;
            case 'schedule': return <ScheduleView />;
            case 'create-test': return <CreateTestView onGenerate={(data) => { setPendingTest(data); setStartTestModalOpen(true); }} />;
            case 'take-test': return <TestTakingView testData={currentTest} onComplete={handleTestComplete} />;
            case 'profile': return <ProfileView />;
            case 'settings': return <SettingsView onLogout={handleLogout} />;
            default: return <DashboardHome onViewSyllabus={handleViewSyllabus} onStartTest={handleStartTest} upcomingExams={upcomingExams} stats={studentStats} />;
        }
    };

    const getTitle = () => {
        switch (activeTab) {
            case 'dashboard': return 'Dashboard';
            case 'my-exams': return 'My Exams';
            case 'results': return 'Results';
            case 'schedule': return 'Schedule';
            case 'create-test': return 'Create Custom Test';
            case 'take-test': return 'Ongoing Examination';
            case 'profile': return 'My Profile';
            case 'settings': return 'Settings';
            default: return 'Dashboard';
        }
    };

    return (
        <div className="flex h-screen bg-[#F8F9FC] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 bg-white flex flex-col border-r border-gray-100 flex-shrink-0 z-20">
                <div className="p-8 flex items-center space-x-4">
                    <img
                        src={logo}
                        alt="Gradely Logo"
                        className="h-12 w-auto rounded-xl object-contain hover:scale-105 transition-all duration-300"
                    />
                </div>

                <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
                    <div className="pb-4 pt-2">
                        <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Main Menu</p>
                        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                        <SidebarItem icon={BookOpen} label="My Exams" active={activeTab === 'my-exams'} onClick={() => setActiveTab('my-exams')} />
                        <SidebarItem icon={BarChart2} label="Results" active={activeTab === 'results'} onClick={() => setActiveTab('results')} />
                        <SidebarItem icon={Calendar} label="Schedule" active={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')} />
                        <SidebarItem icon={UploadCloud} label="Create Test" active={activeTab === 'create-test'} onClick={() => setActiveTab('create-test')} />
                    </div>

                    <div className="pt-4 border-t border-gray-50">
                        <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Account</p>
                        <SidebarItem icon={User} label="Profile" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
                        <SidebarItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
                    </div>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setActiveTab('profile')}>
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">Alex Morgan</p>
                            <p className="text-xs text-gray-500 truncate">Student ID: 48291</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* Header */}
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 flex-shrink-0 z-10">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{getTitle()}</h1>
                        <p className="text-gray-500 text-sm">Welcome back, Alex!</p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search exams..."
                                className="pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm w-64 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all outline-none"
                            />
                        </div>

                        <button className="relative p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-gray-600">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        {renderContent()}
                    </div>
                </div>
            </main>
            <SyllabusModal
                isOpen={syllabusModalOpen}
                onClose={() => setSyllabusModalOpen(false)}
                syllabus={selectedSyllabus}
            />
            <StartTestModal
                isOpen={startTestModalOpen}
                onClose={() => setStartTestModalOpen(false)}
                onConfirm={confirmStartTest}
                testInfo={pendingTest}
            />
        </div>
    );
}
