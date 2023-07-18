import { NavLink } from "./NavLink"
import { GiHamburgerMenu } from "react-icons/gi";


const links = [
    {route: "/", label: "Home"},
    {route: "/posts", label: "Blog"},
    {route: "/portfolio", label: "Portfolio"},
    {route: "/about", label: "About"},
]


export const Navbar = () => {

    return (
        <><nav className="w-full justify-center gap-24 self-center h-full roboto hidden md:flex">
            {links.map((link: any, index: number) => {
                return (<NavLink key={index} route={link.route} label={link.label} />)
            })}
        </nav>
        <div className="px-2 flex md:hidden justify-between">
            <GiHamburgerMenu className="w-8 h-8" />
            <p className="text-2xl font-bold roboto px-5">martinsson.io</p>
            </div></>
    )

}