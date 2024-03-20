import { useFormContext } from "react-hook-form"
import Heading from "./Heading"
import { inputClass, labelClass } from "../../constant";

const Address = () => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="flex flex-col gap-6">
            <Heading heading="Address" />

            <div className="grid md:grid-cols-1 gap-4">
                <label className={labelClass}>
                    Address Line
                    <input {...register("addressLine", { required: "This field is require..." })} className={inputClass} />
                    {errors.addressLine && <span className="text-red-500">{errors.addressLine.message}</span>}
                </label>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <label className={labelClass}>
                    State
                    <input {...register("state", { required: "This field is require..." })} className={inputClass} />
                    {errors.state && <span className="text-red-500">{errors.state.message}</span>}
                </label>
                <label className={labelClass}>
                    Country
                    <input {...register("country", { required: "This field is require..." })} className={inputClass} />
                    {errors.country && <span className="text-red-500">{errors.country.message}</span>}
                </label>
                <label className={labelClass}>
                    Pin
                    <input type="number" {...register("pin", { required: "This field is require..." })} className={inputClass} />
                    {errors.pin && <span className="text-red-500">{errors.pin.message}</span>}
                </label>
            </div>

            <div className="grid grid-cols-1 gap-4">

            </div>

        </div>
    )
}

export default Address
