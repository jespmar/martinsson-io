'use client'

import { useState } from "react";
import { NavLink } from "./NavLink"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


const links = [
    {route: "/", label: "Home"},
    {route: "/posts", label: "Blog"},
    {route: "/portfolio", label: "Portfolio"},
    {route: "/about", label: "About"},
]


export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <><nav className="w-full justify-center gap-24 self-center h-full roboto hidden md:flex">
            {links.map((link: any, index: number) => {
                return (<NavLink key={index} route={link.route} label={link.label} />)
            })}
        </nav>
        <div className="px-2 flex md:hidden justify-between">
            {!showMenu ? <GiHamburgerMenu onClick={toggleMenu} className="w-8 h-8 cursor-pointer hover:text-indigo-500" /> : <GrClose onClick={toggleMenu} className="w-8 h-8 cursor-pointer hover:text-indigo-500" />}
            <p className="text-2xl font-bold roboto px-5">martinsson.io</p>
            </div>
            
            {showMenu && <div className="absolute flex md:hidden z-20 bg-white p-3 w-full">

<div className="flex flex-col justify-start gap-1">
{links.map((link: any, index: number) => {
return (<NavLink key={index} route={link.route} label={link.label} />)
})}
</div>

</div>}</>
    )

}