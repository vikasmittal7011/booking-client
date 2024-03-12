import { lazy } from "react";

const Home = lazy(() => import("./Home"))
const Register = lazy(() => import("./Register"))
const Login = lazy(() => import("./Login"))
const MyHotels = lazy(() => import("./MyHotels"))
const AddHotel = lazy(() => import("./AddHotel"))
const HotelDetail = lazy(() => import("./HotelDetail"))
const EditHotel = lazy(() => import("./EditHotel"))

export { Home, Register, Login, MyHotels, AddHotel, HotelDetail, EditHotel }