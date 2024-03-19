import { useSelector } from "react-redux"
import { selecthotel } from "../../features/hotel/hotelSlice"
import HotelCard from "./HotelCard"
import { sortOptions } from "../../constant"
import { Bars3Icon } from "@heroicons/react/20/solid"

const Hotel = ({ location, setSort, isOpen, handleIsOpen }) => {

    const { hotels, totalProduct } = useSelector(selecthotel);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center">
                <span className="text-xl font-bold">
                    {totalProduct} Hotels Found
                    {location && <span> in <span className="text-blue-700">{location}</span></span>}
                </span>
                <div className="flex justify-between items-center gap-3">
                    <select
                        onChange={(e) => setSort({ _sort: sortOptions[e?.target?.value]?.sort || "", _order: sortOptions[e?.target?.value]?.order || "" })}
                        className="p-2 border border-blue-400 focus:outline-blue-800 rounded-md">
                        <option value="10">Sort By</option>
                        {sortOptions.map((sort, i) => (
                            <option value={i} key={i}>{sort.name}</option>
                        ))}

                    </select>
                    <Bars3Icon className={`cursor-pointer lg:hidden w-8 h-8 ${!isOpen ? "block" : "hidden"}`} onClick={handleIsOpen} />
                </div>
            </div>

            {hotels?.map((hotel, i) => (
                <HotelCard hotel={hotel} key={i} />
            ))}
        </div>
    )
}

export default Hotel
