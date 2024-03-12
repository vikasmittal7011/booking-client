import { lazy } from "react";

const Home = lazy(() => import("./Home"))
const Register = lazy(() => import("./Register"))
const Login = lazy(() => import("./Login"))
const MyHotels = lazy(() => import("./MyHotels"))
const AddHotel = lazy(() => import("./AddHotel"))
const HotelDetail = lazy(() => import("./HotelDetail"))

export { Home, Register, Login, MyHotels, AddHotel, HotelDetail }