import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { clearMessage, getHotelByIdAsync, selecthotel } from "../features/hotel/hotelSlice";
import Toast from "../components/common/Toast";
import SimpleLoading from "../components/common/SimpleLoading";
import Details from "../components/hotel-details/Details";

const HotelDetail = () => {

    const { fetchedHotel: hotel, status, message } = useSelector(selecthotel);

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotelByIdAsync(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <>
            <Toast message={message} type={status === "failed" ? "err" : "success"} clearMessage={clearMessage} />
            {
                status === "loading" ?
                    <SimpleLoading />
                    :
                    <>
                        {
                            hotel.name ?
                                <Details hotel={hotel} />
                                :
                                <div className="flex justify-center items-center text-3xl tracking-wide font-bold text-red-500">Hotel Not Found</div>
                        }
                    </>

            }
        </>
    )
}

export default HotelDetail
