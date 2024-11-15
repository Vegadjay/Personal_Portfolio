import React, { useState, useEffect } from 'react';
import HomeIcon from '/navbar-icons/Home.svg';
import ContactIcon from '/navbar-icons/Contact.svg';
import ExperinceIcon from '/navbar-icons/Exp.svg';
import SkillsIcon from '/navbar-icons/Skills.svg';
import AboutIcon from '/navbar-icons/Person.svg';
import ProjectIcon from '/navbar-icons/Project.svg';
import MenuIcon from '/navbar-icons/Menu.svg';

const Navbar = () => {
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileExpanded && !event.target.closest('.mobile-nav')) {
                setIsMobileExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileExpanded]);

    const DesktopNav = () => (
        <div className="hidden md:block fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999]">
            <div className="transition-all duration-500 ease-in-out shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 h-14 w-[calc(100% - 40px)] rounded-full px-10 flex items-center justify-between border border-gray-700 shadow-2xl">
                <NavItem icon={HomeIcon} text="Home" href="#homepage" />
                <NavItem icon={AboutIcon} text="About Me" href="#aboutme" />
                <NavItem icon={ExperinceIcon} text="Experience" href="#edu" />
                <NavItem icon={SkillsIcon} text="Skills" href="#skills" />
                <NavItem icon={ProjectIcon} text="Projects" href="#projects" />
                <NavItem icon={ContactIcon} text="Contact" href="#contact" />
            </div>
        </div>
    );

    return (
        <>
            <DesktopNav />
            <MobileNav isMobileExpanded={isMobileExpanded} setIsMobileExpanded={setIsMobileExpanded} />
        </>
    );
};

const NavItem = ({ icon, text, href }) => {
    return (
        <a
            href={href}
            className="cursor-pointer block"
            onClick={(e) => {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                });
            }}
        >
            <div className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700/60 transition-all duration-300">
                <img src={icon} alt={text} className="w-6 h-6 filter invert" />
                <p className="text-gray-100 text-sm font-medium">{text}</p>
            </div>
        </a>
    );
};

const MobileNav = ({ isMobileExpanded, setIsMobileExpanded }) => (
    <div className="mobile-nav md:hidden fixed bottom-4 right-4 z-[9999]">
        <button onClick={() => setIsMobileExpanded(!isMobileExpanded)} className="relative z-50">
            <div className="bg-gray-800 p-3 rounded-full border border-gray-700 shadow-lg transition-all duration-300">
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
                <MobileNavItem icon={ExperinceIcon} text="Education" href="#edu" setIsMobileExpanded={setIsMobileExpanded} />
                <MobileNavItem icon={SkillsIcon} text="Skills" href="#skills" setIsMobileExpanded={setIsMobileExpanded} />
                <MobileNavItem icon={ProjectIcon} text="Projects" href="#projects" setIsMobileExpanded={setIsMobileExpanded} />
                <MobileNavItem icon={ContactIcon} text="Contact" href="#contact" setIsMobileExpanded={setIsMobileExpanded} />
            </div>
        </div>
    </div>
);

const MobileNavItem = ({ icon, text, href, setIsMobileExpanded }) => {
    return (
        <a
            href={href}
            className="cursor-pointer block"
            onClick={(e) => {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                });
                setIsMobileExpanded(false);
            }}
        >
            <div className="bg-gray-800 p-3 rounded-full border border-gray-700 shadow-lg flex items-center justify-center transition-all duration-300">
                <img src={icon} alt={text} className="w-6 h-6 filter invert" />
                <p className="ml-3 text-gray-100 text-sm font-medium">{text}</p>
            </div>
        </a>
    );
};

export default Navbar;
