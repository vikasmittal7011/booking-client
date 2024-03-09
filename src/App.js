import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/common/Layout"
import { Home, Register } from "./pages"
import { Suspense } from "react"

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route exact path="/register" element={<Layout><Register /></Layout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
