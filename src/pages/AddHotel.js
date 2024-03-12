import { FormProvider, useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { Address, Details, Guests, Images, Location, Perks, Type } from "../components/add-hotel/index"
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, createHotelAsync, selecthotel } from "../features/hotel/hotelSlice";
import Toast from "../components/common/Toast";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const AddHotel = () => {

    const navigate = useNavigate();

    const { hotelCreate, message, status, hotel } = useSelector(selecthotel);

    const formMethods = useForm();
    const { handleSubmit } = formMethods;

    const dispatch = useDispatch();

    const [error, setError] = useState("");

    const [photos, setPhotos] = useState([]);

    const onSubmit = handleSubmit((data) => {
        if (photos.length < 1) {
            setError("Plase privide some images...")
        }
        dispatch(createHotelAsync({ ...data, images: photos }))
    });

    useEffect(() => {
        if (hotelCreate && hotel) {
            navigate("/hotel/" + hotel?.id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hotelCreate]);

    return (
        <FormProvider {...formMethods}>
            <Toast message={message} type={status === "failed" ? "success" : "err"} clearMessage={clearMessage} />
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <Details />
                <Address />
                <Type />
                <Perks />
                <Guests />
                <Location />
                <Images images={photos} setImages={setPhotos} error={error} setError={setError} />
                <div className="flex justify-end">
                    <button type="submit" className={`bg-blue-700 outline-none text-white p-2 px-4 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ${status === "loading" ? "cursor-not-allowed" : "cursor-pointer"} flex justify-center items-center gap-2`}>
                        <ClipLoader size={20} color="white" loading={status === "loading"} />
                        <div>Save</div>
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}

export default AddHotel
