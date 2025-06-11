import { useEffect, useState } from "react"
import Curiosity_Carousel from "../components/mars_components/Curiosity_Carousel";
import Mars_Container from "../components/mars_components/Mars_Container";
import Perseverance_Carousel from "../components/mars_components/Perseverance_Carousel";
import NavBar from "../components/Navbar";

// Load API key from .env
const API_KEY = import.meta.env.VITE_NASA_API_KEY

function Mars() {
      const [curdata, setCurData] = useState(null)
      const [predata, setPreData] = useState(null)
      const [insdata, setInsData] = useState(null)


  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function fetchCurAPIData() {
      try {
        const curManifestRes = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${API_KEY}`)
        const curManifestData = await curManifestRes.json()
        const curLatestDate = curManifestData.photo_manifest.max_date
        const curUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${curLatestDate}&api_key=${API_KEY}`
        const curRes = await fetch(curUrl)
        if (!curRes.ok) throw new Error(`API error: ${curRes.status}`)
        const curApiData = await curRes.json()
        setCurData(curApiData)
        console.log('Fetched from API')
        console.log('DATA',curdata.photos)
      } catch (err) {
        console.error("Error fetching NASA API:", err.message)
      } finally {
        setLoading(false)
      }
    }


    async function fetchPreAPIData() {
      try {
        const preManifestRes = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/perseverance?api_key=${API_KEY}`)
        const preManifestData = await preManifestRes.json()
        const preLatestDate = preManifestData.photo_manifest.max_date
        const preUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=${preLatestDate}&api_key=${API_KEY}`
        const preRes = await fetch(preUrl)
        if (!preRes.ok) throw new Error(`API error: ${preRes.status}`)
        const preApiData = await preRes.json()
        setPreData(preApiData)
        // console.log('Fetched from API')
        // console.log('DATA',preManifestRes)
      } catch (err) {
        console.error("Error fetching NASA API:", err.message)
      } finally {
        setLoading(false)
      }
    }


    
    fetchCurAPIData()
    fetchPreAPIData()
  }, [])




  return (
    <>
    <NavBar></NavBar>
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin fa-2x"></i>
          <p>Loading NASA data...</p>
        </div>
      ) : curdata ? (
        <Curiosity_Carousel data={curdata.photos} />
      ) : (
        <div className="curErrorState">
          <p>Failed to load NASA data. Please check your API key.</p>
        </div>
      )
      }

      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin fa-2x"></i>
          <p>Loading NASA data...</p>
        </div>
      ) : predata ? (
        <Perseverance_Carousel data={predata.photos} />
      ) : (
        <div className="perErrorState">
          <p>Failed to load NASA data. Please check your API key.</p>
        </div>
      )}
      <Mars_Container></Mars_Container>
    </>
  )
}

export default Mars
