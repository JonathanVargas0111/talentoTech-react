import { Link } from "react-router-dom";
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from "react";
export default function Header() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    const NAV_LINKS = [
        { title: 'Inicio', path: '/' },
        { title: 'Usuarios', path: '/user' },
        { title: 'Crear Usuario', path: '/create-user' },
    ]
    return (
        <nav className="fixed z-50 w-screen pz-4">
            <div className="container flex items-center justify-between rounded-sm mx-auto bg-black py-3">
                <div className="flex flex-shrink-0 items-center justify-between">
                    <Link to='/' className="flex items-center ">
                        <img
                            className="mr-2 h-12 w-16"
                            src="../../public/logo/color1.png"
                            alt="Logo"
                        />
                        <span className="text-white text-lg tracking-tight hover:text-neutral-500">UrbanAbode</span>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex items-center gap-4">
                        {
                            NAV_LINKS.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className="text-sm text-white hover:text-neutral-500"
                                        to={item.path}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hidden text-sm text-white lg:flex">
                    <Link to="/login">
                        <Button variant="outline" className="mr-2 bg-black">Login</Button>
                    </Link>
                    {/* <Button variant="solid" className="bg-white text-black">Sign up</Button> */}
                </div>
                <div className="flex-col justify-end text-white md:flex lg:hidden">
                    <button onClick={toggleNavbar} className="">
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {
                mobileDrawerOpen && (
                    <div className="rounded-md bg-black py-3 lg:hidden">
                        <ul className="flex flex-col items-center">
                            {
                                NAV_LINKS.map((item, index) => (
                                    <li key={index} className="py-6">
                                        <Link
                                            className="text-sm text-white "
                                            to={item.path}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex items-center justify-center pb-8 text-white">
                            <Link to="/login">
                                <Button variant="outline" className="mr-2 bg-black">Login</Button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </nav>
    );
}