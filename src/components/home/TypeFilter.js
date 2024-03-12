import { hotelTypes } from "../../constant/index"

const TypeFilter = ({ selectType, handlType }) => {

    return (
        <div className="border-b border-slate-300 pb-5">
            <h1 className="text-md font-semibold mb-2">Hotel Type</h1>
            {hotelTypes.map((type) => (
                <label key={type} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" value={type} checked={selectType.includes(type)} onChange={handlType} />
                    {type}
                </label>
            ))}
        </div>
    )
}

export default TypeFilter
