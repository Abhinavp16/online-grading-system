const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Mock Database
const students = [
    { id: "S001", name: "Pradeep", email: "alex.morgan@university.edu" },
    { id: "S002", name: "Priyanshu", email: "sarah.jones@university.edu" },
    { id: "S003", name: "Chetna", email: "michael.c@university.edu" },
    { id: "S004", name: "aditya", email: "emily.b@university.edu" },
    { id: "S005", name: "karan", email: "john.doe@university.edu" }
];

let tests = [
    {
        id: "T001",
        title: "Calculus Quiz 3",
        subject: "Mathematics",
        date: "2023-10-22",
        startTime: "10:00",
        duration: "45",
        instructions: "No calculators allowed.",
        assignedTo: ["S001", "S002"], // IDs of students
        status: "Active"
    }
];

let results = [
    // {
    //     id: "R001",
    //     testId: "T001",
    //     studentId: "S001",
    //     score: 85,
    //     status: "Pending Approval", // or "Published"
    //     date: "2023-10-22"
    // }
];

// Mock Question Bank
const questionBank = {
    Mathematics: [
        { id: 101, text: "Calculate the integral of f(x) = x^2 from 0 to 3.", options: ["9", "3", "27", "18"], difficulty: "Medium", type: "Multiple Choice" },
        { id: 102, text: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "tan(x)", "sec(x)"], difficulty: "Easy", type: "Multiple Choice" },
        { id: 103, text: "Solve for x: 2x + 5 = 15", options: ["5", "10", "2.5", "7.5"], difficulty: "Easy", type: "Multiple Choice" },
        { id: 104, text: "Explain the Mean Value Theorem.", options: [], difficulty: "Hard", type: "Written Theory" },
        { id: 105, text: "Find the limit of (1+1/x)^x as x approaches infinity.", options: ["e", "1", "0", "infinity"], difficulty: "Medium", type: "Multiple Choice" }
    ],
    Physics: [
        { id: 201, text: "What is the unit of Force?", options: ["Newton", "Joule", "Watt", "Pascal"], difficulty: "Easy", type: "Multiple Choice" },
        { id: 202, text: "State Newton's Second Law.", options: ["F=ma", "F=mv", "E=mc^2", "p=mv"], difficulty: "Easy", type: "Multiple Choice" },
        { id: 203, text: "What is the second law of thermodynamics?", options: [], difficulty: "Medium", type: "Written Theory" },
        { id: 204, text: "Calculate the escape velocity of Earth (approx).", options: ["11.2 km/s", "9.8 m/s^2", "30 km/s", "100 km/h"], difficulty: "Medium", type: "Multiple Choice" }
    ],
    "Computer Science": [
        { id: 301, text: "What is the time complexity of Binary Search?", options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"], difficulty: "Medium", type: "Multiple Choice" },
        { id: 302, text: "Define Polymorphism in OOP.", options: [], difficulty: "Medium", type: "Written Theory" },
        { id: 303, text: "Which data structure uses LIFO?", options: ["Stack", "Queue", "Tree", "Graph"], difficulty: "Easy", type: "Multiple Choice" }
    ]
};

// --- Endpoints ---

// Get all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Create a new test
app.post('/api/tests', (req, res) => {
    const { title, subject, date, startTime, duration, instructions, assignedTo, questions } = req.body;

    const newTest = {
        id: `T${Date.now()}`,
        title,
        subject,
        date,
        startTime,
        duration,
        instructions,
        assignedTo: assignedTo || [], // Array of student IDs
        questions: questions || [],
        status: "Scheduled"
    };

    tests.push(newTest);
    console.log("New Test Created:", newTest.title);
    res.status(201).json(newTest);
});

// Get tests for a specific student (by ID)
app.get('/api/student-tests/:studentId', (req, res) => {
    const { studentId } = req.params;
    const studentTests = tests.filter(test => test.assignedTo.includes(studentId) || test.assignedTo.includes("ALL"));
    res.json(studentTests);
});

// Get all tests (Examiner/Admin)
app.get('/api/tests', (req, res) => {
    res.json(tests);
});

// Submit Exam (Student)
app.post('/api/submit-exam', (req, res) => {
    const { testId, studentId, answers } = req.body;

    // Simple grading logic (for demo)
    // Assume all questions are multiple choice and have a "correct" answer (which we haven't defined in questionBank, but let's mock score)
    const score = Math.floor(Math.random() * 40) + 60; // Random score 60-100

    const newResult = {
        id: `R${Date.now()}`,
        testId,
        studentId,
        answers,
        score,
        date: new Date().toISOString().split('T')[0],
        status: "Pending Approval"
    };

    results.push(newResult);
    console.log(`Exam submitted by ${studentId} for test ${testId}`);
    res.status(201).json({ message: "Exam submitted successfully", resultId: newResult.id });
});

// Get Pending Results (Teacher)
app.get('/api/results/pending', (req, res) => {
    const pending = results.filter(r => r.status === "Pending Approval").map(r => {
        const student = students.find(s => s.id === r.studentId);
        const test = tests.find(t => t.id === r.testId);
        return {
            ...r,
            studentName: student ? student.name : "Unknown",
            testTitle: test ? test.title : "Unknown"
        };
    });
    res.json(pending);
});

// Approve Result (Teacher)
app.put('/api/results/approve/:id', (req, res) => {
    const { id } = req.params;
    const result = results.find(r => r.id === id);
    if (result) {
        result.status = "Published";
        res.json({ message: "Result approved", result });
    } else {
        res.status(404).json({ message: "Result not found" });
    }
});

// Get Student Results (Student)
app.get('/api/my-results/:studentId', (req, res) => {
    const { studentId } = req.params;
    const myResults = results.filter(r => r.studentId === studentId && r.status === "Published").map(r => {
        const test = tests.find(t => t.id === r.testId);
        return {
            ...r,
            testTitle: test ? test.title : "Unknown Student Test",
            subject: test ? test.subject : "General"
        };
    });
    res.json(myResults);
});


// Generate Test AI (Existing)
app.post('/api/generate-test', (req, res) => {
    const { subject = "Mathematics", difficulty = "Medium", questionType = "Multiple Choice", duration } = req.body;

    let questions = questionBank[subject] || questionBank["Mathematics"];
    let filteredQuestions = questions.filter(q => (questionType === "Mixed Mode" || q.type === questionType));

    if (filteredQuestions.length === 0) filteredQuestions = questions;

    const testData = {
        id: Date.now(),
        title: `${subject} ${difficulty} Test`,
        subject: subject,
        examiner: "AI Generator",
        duration: duration,
        difficulty: difficulty,
        totalQuestions: filteredQuestions.length,
        questions: filteredQuestions
    };

    // Simulate AI delay
    setTimeout(() => {
        res.json(testData);
    }, 1500);
});

// Stats (Teacher)
app.get('/api/stats/teacher', (req, res) => {
    const activeExams = tests.length;
    const pendingGrades = results.filter(r => r.status === "Pending Approval").length;
    const totalStudents = students.length;
    res.json({ activeExams, pendingGrades, totalStudents });
});

// Stats (Student)
app.get('/api/stats/student/:id', (req, res) => {
    const { id } = req.params;
    const examsTaken = results.filter(r => r.studentId === id).length;
    const pendingResults = results.filter(r => r.studentId === id && r.status === "Pending Approval").length;
    res.json({ examsTaken, pendingResults });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
