import { useFormContext } from "react-hook-form"
import Heading from "./Heading"
import { inputClass, labelClass } from "../../constant";

const Address = () => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="flex flex-col gap-6">
            <Heading heading="Address" />

            <div className="grid md:grid-cols-2 gap-4">
                <label className={labelClass}>
                    Street
                    <input {...register("street", { required: "This field is require..." })} className={inputClass} />
                    {errors.street && <span className="text-red-500">{errors.street.message}</span>}
                </label>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <label className={labelClass}>
                    City
                    <input {...register("city", { required: "This field is require..." })} className={inputClass} />
                    {errors.city && <span className="text-red-500">{errors.city.message}</span>}
                </label>
                <label className={labelClass}>
                    State
                    <input {...register("state", { required: "This field is require..." })} className={inputClass} />
                    {errors.state && <span className="text-red-500">{errors.state.message}</span>}
                </label>
                <label className={labelClass}>
                    Pin
                    <input type="number" {...register("pin", { required: "This field is require..." })} className={inputClass} />
                    {errors.pin && <span className="text-red-500">{errors.pin.message}</span>}
                </label>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <label className={labelClass}>
                    Country
                    <input {...register("country", { required: "This field is require..." })} className={inputClass} />
                    {errors.country && <span className="text-red-500">{errors.country.message}</span>}
                </label>
            </div>

        </div>
    )
}

export default Address
