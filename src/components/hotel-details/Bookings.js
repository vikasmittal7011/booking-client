import { Dialog } from "@headlessui/react"
import Modal from "../common/Modal"
import Details from "../booking/Details"

const Bookings = ({ open, handleOpen, hotel }) => {
    const getNights = bookingInfo => {
        return Math.ceil(Math.abs(new Date(bookingInfo.checkOut).getTime() - new Date(bookingInfo.checkIn).getTime()) / (1000 * 60 * 60 * 24));
    }

    return (
        <Modal open={open} handleOpen={handleOpen}>
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {hotel.bookings.map((book, i) => (
                    <div key={i} className="grid lg:grid-cols-[2fr_1fr] gap-5 m-5 border border-slate-300 p-1 md:p-5 rounded-lg">
                        <Details hotel={hotel} bookingInfo={book} nights={getNights(book)} showNameAndLocation={false} />

                        <div className="grid gap-4 rounded-lg border border-slate-300 p-4 h-fit">
                            <h1 className="text-xl font-bold">User Info</h1>

                            <div className="border-b py-2">
                                Name:
                                <div className="font-bold">{book.user.firstName} {book.user.lastName}</div>
                            </div>

                            <div className="border-b py-2">
                                Email:
                                <div className="font-bold">{book.user.email}</div>
                            </div>

                        </div>
                    </div>
                ))}
            </Dialog.Panel>
        </Modal>
    )
}

export default Bookings
