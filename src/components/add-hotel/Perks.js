import { useFormContext } from 'react-hook-form'
import { hotelPerks } from '../../constant';
import Heading from './Heading'

const Perks = () => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="flex flex-col gap-6">
            <Heading heading="Perks" />
            <div className="grid s:grid-cols-2 md:grid-cols-5 gap-2">
                {hotelPerks.map((perk, i) => (
                    <label key={i} className={`flex gap-1 text-gray-700`} >
                        <input type='checkbox' value={perk} {...register("perks", {
                            validate: (perks) => {
                                if (perks && perks.length > 0) {
                                    return true;
                                } else {
                                    return "Select at least one perk"
                                }
                            }
                        })} />
                        {perk}
                    </label>
                ))}
            </div>
            {errors.perks && <span className="text-red-500 font-bold text-lg">{errors.perks.message}</span>}
        </div>
    )
}

export default Perks
