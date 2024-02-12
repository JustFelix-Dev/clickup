import { Tab } from "@mui/material"
import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import FireWorks from "../components/FireWorks"
import AllTeams from "../components/AllTeams"
import Award from "../components/Award"
import TeamLookOut from "../components/TeamLookOut"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
     <>
      <Navbar/>
    <Hero/>
    <About/>
    <Tab/>
    <FireWorks/>
    <AllTeams/>
    <Award/>
    <TeamLookOut/>
    <Footer/>
     </>
  )
}

export default LandingPage
