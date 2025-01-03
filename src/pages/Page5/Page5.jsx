import React, { useState } from 'react';
import AceEditor from "react-ace";
import { FolderOpen, File, ChevronRight, X, Minimize2, Square, Terminal } from 'lucide-react';
import Heading from '../components/Heading';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";  // Changed to one dark theme
import "ace-builds/src-noconflict/ext-language_tools";

export function Page5() {
    const [activeTab] = useState('introduction.json');
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
}
`;

    return (
        <div className="container mx-auto px-4 py-6 md:hidden flex flex-col min-h-screen mt-40 md:mt-30 lg:mt-0 hidden lg:block md:block">
            <Heading Heading="Just For Fun:- " />
            <div className="w-full bg-[#282c34] rounded-lg shadow-2xl overflow-hidden border border-[#3e4451]">
                <div className="flex items-center justify-between p-2 bg-[#21252b] border-b border-[#3e4451]">
                    <div className='w-[55rem] flex items-center justify-between'>
                        <div className="flex items-center">
                            <div className="flex space-x-2 px-2">
                                <div className="w-4 h-4 rounded-full bg-[#e06c75] hover:bg-[#e06c75]/80 cursor-pointer"></div>
                                <div className="w-4 h-4 rounded-full bg-[#e5c07b] hover:bg-[#e5c07b]/80 cursor-pointer"></div>
                                <div className="w-4 h-4 rounded-full bg-[#98c379] hover:bg-[#98c379]/80 cursor-pointer"></div>
                            </div>
                        </div>
                        <div className="text-[#5c6370] text-sm font-mono">Visual Studio Code</div>
                    </div>
                </div>

                <div className="flex h-[800px] font-mono">
                    <div className="w-12 bg-[#21252b] flex flex-col items-center py-2 border-r border-[#3e4451]">
                        <div className="p-2 text-[#61afef] hover:bg-[#3e4451] rounded cursor-pointer">
                            <FolderOpen size={24} />
                        </div>
                        <div className="p-2 text-[#5c6370] hover:bg-[#3e4451] rounded cursor-pointer">
                            <File size={24} />
                        </div>
                    </div>

                    <div className="w-60 bg-[#21252b] border-r border-[#3e4451]">
                        <div className="p-2 text-[#5c6370] text-sm uppercase font-semibold">Explorer</div>
                        <div className="px-2">
                            <div className="flex items-center text-[#abb2bf] hover:bg-[#3e4451] cursor-pointer p-1 rounded">
                                <ChevronRight size={16} />
                                <p className="ml-1 text-base">portfolio-website</p>
                            </div>
                            <div className="ml-4">
                                <div className="flex items-center text-[#abb2bf] hover:bg-[#3e4451] cursor-pointer p-1 rounded">
                                    <File size={16} className="text-[#61afef]" />
                                    <p className="ml-2 text-base">introduction.json</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center bg-[#282c34] border-b border-[#3e4451]">
                            <div className="flex items-center px-4 py-2 bg-[#21252b] border-r border-[#3e4451]">
                                <File size={16} className="text-[#61afef] mr-2" />
                                <span className="text-[#abb2bf] text-base">{activeTab}</span>
                                <X size={16} className="ml-2 text-[#5c6370] hover:text-[#abb2bf] cursor-pointer" />
                            </div>
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
                                    fontFamily: "'Menlo', 'Fira Code', monospace",
                                    fontSize: "16px"
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                }}
                                editorProps={{
                                    $blockScrolling: true,
                                    $fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-2 py-1 bg-[#21252b] text-[#abb2bf] text-sm font-mono">
                    <div className="flex items-center space-x-2">
                        <Terminal size={14} className="text-[#61afef]" />
                        <span>JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>UTF-8</span>
                        <span>LF</span>
                        <span>Spaces: 2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}