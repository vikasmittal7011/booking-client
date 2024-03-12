import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { clearMessage, getHotelByIdAsync, selecthotel, updateHotelAsync } from "../features/hotel/hotelSlice";
import SimpleLoaing from "../components/common/SimpleLoading";
import { FormProvider, useForm } from "react-hook-form";
import Toast from "../components/common/Toast";
import { Address, Details, Guests, Images, Location, Perks, Type } from "../components/add-hotel";
import { ClipLoader } from "react-spinners";

const EditHotel = () => {
    const formMethods = useForm();
    const { handleSubmit, reset } = formMethods;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const [error, setError] = useState("");
    const [photos, setPhotos] = useState([]);


    const { status, fetchedHotel, message, hotelUpdate, updateStatus } = useSelector(selecthotel);

    const onSubmit = handleSubmit((data) => {
        if (photos.length < 1) {
            setError("Plase privide some images...")
        }
        dispatch(updateHotelAsync({ ...data, images: photos }))
    });

    useEffect(() => {
        if (fetchedHotel) {
            reset(fetchedHotel)
            setPhotos(fetchedHotel.photos);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchedHotel]);

    useEffect(() => {
        if (hotelUpdate) {
            navigate(`/hotel/${fetchedHotel.id}`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hotelUpdate]);

    useEffect(() => {
        dispatch(getHotelByIdAsync(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <>
            {status === "loading" ?
                <SimpleLoaing />
                :
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
                            <button type="submit" className={`bg-blue-700 outline-none text-white p-2 px-4 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ${updateStatus === "loading" ? "cursor-not-allowed" : "cursor-pointer"} flex justify-center items-center gap-2`}>
                                <ClipLoader size={20} color="white" loading={updateStatus === "loading"} />
                                <div>Save</div>
                            </button>
                        </div>
                    </form>
                </FormProvider>
            }
        </>
    )
}

export default EditHotel
