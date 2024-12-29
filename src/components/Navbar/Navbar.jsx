import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import HomeIcon from '/navbar-icons/Home.svg';
import ContactIcon from '/navbar-icons/Contact.svg';
import ExperienceIcon from '/navbar-icons/Exp.svg';
import SkillsIcon from '/navbar-icons/Skills.svg';
import AboutIcon from '/navbar-icons/Person.svg';
import ProjectIcon from '/navbar-icons/Project.svg';
import MenuIcon from '/navbar-icons/Menu.svg';

const Navbar = () => {
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);
    const navItems = [
        { icon: HomeIcon, text: "Home", href: "#homepage" },
        { icon: AboutIcon, text: "About Me", href: "#aboutme" },
        { icon: ExperienceIcon, text: "Experience", href: "#edu" },
        { icon: SkillsIcon, text: "Skills", href: "#skills" },
        { icon: ProjectIcon, text: "Projects", href: "#projects" },
        { icon: ContactIcon, text: "Contact", href: "#contact" },
    ];

    return (
        <>
            <FloatingDockDesktop items={navItems} className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-[9999]" />
            <MobileNav isMobileExpanded={isMobileExpanded} setIsMobileExpanded={setIsMobileExpanded} />
        </>
    );
};

const MobileNav = ({ isMobileExpanded, setIsMobileExpanded }) => (
    <div className="mobile-nav md:hidden fixed bottom-4 right-4 z-[9999]">
        <button
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            className="relative z-50"
        >
            <div className="bg-black/90 p-3 rounded-full border border-gray-700 shadow-lg transition-all duration-300">
                <img src={MenuIcon} alt="Menu" className="w-6 h-6 filter invert" />
            </div>
        </button>
        <div
            className={`fixed bottom-20 right-4 transition-all duration-500 ease-in-out ${isMobileExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
        >
            <div className="flex flex-col gap-4">
                <MobileNavItem icon={HomeIcon} text="Home" href="#homepage" setIsMobileExpanded={setIsMobileExpanded} />
                <MobileNavItem icon={AboutIcon} text="About" href="#aboutme" setIsMobileExpanded={setIsMobileExpanded} />
                <MobileNavItem icon={ExperienceIcon} text="Education" href="#edu" setIsMobileExpanded={setIsMobileExpanded} />
                <MobileNavItem icon={SkillsIcon} text="Skills" href="#skills" setIsMobileExpanded={setIsMobileExpanded} />
                <MobileNavItem icon={ProjectIcon} text="Projects" href="#projects" setIsMobileExpanded={setIsMobileExpanded} />
                <MobileNavItem icon={ContactIcon} text="Contact" href="#contact" setIsMobileExpanded={setIsMobileExpanded} />
            </div>
        </div>
    </div>
);


const MobileNavItem = ({ icon, text, href, setIsMobileExpanded }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
        });
        setIsMobileExpanded(false);
    };

    return (
        <a
            href={href}
            className="cursor-pointer block"
            onClick={handleClick}
            style={{
                transform: `translateY(${isClicked ? '4px' : '0'})`,
                transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
        >
            <div className="bg-black/90 p-3 rounded-full border border-gray-700 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-700">
                <img src={icon} alt={text} className="w-6 h-6 filter invert" />
            </div>
        </a>
    );
};

const FloatingDockDesktop = ({ items, className }) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={`hidden md:flex h-20 gap-6 items-end rounded-3xl bg-black/90 backdrop-blur-xl px-6 pb-4 border border-white/10 shadow-3xl ${className}`}
        >
            {items.map((item, index) => (
                <IconContainer key={index} mouseX={mouseX} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({ mouseX, text, icon, href }) {
    let ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
    let widthIcon = useTransform(distance, [-150, 0, 150], [30, 60, 30]);
    let heightIcon = useTransform(distance, [-150, 0, 150], [30, 60, 30]);

    let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    let widthIconSpring = useSpring(widthIcon, { mass: 0.1, stiffness: 150, damping: 12 });
    let heightIconSpring = useSpring(heightIcon, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={href}
            className="cursor-pointer block relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                ref={ref}
                style={{ width, height }}
                className="aspect-square rounded-full bg-transparent flex items-center justify-center relative"
            >
                <motion.img
                    src={icon}
                    alt={text}
                    style={{ width: widthIconSpring, height: heightIconSpring }}
                    className="filter invert"
                />

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: -10 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute whitespace-nowrap bottom-full mb-2 bg-black/90 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-xl border border-white/10"
                        >
                            {text}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.a>
    );
}

export default Navbar;
