import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-blue-800 py-3 md:py-6">
            <div className="md:px-20 lg:px-40 p-4 tracking-wider text-white mx-auto flex justify-between">
                <span className="font-bold text-2xl md:text-3xl cursor-pointer">
                    <Link to="/" className="outline-none">Vikey Holidays</Link>
                </span>
                <span className="flex space-x-2 text-xl">
                    <Link to="/register" className="rounded-xl flex items-center px-3 bg-white text-blue-700 hover:text-blue-500 hover:bg-gray-100 transition outline-none">Login</Link>
                </span>
            </div>
        </div>
    )
}

export default Header
