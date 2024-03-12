import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getHotelByUserAsync, selecthotel } from "../features/hotel/hotelSlice";
import SimpleLoading from "../components/common/SimpleLoading";
import Layout from "../components/hotel-details/Layout";

const MyHotels = () => {

    const { status, ownerHotels } = useSelector(selecthotel);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotelByUserAsync())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {status === "loading" ?
                <SimpleLoading /> :
                <div className="space-y-5">
                    <span className="flex justify-between items-center">
                        <h1 className="text-2xl base:text-3xl font-bold mb-3">My Hotel's</h1>
                        <Link to="/add-hotel" className="bg-blue-400 text-white px-4 py-2 text-xl rounded-md outline-none hover:bg-blue-600 transition-all">Add One</Link>
                    </span>
                    {
                        ownerHotels.length > 0 ?
                            <div className="grid grid-cols-1 gap-8">
                                {ownerHotels.map((hotel, i) => (
                                    <Layout hotel={hotel} key={i} />
                                ))}
                            </div>
                            :
                            <span className="flex justify-center accent-lime-50 text-3xl">Hotel Not Found</span>

                    }
                </div>
            }
        </>
    )
}

export default MyHotels
