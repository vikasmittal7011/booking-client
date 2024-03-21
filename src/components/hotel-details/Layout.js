import { CiMap, CiStar } from "react-icons/ci"
import { FaBed, FaRegBuilding } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { Link } from "react-router-dom";
import DeleteNoti from "./DeteleNoti";
import { useState } from "react";
import Bookings from "./Bookings";

const Layout = ({ hotel }) => {

    const [open, setOpen] = useState(false)
    const [openBookings, setOpenBookings] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleOpenBookings = () => {
        setOpenBookings(!openBookings);
    }

    return (
        <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-2 md:p-8 gap-5">

            <DeleteNoti open={open} handleOpen={handleOpen} hotel={hotel} />

            <Bookings open={openBookings} handleOpen={handleOpenBookings} hotel={hotel} />

            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <div className="flex justify-between flex-col md:flex-row gap-5">
                <p className="whitespace-pre-line">{hotel.discription}</p>
                <img src={hotel.photos[0]} alt="" className="md:w-40 rounded-md" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <div className="flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md">
                    <CiMap className="text-2xl ms-1" />
                    {hotel.state}, {hotel.country}
                </div>
                <div className="flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md">
                    <FaRegBuilding className="text-2xl ms-1" />
                    {hotel.type}
                </div>
                <div className="flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md">
                    <BsCashStack className="text-2xl ms-1" />
                    ₹ {hotel.discountedPrice}  per night
                </div>
                <div className="flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md">
                    <FaBed className="text-2xl ms-1" />
                    {hotel.adultCount} adults, {hotel.childCount} children
                </div>
                <div className="flex items-center py-1 text-xl gap-2 border border-slate-300 rounded-e-md">
                    <CiStar className="text-2xl ms-1" />
                    {hotel.star} star
                </div>
            </div>
            <div className="flex justify-between items-center mt-2">
                <Link className="bg-cyan-500 px-3 py-1 text-white hover:bg-cyan-600 transition-all" to={`/hotel/${hotel.id}`}>View Details</Link>

                <button onClick={handleOpenBookings} type="button" className="bg-green-500 px-3 py-1 text-white hover:bg-green-600 transition-all">View Bookings</button>

                <button onClick={handleOpen} type="button" className="bg-red-500 px-3 py-1 text-white hover:bg-red-600 transition-all">Delete</button>

                <Link className="bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 transition-all" to={`/hotel/edit/${hotel.id}`}>Edit</Link>
            </div>
        </div>
    )
}

export default Layout
