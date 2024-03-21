import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchMybookingsAsync, selectbooking } from "../features/booking/bookingSlice";
import Details from "../components/booking/Details";
import SimpleLoading from "../components/common/SimpleLoading";

const MyBookings = () => {

    const dispatch = useDispatch();

    const { status, myBooking } = useSelector(selectbooking);

    useEffect(() => {
        dispatch(fetchMybookingsAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getNights = bookingInfo => {
        return Math.ceil(Math.abs(new Date(bookingInfo.checkOut).getTime() - new Date(bookingInfo.checkIn).getTime()) / (1000 * 60 * 60 * 24));
    }

    return (
        <>
            <h1 className="font-bold text-2xl md:text-3xl tracking-wide">My Bookings</h1>
            {status === "loading" ?
                <SimpleLoading />
                :
                <>
                    {myBooking.length > 0
                        ?
                        <>
                            {myBooking?.map((booking, i) => (
                                <div key={i}>
                                    {booking.bookings.map((book, i) => (
                                        <div key={i} className="grid lg:grid-cols-[2fr_1fr] gap-5 my-5 border border-slate-300 p-1 md:p-5 rounded-lg">
                                            <Details hotel={booking} bookingInfo={book} nights={getNights(book)} />
                                            <img src={booking.photos[0]} alt="" className="h-full rounded-lg object-cover object-center" />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </>
                        :
                        <div className="text-xl md:text-2xl font-bold md:tracking-wide text-center my-5">
                            You Don't Book Any Hotel Now!!
                        </div>
                    }
                </>
            }
        </>
    )
}

export default MyBookings
