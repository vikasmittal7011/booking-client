import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectuser } from "../../features/user/userSlice";

const LoginLinks = ({ handleClick }) => {

    const { user } = useSelector(selectuser);

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="lg:flex gap-4 hidden">
                <p className="rounded-md flex items-center px-2 lg:px-5 bg-blue-500 transition outline-none">{user.firstName} {user.lastName}</p>

                <Link to="/my-booking" className="rounded-md flex items-center px-2 lg:px-5 bg-blue-500 hover:text-blue-500 hover:bg-gray-100 transition outline-none">My Booking's</Link>

                <Link to="/my-hotel" className="rounded-md flex items-center px-2 lg:px-5 bg-blue-500 hover:text-blue-500 hover:bg-gray-100 transition outline-none">My Hotels's</Link>
                <span className="flex space-x-2 text-xl">
                    <button onClick={handleClick} to="/login" className="rounded-md flex items-center px-3 bg-white text-blue-700 hover:text-blue-500 hover:bg-gray-100 transition outline-none">Logout</button>
                </span>
            </div>

            <Bars3Icon className={`lg:hidden w-8 h-8 ${!isOpen ? "block" : "hidden"}`} onClick={handleIsOpen} />

            <div className={`${isOpen ? "block" : "hidden"} absolute right-0 h-screen md:w-1/2 w-2/3 bg-blue-800`}>
                <XMarkIcon className="w-8 h-8 ms-3 absolute" onClick={handleIsOpen} />

                <div className="mt-14 flex flex-col gap-5 px-3">
                    <p className="pb-1 flex items-center px-2">{user.firstName} {user.lastName}</p>

                    <Link to="/my-booking" className="border-b-2 pb-1 flex items-center px-2">My Booking's</Link>

                    <Link to="/my-hotel" className="border-b-2 pb-1 flex items-center px-2">My Hotels's</Link>

                    <span className="flex space-x-2 text-xl">
                        <button onClick={handleClick} to="/login" className="rounded-md flex py-1 bg-white text-blue-700 w-full outline-none justify-center">Logout</button>
                    </span>
                </div>
            </div>
        </>
    )
}

export default LoginLinks
