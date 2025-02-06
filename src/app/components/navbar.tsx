'use client';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { House, LayoutDashboard} from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 transition-colors duration-300 ease-in-out ${scrolled
                ? 'bg-red-700 text-white opacity-80'
                : 'bg-transparent text-white'
                }`}
        >
            <div>
            </div>
            <div className="flex justify-between ml-24">
                <ul className="flex flex-row gap-6 text-lg font-semibold">
                    {[
                        { icon: <House className="w-5 h-5" />, name: "Home", path: "/" },
                        { icon: <LayoutDashboard className="w-5 h-5 " />, name: "Dashboard", path: "/" },
                    ].map(({ name, path, icon }) => (
                        <li key={name}>
                            <Link
                                href={path}
                                className="flex items-center gap-2 px-5 py-2 rounded-lg border border-transparent transition-all duration-300 ease-in-out bg-red-800/70 hover:bg-red-800/100 hover:shadow-lg hover:shadow-whiite hover:border-white/50 "
                            >
                                {icon}
                                <span>{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className="flex ">
            <div className="w-[100px] invisible">
                <h1>hello</h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;