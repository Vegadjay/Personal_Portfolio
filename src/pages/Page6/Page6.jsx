import React from 'react'
import { Card } from '../components/Card'
import Heading from '../components/Heading'
import { motion } from 'framer-motion'

export const Page6 = () => {
    const projectList = [
        {
            title: "Sardar Vallbh Bhai Patel Biography",
            discription: "This is my first Website and that is made with using Html, Css, Javascript",
            path: "/Project_Pics/Sardar2.jpeg",
            link: "https://vegadjay.github.io/SardarPatel_BioGraphy/",
            btnText: "Click Here"
        },
        {
            title: "Rock, Paper, Scissor Game Using Html",
            discription: "This is my first game using Html, Css, and Javascript",
            path: "/Project_Pics/Rock_paper.jpeg",
            link: "https://vegadjay.github.io/Rock-Paper-And-Scissor-Game-/",
            btnText: "Click Here"
        },
        {
            title: "Tic Tac Toi Game Using Html",
            discription: "This game was made in my first semester of college. It uses Html, Css, and Js",
            path: "/Project_Pics/Tic_Tac.png",
            link: "https://vegadjay.github.io/Tic-Tac-Toi-Game/",
            btnText: "Click Here"
        },
        {
            title: "Stake Game Clone Using React",
            discription: "A game built using React and simple Css",
            path: "/Project_Pics/Mine.jpeg",
            link: "https://minegame-by-jayvegad.netlify.app/",
            btnText: "Click Here"
        },
        {
            title: "News App Usinag React And Bootstrap",
            discription: "This is a news app made using an API",
            path: "/Project_Pics/NMews.jpeg",
            link: "https://github.com/Vegadjay/News-App",
            btnText: "Click Here"
        },
        {
            title: "Todo App Using Mern Stack",
            discription: "This is Todo App. This App is made using Mern stack and this is my latest project (Withou Ai)",
            path: "/Project_Pics/Todo.png",
            link: "https://github.com/Vegadjay/Mern_Todo",
            btnText: "Click Here"
        }
    ];

    return (
        <div className="container mx-auto -mt-[10rem] sm:-mt-[32rem] md:-mt-[10rem] lg:-mt-[15rem] px-4 flex flex-col items-center">
            <div className="mb-8">
                <Heading Heading="Projects:- " />
            </div>
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex justify-center"
                        >
                            <Card
                                title={project.title}
                                discription={project.discription}
                                link={project.link}
                                btnText={project.btnText}
                                path={project.path}
                                className="w-full max-w-xs"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
