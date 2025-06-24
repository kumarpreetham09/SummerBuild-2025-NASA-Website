import { useEffect, useState } from "react";
import Earth_Container from "../components/earth_components/Earth_Container";
import Navbar from "../components/Navbar";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

function Earth() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMostRecentEarthImages() {
      setLoading(true);
      setError(null);
      try {
        let found = false;
        const today = new Date();
        for (let i = 0; i < 30; i++) {
          const candidate = new Date(today);
          candidate.setDate(today.getDate() - i);
          const year = candidate.getFullYear();
          const month = String(candidate.getMonth() + 1).padStart(2, '0');
          const day = String(candidate.getDate()).padStart(2, '0');
          const candidateDate = `${year}-${month}-${day}`;

          const url = `https://api.nasa.gov/EPIC/api/natural/date/${candidateDate}?api_key=${API_KEY}`;
          const res = await fetch(url);
          if (res.ok) {
            const apiData = await res.json();
            if (apiData.length > 0) {
              setData(apiData.map(item => ({ ...item, fetchDate: candidateDate })));
              found = true;
              break;
            }
          }
        }

        if (!found) {
          setError("No Earth images available in recent days.");
        }
      } catch (err) {
        console.error("Error fetching NASA EPIC API:", err.message);
        setError("Failed to load Earth images.");
      } finally {
        setLoading(false);
      }
    }

    fetchMostRecentEarthImages();
  }, []);

  return (
    <>
      <Navbar />
      <Earth_Container data={data} loading={loading} error={error} />
    </>
  );
}

export default Earth;
