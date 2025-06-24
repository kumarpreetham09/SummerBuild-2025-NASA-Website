import { useEffect, useState } from "react";

function Earth_Timelapse({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [captureTimes, setCaptureTimes] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      const images = data.slice(0, 30).map((item) => {
        const [year, month, day] = item.date.split(" ")[0].split("-");
        const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${item.image}.png`;
        return imageUrl;
      });

      const times = data.slice(0, 30).map((item) => item.date.split(" ")[1]);
      const fullDate = data[0].date.split(" ")[0];

      setPreloadedImages(images);
      setCaptureTimes(times);
      setCurrentDate(fullDate);
    }
  }, [data]);

  useEffect(() => {
    if (preloadedImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % preloadedImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [preloadedImages]);

  if (preloadedImages.length === 0) {
    return <p>Loading timelapse...</p>;
  }

  return (
    <>
      <div className="date_top">{currentDate}</div>
      <div className="earth_timelapse">
        <img src={preloadedImages[currentIndex]} alt="Earth" />
      </div>
      <div className="earth_frame_counter">
        Time: {captureTimes[currentIndex]}
      </div>
    </>
  );
}

export default Earth_Timelapse;
