import Link from "next/link"

 export const LogoHeader = () => {

    return (
        <nav className="w-full flex justify-center gap-24 self-center h-full roboto mb-6 mt-2">
        <Link href={"/"} className="self-center text-2xl font-bold">martinsson.io</Link>
    </nav>
    )

 }