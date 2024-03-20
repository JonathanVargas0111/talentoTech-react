import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div>
            <footer className="bg-black pb-5">
                <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-gray-300 sm:justify-start">
                            <ul className="flex px-8 space-x-5">
                                <li><Link to='/' className="hover:text-blue-500">Inicio</Link></li>
                                <li><Link to='/user' className="hover:text-blue-500">Usuarios</Link></li>
                                <li><Link to='/create-user' className="hover:text-blue-500">Crear Usuario</Link></li>
                            </ul>
                        </div>
                        <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                            T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developer  for felipe vargas
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}