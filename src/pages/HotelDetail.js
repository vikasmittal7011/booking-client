import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getHotelByIdAsync, selecthotel } from "../features/hotel/hotelSlice";

const HotelDetail = () => {

    const { fetchedHotel } = useSelector(selecthotel);

    const { id } = useParams();

    const dispatch = useDispatch();

    console.log(fetchedHotel)

    useEffect(() => {
        dispatch(getHotelByIdAsync(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div>

        </div>
    )
}

export default HotelDetail
