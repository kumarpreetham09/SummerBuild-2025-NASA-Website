import { useEffect, useState } from "react"
import Earth_Container from "../components/earth_components/Earth_Container"
import Navbar from "../components/Navbar"

// Load API key from .env
const API_KEY = import.meta.env.VITE_NASA_API_KEY


function Earth() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(prev => !prev)
  }

  useEffect(() => {
    async function fetchAPIData() {

      try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        const res = await fetch(url)

        if (!res.ok) throw new Error(`API error: ${res.status}`)

        const apiData = await res.json()
        setData(apiData)
        console.log('Fetched from API')
      } catch (err) {
        console.error("Error fetching NASA API:", err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAPIData()
  }, [])

  return (
    <>
    <Navbar></Navbar>
    <Earth_Container></Earth_Container>
    </>
  )
}

export default Earth
