import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the child routes dynamically */}
      <Footer />
    </>
  )
}

export default Home
