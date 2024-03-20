import { useDispatch, useSelector } from "react-redux"
import { selectuser } from "../../features/user/userSlice"
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createPaymentIntentAsync, selectbooking } from "../../features/booking/bookingSlice";

const Form = ({ hotel, nights, bookingInfo }) => {

    const { user } = useSelector(selectuser);

    const { info, intentCreated } = useSelector(selectbooking);

    const dispatch = useDispatch();

    const { register, setValue, handleSubmit } = useForm({
        defaultValues: user
    });

    const onSubmit = handleSubmit(() => {
        dispatch(createPaymentIntentAsync(nights * hotel.discountedPrice))
    })

    const handlePayment = () => {
        const { data, key } = info;
        const callback_url = `${process.env.REACT_APP_URL}booking/paymentverification?checkIn=${bookingInfo.checkIn}&checkOut=${bookingInfo.checkOut}&hotel=${hotel.id}&adultCount=${bookingInfo.adultCount}&childCount=${bookingInfo.childCount}&price=${nights * hotel.discountedPrice}`;

        console.log(callback_url)

        const options = {
            key,
            amount: +data.amount,
            currency: "INR",
            name: "Vikey's Holidays",
            description: "Vikey's Holidays Online Payment",
            image: hotel.photos[0],
            order_id: data.id,
            callback_url,
            prefill: {
                name: user.name,
                email: user.email,
            },
            notes: JSON.stringify({
                address: "Razorpay Corporate Office",
                bookingInfo: { ...bookingInfo, hotel: hotel.id }
            }),
            theme: {
                color: "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open()
    }

    useEffect(() => {
        if (intentCreated) {
            handlePayment()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intentCreated]);

    useEffect(() => {
        setValue("firstName", user.firstName)
        setValue("lastName", user.lastName)
        setValue("email", user.email)
    }, [setValue, user.email, user.firstName, user.lastName]);

    return (
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 rounded-md border border-slate-300 p-5">
            <h1 className="text-3xl font-bold">Confim Your Details</h1>

            <div className='grid grid-cols-2 gap-6'>
                <label className='text-gray-700 text-sm font-bold flex-1'>
                    First Name:
                    <input
                        {...register("firstName")}
                        type="text"
                        className='mt-1 border rounded w-full py-2 px-3 bg-gray-200'
                        readOnly
                        disabled
                    />
                </label>
                <label className='text-gray-700 text-sm font-bold flex-1'>
                    Last Name:
                    <input
                        {...register("lastName")}
                        type="text"
                        className='mt-1 border rounded w-full py-2 px-3 bg-gray-200'
                        readOnly
                        disabled
                    />
                </label>
            </div>
            <label className='text-gray-700 text-sm font-bold flex-1'>
                Email:
                <input
                    type="text"
                    className='mt-1 border rounded w-full py-2 px-3 bg-gray-200'
                    readOnly
                    disabled
                    {...register("email")}
                />
            </label>

            <div>
                <h1 className="text-xl font-semibold">Price Summary</h1>
                <div className="bg-blue-200 p-4 my-3 rounded-md">
                    <div className="font-semibold text-xl">Total Cost: ₹ {hotel.discountedPrice * nights}</div>
                    <p className="text-xs">Includes All Taxes & Charges</p>
                </div>
            </div>

            <div className="flex justify-end">
                <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 transition-all outline-none rounded-md">Confirm Booking</button>
            </div>

        </form>


    )
}

export default Form
