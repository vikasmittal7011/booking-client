import { useDispatch, useSelector } from "react-redux";
import { getHotelByIdAsync, selecthotel } from "../features/hotel/hotelSlice";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SimpleLoading from "../components/common/SimpleLoading";
import Details from "../components/booking/Details";
import Form from "../components/booking/Form";

const Booking = () => {
    const [nights, setNights] = useState();

    const { id } = useParams();

    const navigate = useNavigate();

    const { status, fetchedHotel: hotel } = useSelector(selecthotel);

    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"))

    const dispatch = useDispatch();

    useEffect(() => {
        if (bookingInfo.checkIn && bookingInfo.checkOut) {
            const nights = Math.abs(new Date(bookingInfo.checkOut).getTime() - new Date(bookingInfo.checkIn).getTime()) / (1000 * 60 * 60 * 24);
            setNights(Math.ceil(nights))
        }
    }, [bookingInfo.checkIn, bookingInfo.checkOut]);

    useEffect(() => {
        dispatch(getHotelByIdAsync(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (!bookingInfo?.checkIn)
            navigate("/")
    }, [bookingInfo?.checkIn, hotel.name, navigate]);

    return (
        <>
            {status === "loading" ?
                <SimpleLoading />
                :
                <>
                    {hotel.name ?
                        <div className="grid md:grid-cols-[1fr_2fr] gap-5">
                            <Details hotel={hotel} bookingInfo={bookingInfo} nights={nights} />
                            <Form hotel={hotel} nights={nights} bookingInfo={bookingInfo} />
                        </div>
                        :
                        <div className="text-red-500 flex justify-center font-bold text-3xl">Hotel Not Found</div>
                    }
                </>
            }
        </>
    )
}

export default Booking
