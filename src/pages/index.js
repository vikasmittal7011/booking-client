import { lazy } from "react";

const Home = lazy(() => import("./Home"))
const Register = lazy(() => import("./Register"))
const Login = lazy(() => import("./Login"))
const MyHotels = lazy(() => import("./MyHotels"))
const AddHotel = lazy(() => import("./AddHotel"))
const HotelDetail = lazy(() => import("./HotelDetail"))
const EditHotel = lazy(() => import("./EditHotel"))
const Booking = lazy(() => import("./Booking"))
const Confirm = lazy(() => import("./Confirm"))
const Failer = lazy(() => import("./Failer"))

export { Confirm, Failer, Home, Register, Login, MyHotels, AddHotel, HotelDetail, EditHotel, Booking }