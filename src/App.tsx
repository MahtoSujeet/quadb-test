import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviesCards from "./components/MoviesCards"
import NavBar from "./components/NavBar"
import Summary from "./components/Summary"
import BookingForm from "./components/BookingForm"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div className="text-xl">
            <MoviesCards />
          </div>
        } />
        <Route path="/summary/:id" element={<Summary />} />
        <Route path="/book/:name" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
