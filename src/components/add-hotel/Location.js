import { useFormContext } from "react-hook-form"
import Heading from "./Heading"
import { inputClass, labelClass } from "../../constant";

const Location = () => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="flex flex-col gap-3">
            <Heading heading="Map Location" />
            <label className={labelClass}>
                <input type="text" {...register("mapLocation", { required: "This field is require..." })} className={inputClass} />
                {errors.mapLocation && <span className="text-red-500">{errors.mapLocation.message}</span>}
            </label>
        </div>
    )
}

export default Location
