import { useFormContext } from "react-hook-form"
import Heading from "./Heading"
import { inputClass, labelClass } from "../../constant";

const Guests = () => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="flex flex-col gap-6">
            <Heading heading="Guests" />
            <div className="flex flex-col md:flex-row gap-5 bg-gray-400 p-3">
                <label className={labelClass}>
                    Adult Guest
                    <input type="number" min={1} {...register("adultCount", { required: "This field is require..." })} className={inputClass} />
                    {errors.adultCount && <span className="text-red-500">{errors.adultCount.message}</span>}
                </label>

                <label className={labelClass}>
                    Child Guest
                    <input type="number" min={0} {...register("childCount",)} className={inputClass} />
                    {errors.childCount && <span className="text-red-500">{errors.childCount.message}</span>}
                </label>
            </div>
        </div>
    )
}

export default Guests
