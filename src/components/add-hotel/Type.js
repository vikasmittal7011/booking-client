import { useFormContext } from 'react-hook-form'
import Heading from './Heading'
import { hotelTypes } from '../../constant';

const Type = () => {

    const { register, formState: { errors }, watch } = useFormContext();

    const typeWatch = watch("type")

    return (
        <div className="flex flex-col gap-6">
            <Heading heading="Type" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {hotelTypes.map((type, i) => (
                    <label key={i} className={`cursor-pointer font-semibold text-sm rounded-full px-4 py-2 ${typeWatch === type ? "bg-blue-300" : "bg-gray-300"}`} >
                        <input type='radio' value={type} {...register("type", { required: "This field is require..." })} className="hidden" />
                        <span>{type}</span>
                    </label>
                ))}
            </div>
            {errors.type && <span className="text-red-500 font-bold text-lg">{errors.type.message}</span>}
        </div>
    )
}

export default Type
