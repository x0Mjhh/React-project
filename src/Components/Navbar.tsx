
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {



    let userName;
    const navigate = useNavigate();
    if (localStorage.getItem('login') === "false") {
        null
    } else if (localStorage.getItem('login') === "true") {
        userName = localStorage.getItem('username');
    }
    const logout = () => {
        localStorage.clear();
        navigate('/register');
    }

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 bg-black " >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to='/'
                            className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        >
                         <h1> MY MOVIES</h1>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div

                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to='/home'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className=" px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"></i><span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/home'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className=" px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"></i><span className="ml-2">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/home'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className=" px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"></i><span className="ml-2">Contact</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/login"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className=" text-lg leading-lg text-white opacity-75"></i><span className="ml-2" >{userName ? userName : 'Login'}</span>
                                </Link>
                            </li>

                            {userName ?

                                <li className="nav-item border-spacing-1 border-2 ">
                                    <Link to="/register"
                                        className="px-3 py-2 pr-6 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                    >
                                        <i className="  text-lg  text-white  "></i><span className="ml-2" onClick={logout}>Log Out</span>
                                    </Link>
                                </li>

                                :
                                <li className="nav-item border-spacing-1 border-2 ">
                                    <Link to="/register"
                                        className="px-3 py-2 pr-6 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                    >
                                        <i className="  text-lg  text-white  "></i><span className="ml-2">Sign in</span>
                                    </Link>
                                </li>

                            }


                            <li className="nav-item border-spacing-1 border-2 hidden">
                                <Link to='/home'
                                    className="px-3 py-2 pr-6 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className=" text-lg  text-white  "></i><span className="ml-2">Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



           
        </>
    )
}
