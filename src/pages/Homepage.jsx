import { useEffect, useState } from "react"
import HomepageImage from "../components/homepage_components/Homepage_Image"
import Navbar from "../components/Navbar"
import { Navigate } from "react-router-dom"

// Load API key from .env

function Homepage() {

  return (
    <>
    <Navbar></Navbar>
<HomepageImage></HomepageImage>
</>
  )
}

export default Homepage
