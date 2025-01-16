import React, { useState } from 'react';
import AceEditor from "react-ace";
import { FolderOpen, File, ChevronRight, X, Terminal } from 'lucide-react';
import Heading from '../components/Heading';
import { motion, AnimatePresence } from "framer-motion";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

export function Page5() {
    const [activeTab] = useState('introduction.json');
    const [isExplorerOpen, setIsExplorerOpen] = useState(true);
    const [isFolderOpen, setIsFolderOpen] = useState(true);

    const code = `{
    "introduction": {
        "basics": {
            "name": "Jay Vegad",
            "title": "Full Stack Developer",
            "location": "Rajkot, India",
            "email": "jayvegad10@gmail.com",
            "website": "https://github.com/Vegadjay",
            "phone": "+91 8849251028"
        },
        
        "summary": {
            "bio": "Hello! I'm Jay Vegad, a passionate developer with a knack for creating dynamic, user-focused applications. I enjoy working with the latest tech stacks to solve real-world problems.",
            "yearsOfExperience": "1+ Year",
            "currentFocus": ["Web Development", "Artificial Intelligence", "Machine Learning"],
            "softSkills": ["Problem Solving", "Teamwork", "Adaptability", "Communication"]
        }
    },
    
    "education": [
        {
            "degree": "B.Tech in Computer Science Engineering",
            "institution": "Darshan University",
            "location": "India",
            "yearOfCompletion": "0",
            "fieldOfStudy": "Computer Science",
            "achievements": ["Dean's List", "Hackathon Participation"]
        }
    ],
    
    "projects": [
        {
            "name": "Todo App Using MERN Stack",
            "description": "A dynamic todo app that allows users to insert, update, delete, and mark tasks as completed.",
            "technologies": ["React", "Node.js", "Express.js", "MongoDB"],
            "features": ["CRUD Operations", "User Authentication", "Real-time Updates"],
            "links": {
                "github": "https://github.com/Vegadjay/Todo",
                "liveDemo": ""
            }
        },
        {
            "name": "Card Mine Game",
            "description": "An interactive card-based game inspired by the classic minesweeper.",
            "technologies": ["React", "JavaScript", "CSS"],
            "features": ["Responsive Design", "Score Tracking", "Dynamic Difficulty Adjustment"],
            "links": {
                "github": "https://github.com/Vegadjay/Card-Mine-Game",
                "liveDemo": ""
            }
        }
    ],
    
    "skills": {
        "programmingLanguages": ["JavaScript", "Java", "HTML", "CSS"],
        "frameworksAndLibraries": ["React", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],
        "tools": ["Git", "Webpack", "VSCode"],
        "technologies": ["MongoDB", "REST APIs", "Machine Learning"]
    },
    
    "certifications": [
        {
            "name": "React Certification",
            "provider": "HackerRank",
            "link": "https://www.hackerrank.com/certificates/42de5453bb6d",
            "year": "2023"
        },
        {
            "name": "Java Certification",
            "provider": "HackerRank",
            "link": "https://www.hackerrank.com/certificates/92d6ece8f147",
            "year": "2023"
        }
    ],
    
    "socialLinks": {
        "github": "https://github.com/Vegadjay",
        "linkedin": "https://www.linkedin.com/in/vegadjay/",
        "twitter": "https://x.com/JAY_VEGAD_",
        "youtube": "https://www.youtube.com/@JAY_VEGAD"
    },
    
    "interests": [
        "Web Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Coding Challenges",
        "Open Source Contributions"
    ]
}`;

    return (
        <div className="container mx-auto px-4 py-6 md:hidden flex flex-col min-h-screen mt-40 md:mt-30 lg:mt-0 hidden lg:block md:block">
            <Heading Heading="Just For Fun:- " />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full bg-[#282c34] rounded-lg shadow-2xl overflow-hidden border border-[#3e4451]"
            >
                <motion.div
                    className="flex items-center justify-between p-2 bg-[#21252b] border-b border-[#3e4451]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="w-[55rem] flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex space-x-2 px-2">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-4 h-4 rounded-full bg-[#e06c75] cursor-pointer"
                                />
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-4 h-4 rounded-full bg-[#e5c07b] cursor-pointer"
                                />
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-4 h-4 rounded-full bg-[#98c379] cursor-pointer"
                                />
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#5c6370] text-sm font-mono"
                        >
                            Visual Studio Code
                        </motion.div>
                    </div>
                </motion.div>

                <div className="flex h-[800px] font-mono">
                    <motion.div
                        className="w-12 bg-[#21252b] flex flex-col items-center py-2 border-r border-[#3e4451]"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, backgroundColor: '#3e4451' }}
                            className="p-2 text-[#61afef] rounded cursor-pointer"
                            onClick={() => setIsExplorerOpen(!isExplorerOpen)}
                        >
                            <FolderOpen size={24} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, backgroundColor: '#3e4451' }}
                            className="p-2 text-[#5c6370] rounded cursor-pointer"
                        >
                            <File size={24} />
                        </motion.div>
                    </motion.div>

                    <AnimatePresence>
                        {isExplorerOpen && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 240, opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#21252b] border-r border-[#3e4451] overflow-hidden"
                            >
                                <div className="p-2 text-[#5c6370] text-sm uppercase font-semibold">Explorer</div>
                                <div className="px-2">
                                    <motion.div
                                        className="flex items-center text-[#abb2bf] hover:bg-[#3e4451] cursor-pointer p-1 rounded"
                                        onClick={() => setIsFolderOpen(!isFolderOpen)}
                                        whileHover={{ backgroundColor: '#3e4451' }}
                                    >
                                        <motion.div
                                            animate={{ rotate: isFolderOpen ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronRight size={16} />
                                        </motion.div>
                                        <p className="ml-1 text-base">portfolio-website</p>
                                    </motion.div>
                                    <AnimatePresence>
                                        {isFolderOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="ml-4 overflow-hidden"
                                            >
                                                <motion.div
                                                    className="flex items-center text-[#abb2bf] hover:bg-[#3e4451] cursor-pointer p-1 rounded"
                                                    whileHover={{ backgroundColor: '#3e4451' }}
                                                >
                                                    <File size={16} className="text-[#61afef]" />
                                                    <p className="ml-2 text-base">introduction.json</p>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        className="flex-1 flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center bg-[#282c34] border-b border-[#3e4451]">
                            <motion.div
                                className="flex items-center px-4 py-2 bg-[#21252b] border-r border-[#3e4451]"
                                whileHover={{ backgroundColor: '#2c313a' }}
                            >
                                <File size={16} className="text-[#61afef] mr-2" />
                                <span className="text-[#abb2bf] text-base">{activeTab}</span>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="ml-2 text-[#5c6370] hover:text-[#abb2bf] cursor-pointer"
                                >
                                    <X size={16} />
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="flex-1 relative">
                            <AceEditor
                                mode="javascript"
                                theme="one_dark"
                                value={code}
                                fontSize={20}
                                showPrintMargin={false}
                                highlightActiveLine={true}
                                setOptions={{
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                    showLineNumbers: true,
                                    tabSize: 2,
                                    useWorker: false,
                                    wrap: true,
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                }}
                                editorProps={{
                                    $blockScrolling: true,
                                }}
                            />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="flex items-center justify-between px-2 py-1 bg-[#21252b] text-[#abb2bf] text-sm font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex items-center space-x-2">
                        <Terminal size={14} className="text-[#61afef]" />
                        <span>JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>UTF-8</span>
                        <span>LF</span>
                        <span>Spaces: 2</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Page5;