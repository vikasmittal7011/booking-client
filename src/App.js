import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/common/Layout"
import { AddHotel, Booking, Confirm, EditHotel, Failer, Home, HotelDetail, Login, MyHotels, Register } from "./pages"
import { Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserDataAsync } from "./features/user/userSlice"
import { selectauth } from "./features/auth/authSlice"
import Protected from "./components/common/Protected"
import Loading from "./components/common/Loading"

const App = () => {

  const { registerSuccess, loginSuccess, logoutSuccess } = useSelector(selectauth)

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUserDataAsync());
    }, 1000);
  }, [dispatch, loginSuccess, registerSuccess, logoutSuccess]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />

          <Route exact path="/login/:token?" element={<Layout><Login /></Layout>} />

          <Route exact path="/register" element={<Layout><Register /></Layout>} />

          <Route exact path="/hotel/:id?" element={<Layout><HotelDetail /></Layout>} />

          <Route exact path="/hotel/:id?/booking" element={<Protected><Layout><Booking /></Layout></Protected>} />

          <Route exact path="/my-hotel" element={<Protected><Layout><MyHotels /></Layout></Protected>} />

          <Route exact path="/add-hotel" element={<Protected><Layout><AddHotel /></Layout></Protected>} />

          <Route exact path="/hotel/edit/:id?" element={<Protected><Layout><EditHotel /></Layout></Protected>} />

          <Route path="/failer/:message" exact element={<Failer />}></Route>

          <Route path="/confirm/:id" exact element={<Confirm />}></Route>

        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}

export default App
