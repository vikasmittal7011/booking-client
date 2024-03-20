import { AiFillStar } from "react-icons/ai";
import BookingForm from "./BookingForm";

const Details = ({ hotel }) => {
    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center gap-2">
                    <span className="flex">
                        {Array.from({ length: hotel.star }).map((star, i) => (
                            <AiFillStar key={i} className="fill-yellow-400" />
                        ))}
                    </span>
                    {hotel.type}
                </div>
                <h1 className="text-xl md:text-3xl font-bold tracking-wide">{hotel.name}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {hotel.photos.map((image, i) => (
                    <div key={i} className="lg:h-[300px] h-[200px]">
                        <img src={image} alt={hotel.name} className="rounded-md w-full h-full object-cover object-center" />
                    </div>
                ))}
            </div>

            <h1 className="text-xl md:text-2xl font-bold tracking-wide">Address</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
                <div>
                    <p>{hotel?.addressLine},
                        <br />{hotel?.state},
                        <br /> {hotel?.country}, {hotel?.pin}</p>
                    <a className="underline w-fit" href={hotel?.mapLocation} rel="noreferrer" target="_blank">Map Location</a>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-md md:text-xl font-bold tracking-wide">Owner Info</h1>
                    <p className="text-gray-700">{hotel.owner.firstName} {hotel.owner.lastName}</p>
                    <p className="text-gray-700">{hotel.owner.email}</p>
                </div>
            </div>

            <h1 className="text-xl md:text-2xl font-bold tracking-wide">Perks</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {hotel.perks.map((perk, i) => (
                    <span key={i} className="border border-slate-300 p-3 rounded-sm">{perk}</span>
                ))}
            </div>

            <h1 className="text-xl md:text-2xl font-bold tracking-wide">Discription</h1>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-2">
                <span className="whitespace-pre-line text-gray-700">{hotel.discription}</span>
                <BookingForm hotel={hotel} />
            </div>

            <h1 className="text-xl md:text-2xl font-bold tracking-wide">Extra Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 md:gap-2">
                <span className="whitespace-pre-line text-gray-700">{hotel.extraInfo}</span>
            </div>
        </div>
    )
}

export default Details
