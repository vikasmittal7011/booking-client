import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import "react-datepicker/dist/react-datepicker.module.css"

import { selectuser } from "../../features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = ({ hotel }) => {

    const navigate = useNavigate();

    const location = useLocation();

    const { user } = useSelector(selectuser);

    const { watch, setValue, register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            ...JSON.parse(localStorage.getItem("bookingInfo"))
        },
    });

    const checkIn = watch("checkIn");
    const checkOut = watch("checkOut");

    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1)

    const onSubmit = (data) => {
        console.log(data)
        if (data.adultCount) {
            localStorage.setItem("bookingInfo", JSON.stringify(data))
            navigate(`/hotel/${hotel.id}/booking`)
        }
    }

    const handleLogin = (data) => {
        if (data.adultCount) {
            localStorage.setItem("bookingInfo", JSON.stringify(data))
            navigate("/login", { state: { from: location } })
        }
    }

    return (
        <div className="flex flex-col p-4 bg-blue-400 gap-4 relative">

            <h2 className="text-md font-bold flex gap-1 items-center bg-white p-2">
                ₹ {hotel.discountedPrice}
                <span className="text-sm bg-yellow-400 absolute p-1 rounded-md -top-5 -right-3 md:-right-5"> {hotel.discount}%Off</span>
                <span className="line-through text-red-400 text-xs"> {hotel.basePrice}</span>
            </h2>

            <form onSubmit={user.email ? handleSubmit(onSubmit) : handleSubmit(handleLogin)}>
                <div className="grid grid-cols-1 gap-4 items-center">
                    <div>
                        <DatePicker
                            {...register("checkIn", { required: 'This field is required...' })}
                            required
                            selected={checkIn}
                            onChange={(date) => setValue("checkIn", date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            minDate={minDate}
                            maxDate={maxDate}
                            placeholderText="Check-In Date"
                            className="min-w-full bg-white p-2 focus:outline-none"
                            wrapperClassName="min-w-full"
                            dateFormat="MMMM d, yyyy"
                        />
                        {errors.checkIn && <span className="text-red-500">{errors.checkIn.message}</span>}
                    </div>
                    <div>
                        <DatePicker
                            {...register("checkOut", { required: 'This field is required...' })}
                            required
                            selected={checkOut}
                            onChange={(date) => setValue("checkOut", date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            minDate={checkIn || minDate}
                            maxDate={maxDate}
                            placeholderText="Check-Out Date"
                            className="min-w-full bg-white p-2 focus:outline-none"
                            wrapperClassName="min-w-full"
                            dateFormat="MMMM d, yyyy"
                        />
                        {errors.checkOut && <span className="text-red-500">{errors.checkOut.message}</span>}

                    </div>

                    <div className="flex bg-white px-2 py-1 gap-2">
                        <div className="flex flex-col w-full">
                            <label className="items-center flex w-full">
                                Adult:
                                <input
                                    min={1}
                                    max={20}
                                    type="number"
                                    className={`w-full p-1 focus:outline-none font-bold`}
                                    {...register("adultCount", { required: "This field is require..", valueAsNumber: true })}
                                />
                            </label>
                            {errors.adultCount && <span className="text-red-500">{errors.adultCount.message}</span>}
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="items-center flex w-full">
                                Children:
                                <input
                                    min={0}
                                    max={20}
                                    type="number"
                                    className={`w-full p-1 focus:outline-none font-bold`}
                                    {...register("childCount", { valueAsNumber: true })}
                                />
                            </label>
                            {errors.childCount && <span className="text-red-500">{errors.childCount.message}</span>}
                        </div>
                    </div>
                    {user.email ?
                        <button type="submit" className="bg-blue-600 w-full text-white p-2 outline-none font-bold hover:bg-blue-800 transition-all text-xl">Book Now</button>
                        :
                        <button onClick={handleLogin} type="submit" className="bg-blue-600 w-full text-white p-2 outline-none font-bold hover:bg-blue-800 transition-all text-xl">Login To Book</button>
                    }
                </div>
            </form>

        </div>
    )
}

export default BookingForm
