import { Link } from "react-router-dom"

const MyHotels = () => {
    return (
        <div>
            <Link to="/add-hotel" className="bg-blue-400 text-white px-4 py-2 text-xl rounded-md outline-none hover:bg-blue-600 transition-all">Add One</Link>
        </div>
    )
}

export default MyHotels
