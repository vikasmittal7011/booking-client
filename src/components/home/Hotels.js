import { useSelector } from "react-redux"
import { selecthotel } from "../../features/hotel/hotelSlice"
import HotelCard from "./HotelCard"
import { sortOptions } from "../../constant"
import { Bars3Icon } from "@heroicons/react/20/solid"

const Hotel = ({ location, setSort, isOpen, handleIsOpen }) => {

    const { hotels, totalProduct } = useSelector(selecthotel)
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                    {totalProduct} Hotels Found
                    {location && `in ${location}`}
                </span>
                <div className="flex items-center gap-3">
                    <select
                        onChange={(e) => setSort({ _sort: sortOptions[e.target.value].sort, _order: sortOptions[e.target.value].order })}
                        className="p-2 broder rounded-md">
                        <option value="">Sort By</option>
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
