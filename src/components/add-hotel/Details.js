import { useFormContext } from "react-hook-form"
import Heading from "./Heading";
import { inputClass, labelClass } from "../../constant";

const Details = () => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="flex flex-col gap-4">
            <Heading heading="Add Hotel" />

            <label className={labelClass}>
                Name
                <input {...register("name", { required: "This field is require..." })} className={inputClass} />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </label>

            <label className={labelClass}>
                Discription
                <textarea rows={5} {...register("discription", { required: "This field is require..." })} className={inputClass} />
                {errors.discription && <span className="text-red-500">{errors.discription.message}</span>}
            </label>

            <div className="flex flex-col md:flex-row gap-5">
                <label className={labelClass}>
                    Price Per Night
                    <input type="number" {...register("basePrice", { required: "This field is require..." })} className={inputClass} />
                    {errors.basePrice && <span className="text-red-500">{errors.basePrice.message}</span>}
                </label>

                <label className={labelClass}>
                    Discount
                    <input type="number" {...register("discount")} className={inputClass} />
                    {errors.discount && <span className="text-red-500">{errors.discount.message}</span>}
                </label>
            </div>

            <label className={`${labelClass} max-w-[50%]`}>
                Rating Star
                <select className={inputClass}  {...register("star", { required: "This field is require..." })}>
                    <option value="">Select as Rating</option>
                    {[1, 2, 3, 4, 5].map((star, i) => (
                        <option key={i} value={star} >{star}</option>
                    ))}
                </select>
                {errors.star && <span className="text-red-500">{errors.star.message}</span>}
            </label>

            <label className={labelClass}>
                Extra Info
                <textarea rows={3} {...register("extraInfo", { required: "This field is require..." })} className={inputClass} />
                {errors.extraInfo && <span className="text-red-500">{errors.extraInfo.message}</span>}
            </label>

            <div className="flex flex-col md:flex-row gap-5 bg-gray-400 p-3">
                <label className={labelClass}>
                    Check In Time
                    <input type="time" {...register("checkIn", { required: "This field is require..." })} className={inputClass} />
                    {errors.checkIn && <span className="text-red-500">{errors.checkIn.message}</span>}
                </label>

                <label className={labelClass}>
                    Check Out Time
                    <input type="time" {...register("checkOut", { required: "This field is require..." })} className={inputClass} />
                    {errors.checkOut && <span className="text-red-500">{errors.checkOut.message}</span>}
                </label>
            </div>
        </div>
    )
}

export default Details
