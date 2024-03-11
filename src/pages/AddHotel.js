import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react";
import { Address, Details, Guests, Images, Location, Perks, Type } from "../components/add-hotel/index"

const AddHotel = () => {

    const formMethods = useForm();
    const { handleSubmit } = formMethods;

    const [error, setError] = useState("");

    const [photos, setPhotos] = useState([]);

    const onSubmit = handleSubmit((data) => {
        if (photos.length < 1) {
            setError("Plase privide some images...")
        }
        console.log({ ...data, photos })
    })

    return (
        <FormProvider {...formMethods}>
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <Details />
                <Address />
                <Type />
                <Perks />
                <Guests />
                <Location />
                <Images images={photos} setImages={setPhotos} error={error} setError={setError} />
                <div className="text-end">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md transition-all hover:bg-blue-800">Save</button>
                </div>
            </form>
        </FormProvider>
    )
}

export default AddHotel
