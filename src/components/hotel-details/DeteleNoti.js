import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Modal from '../common/Modal'
import { useDispatch } from 'react-redux'
import { deletHotelAsync } from '../../features/hotel/hotelSlice'

const DeleteNoti = ({ open, handleOpen, hotel }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletHotelAsync(hotel.id));
        handleOpen();
    }

    return (
        <Modal open={open} handleOpen={handleOpen}>
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="flex items-center justify-around gap-5">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            Delete Hotel
                        </Dialog.Title>
                    </div>
                    <div className="font-bold text-xl md:text-2xl mt-3 text-center sm:ml-4 sm:mt-0">
                        {hotel.name}
                    </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 flex sm:px-6 gap-5">
                    <button
                        onClick={handleDelete}
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"

                    >
                        Delete
                    </button>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={handleOpen}
                    >
                        Cancel
                    </button>
                </div>
            </Dialog.Panel>
        </Modal>
    )
}

export default DeleteNoti;