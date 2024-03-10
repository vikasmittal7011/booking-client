import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/common/Layout"
import { Home, Login, Register } from "./pages"
import { Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserDataAsync } from "./features/user/userSlice"
import { selectauth } from "./features/auth/authSlice"

const App = () => {

  const { registerSuccess, loginSuccess } = useSelector(selectauth)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDataAsync());

  }, [dispatch, loginSuccess, registerSuccess]);

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route exact path="/login" element={<Layout><Login /></Layout>} />
          <Route exact path="/register" element={<Layout><Register /></Layout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
