import React from "react";
import AceEditor from "react-ace";
import Heading from "../components/Heading";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export function Page5() {
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
            <div className="mb-6">
                <Heading Heading="Just For Fun:- " />
            </div>

            <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="flex items-center space-x-2 p-2 pl-4 bg-gray-800">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <h1 className="text-white text-center font-poppins flex-1 text-lg sm:text-xl md:text-2xl lg:text-3xl">My Introduction</h1>
                </div>

                <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
                    <AceEditor
                        mode="javascript"
                        theme="monokai"
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
                            borderRadiusBottom: '8px',
                            cursor: `url('/danger/Text.cur'), text`
                        }}
                        editorProps={{ $blockScrolling: true }}
                        onLoad={(editor) => {
                            editor.container.style.resize = 'none';
                            editor.renderer.updateFull();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
