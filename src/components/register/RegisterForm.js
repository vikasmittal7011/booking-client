import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { generateOTPAync, selectauth } from "../../features/auth/authSlice"
import { useEffect } from "react"
import { ClipLoader } from "react-spinners"

const inputClass = "border-2 border-blue-400 focus:outline-blue-800 rounded-md w-full py-2 px-2 font-normal mt-2 text-lg"

const labelClass = "font-bold text-gray-700 text-lg flex-1"

const RegisterForm = () => {

    const { sendOTP, userData, status } = useSelector(selectauth)

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
    } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        dispatch(generateOTPAync(data))
    })

    useEffect(() => {
        setValue("firstName", userData.firstName)
        setValue("lastName", userData.lastName)
        setValue("email", userData.email)
        setValue("password", userData.password)
        setValue("confirmPassword", userData.confirmPassword)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sendOTP]);

    return (
        <form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Create An Account</h2>

            <div className="flex flex-col md:flex-row gap-5">
                <label className={labelClass}>First Name
                    <input {...register("firstName", { required: "Pleace Enter First Name..." })} className={inputClass} />
                    {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                </label>

                <label className={labelClass}>Last Name
                    <input {...register("lastName", { required: "Pleace Enter Last Name..." })} className={inputClass} />
                    {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                </label>
            </div>

            <label className={labelClass}>Email
                <input type="email" {...register("email", {
                    required: "Pleace Enter Email...", pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
                        message: "Please enter a valid email address."
                    }
                })} className={inputClass} />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </label>

            <label className={labelClass}>Password
                <input type="password" {...register("password", {
                    required: "Pleace Enter Password...", minLength: { value: 8, message: "Password Must Be 8 Char Long" }, pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,
                        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)"
                    }
                })} className={inputClass} />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </label>

            <label className={labelClass}>Confirm Password
                <input type="password" {...register("confirmPassword", { validate: (val) => { if (!val) { return "Place Same Password..." } else if (watch("password") !== val) { return "Your password dose not match" } } })} className={inputClass} />
                {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
            </label>

            <div className="flex flex-col md:flex-row justify-between items-center">
                <span>Login</span>
                <button type="submit" className={`bg-blue-700 text-white p-2 px-4 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ${status === "loading" ? "cursor-not-allowed" : "cursor-pointer"} flex justify-center items-center gap-2`}>
                    <ClipLoader size={20} color="white" loading={status === "loading"} />
                    <div>Create Account</div>
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
