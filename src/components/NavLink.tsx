import Link from "next/link";

export const NavLink = (props:any) => {

    const {label, route} = props;

    return (
        <Link className="self-center text-3xl font-bold hover:underline hover:text-indigo-700 hover:dark:text-gray-400" href={route}>{label}</Link>
    )

}