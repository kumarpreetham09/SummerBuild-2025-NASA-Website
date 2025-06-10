import { useEffect, useState } from "react"
import Footer from "./components/apod_components/Footer"
import BGImage from "./components/apod_components/BGImage"
import SideBar from "./components/apod_components/SideBar"
import Navbar from "./components/Navbar"

// Load API key from .env
const API_KEY = import.meta.env.VITE_NASA_API_KEY

function App() {
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
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin fa-2x"></i>
          <p>Loading NASA data...</p>
        </div>
      ) : data ? (
        <BGImage data={data} />
      ) : (
        <div className="errorState">
          <p>Failed to load NASA data. Please check your API key.</p>
        </div>
      )}

      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}

      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  )
}

export default App
