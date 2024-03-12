import { AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom"

const HotelCard = ({ hotel }) => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
            <div className="w-full h-[300px]">
                <img src={hotel.photos[0]} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <div className="grid grid-rows-[1fr_2fr_1fr]">
                <div>
                    <div className="flex items-center">
                        <span className="flex">
                            {Array.from({ length: hotel.star }).map((star, i) => (
                                <AiFillStar key={i} className="fill-yellow-400" />
                            ))}
                        </span>
                        <span className="ml-1 text-sm">{hotel.type}</span>
                    </div>
                    <Link to={`/hotel/${hotel.id}`} className="text-2xl font-bold cursor-pointer">{hotel.name}</Link>
                </div>

                <div>
                    <div className="line-clamp-4">{hotel.discription}</div>
                </div>

                <div className="grid grid-cols-2 items-end whitespace-nowrap">
                    <div className="flex gap-1 items-center">
                        {hotel.perks.slice(0, 2).map((perk,i) => (
                            <span key={i} className="bg-slate-300 p-2 rounded-lg font-bold text-sm whitespace-nowrap">{perk}</span>
                        ))}
                        <span className=" p-2 rounded-lg font-bold text-sm whitespace-nowrap">{hotel.perks.length > 2 && `+${hotel.perks.length - 2} more`}</span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <span className="font-bold">
                            ₹ {hotel.discountedPrice} per night
                        </span>
                        <Link to={`/hotel/${hotel.id}`} className="bg-blue-600 text-white h-full p-2 font-bold text-xl max-w-fit outline-none hover:bg-blue-400 transition-all">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard
