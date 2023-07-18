import { NavLink } from "./NavLink"


const links = [
    {route: "/", label: "Home"},
    {route: "/posts", label: "Blog"},
    {route: "/portfolio", label: "Portfolio"},
    {route: "/about", label: "About"},
]


export const Navbar = () => {

    return (
        <nav className="w-full justify-center gap-24 self-center h-full roboto hidden md:flex">
            {links.map((link:any, index:number) => {
                return (<NavLink key={index} route={link.route} label={link.label} />)
            })}
        </nav>
    )

}