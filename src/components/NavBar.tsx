import { useState } from "react";
import { Link } from "react-router-dom";

import { navBarTabs } from "../constants/navbar";
import { logo, menu, close } from "../assets";


export const NavBar = () => {
    const [active, setActive] = useState<string>("");
    const [toogle, setToogle] = useState<boolean>(false);

    return(
        <nav className="w-full bg-black fixed flex items-center breakpoint:px-10 px-5 py-5 top-0 z-20">
            <div className="w-full flex justify-between ">
                <Link
                    to={"/"}
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                    className="flex items-center"
                >
                    <img src={logo} alt="logo" className="w-15 h-10"/>
                    &nbsp;
                    <p className="text-white text-[18px] flex font-bold cursor-pointer">
                        Walter &nbsp;
                        <span className="breakpoint:block hidden">
                            Nkosinathi
                            &nbsp;
                        </span>
                        Magagula
                    </p>
                </Link>

                <ul className="list-none hidden breakpoint:flex gap-8 py-2">
                    {navBarTabs.map((tab) => (
                        <li
                            key={tab.id}
                            onClick={() => {
                                setActive(tab.title);
                            }}
                            className={`${active === tab.title ? 'text-white' : 'text-[#b0b7c0]'} text-[18px]`}
                        >
                            <a href={`#${tab.id}`}>
                                {tab.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="breakpoint:hidden flex py-2">
                    <img 
                        src={toogle ? close : menu} 
                        alt="menu" 
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setToogle(!toogle)}
                    />

                    <div className={toogle ? 'bg-black p-5 fixed min-w-[100px] top-20 right-0 flex' : 'hidden'}>
                        <ul className="list-none flex flex-col justify-end items-start gap-2">
                            {navBarTabs.map((tab) => (
                            <li
                                key={tab.id}
                                onClick={() => {
                                    setActive(tab.title);
                                    setToogle(false);
                                }}
                                className="text-white"
                            >
                                <a href={`#${tab.id}`}>
                                    {tab.title}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
