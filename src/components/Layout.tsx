import Head from "next/head"
import { LogoHeader } from "./Header"
import { Navbar } from "./Navbar"
import { Social } from "./Social"

export const Layout = (props:any) => {

    const contentWidth = () => {
        if (props.fullWidth) return "w-full"
        else return "max-w-4xl p-2"
    }

    return (
        
        <div className="bg-white dark:bg-gray-900">
                <div className="w-full flex flex-col">
                    <div className="w-full bg-indigo-50 dark:bg-slate-900 border-b-2 border-indigo-800 pt-4 dark:text-white hidden md:flex">
                        <LogoHeader />
                    </div>
                    <div className="w-full bg-gray-50 dark:bg-gray-800 py-5 dark:text-white border-b border-indigo-800">
                        <Navbar />
                    </div>
                    <div className={`w-full mx-auto ${contentWidth()} dark:text-gray-200`}>
                        {props.children}
                    </div>
                    <div className="w-full mx-auto p-2 bg-gray-900 dark:bg-gray-800 h-48">
                        <nav className="w-full flex justify-center flex-col self-center h-full roboto mb-6 mt-2">
                            <p className="self-center text-3xl text-white font-bold">martinsson.io</p>
                            <p className="roboto text-indigo-500 self-center mb-4">jesper@martinsson.io</p>
                            <Social />
                        </nav>
                    </div>
                </div>
            </div>
        
    )
}