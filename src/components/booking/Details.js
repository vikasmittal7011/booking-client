const Details = ({ hotel, bookingInfo, nights }) => {
    return (
        <div className="grid gap-4 rounded-lg border border-slate-300 p-4 h-fit">
            <h1 className="text-xl font-bold">Your Booking Info</h1>

            <div className="border-b py-2">
                Location:
                <div className="font-bold">{hotel.addressLine}, {hotel.state}, {hotel.country}, {hotel.pin}</div>
            </div>

            <div className="flex justify-between items-center border-b py-2">
                <div>
                    Ckeck In:
                    <div className="font-bold">{new Date(bookingInfo.checkIn).toDateString()}</div>
                </div>
                <div>
                    Ckeck Out:
                    <div className="font-bold">{new Date(bookingInfo.checkOut).toDateString()}</div>
                </div>
            </div>

            <div className="border-b py-2">
                Number Of Nights Stay:
                <div className="font-bold">{nights}</div>
            </div>

            <div className="border-b py-2">
                Guests:
                <div className="font-bold">{bookingInfo.adultCount} Adults & {bookingInfo.childCount || 0} Children</div>
            </div>

        </div>
    )
}

export default Details
