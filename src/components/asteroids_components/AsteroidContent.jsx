import { useEffect, useState } from "react";
import AsteroidChart from "./AsteroidChart";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

function AsteroidContent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortMode, setSortMode] = useState("size");
  const [filterLevel, setFilterLevel] = useState("all");

  useEffect(() => {
    async function fetchAsteroids() {
      setLoading(true);
      setError(null);
      try {
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 6);
        const start = startDate.toISOString().split("T")[0];
        const end = today.toISOString().split("T")[0];
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const json = await res.json();
        const allAsteroids = Object.entries(json.near_earth_objects).flatMap(([date, asteroids]) =>
          asteroids.map((a) => ({ ...a, approach_date: date }))
        );
        setData(allAsteroids);
      } catch (err) {
        setError("Failed to load asteroid data");
      } finally {
        setLoading(false);
      }
    }
    fetchAsteroids();
  }, []);

  function getDangerLevel(size) {
    if (size >= 300) return { level: "Extreme", color: "#ff4c4c" };
    if (size >= 100) return { level: "High", color: "#ffa500" };
    if (size >= 50) return { level: "Moderate", color: "#ffd633" };
    return { level: "Low", color: "#66ff66" };
  }

  const filtered = filterLevel === "all"
    ? data
    : data.filter((a) => getDangerLevel(a.estimated_diameter.meters.estimated_diameter_max).level.toLowerCase() === filterLevel);

  let topAsteroids = [];

  if (sortMode === "size") {
    topAsteroids = [...filtered].sort((a, b) => {
      const sizeA = a.estimated_diameter.meters.estimated_diameter_max;
      const sizeB = b.estimated_diameter.meters.estimated_diameter_max;
      return sizeB - sizeA;
    }).slice(0, 10);
  } else if (sortMode === "distance") {
    topAsteroids = [...filtered].sort((a, b) => {
      const distA = parseFloat(a.close_approach_data[0].miss_distance.kilometers);
      const distB = parseFloat(b.close_approach_data[0].miss_distance.kilometers);
      return distA - distB;
    }).slice(0, 10);
  }

  const sortedFiltered = [...filtered].sort((a, b) => new Date(a.approach_date) - new Date(b.approach_date));

  const topAsteroidIds = new Set(topAsteroids.map(a => a.id));

  const chartData = sortedFiltered
    .filter(a => topAsteroidIds.has(a.id))
    .map((asteroid) => {
      const size = asteroid.estimated_diameter.meters.estimated_diameter_max;
      const distance = parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers);
      const shortName = asteroid.name.length > 12 ? asteroid.name.slice(0, 12) + "…" : asteroid.name;
      return { name: shortName, size, distance, value: sortMode === "size" ? size : distance };
    });

  return (
    <div className="asteroid_wrapper">
      <div className="asteroid_header">
        <h1>🪨 Near-Earth Asteroids (Past 7 Days)</h1>
        <div className="asteroid_counter">
          Total Asteroids (Past 7 Days): {data.length}
        </div>
      </div>

      <div className="sort_selector">
        <label>Sort by: </label>
        <select value={sortMode} onChange={(e) => setSortMode(e.target.value)}>
          <option value="size">Largest First</option>
          <option value="distance">Closest First</option>
        </select>

        <label style={{ marginLeft: "1rem" }}>Filter Danger: </label>
        <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}>
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
          <option value="extreme">Extreme</option>
        </select>
      </div>

      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin fa-2x"></i>
          <p>Loading asteroid data...</p>
        </div>
      ) : error ? (
        <div className="errorState">
          <p>{error}</p>
        </div>
      ) : filtered.length > 0 ? (
        <>
          <AsteroidChart data={chartData} getDangerLevel={getDangerLevel} sortMode={sortMode} />
          <div className="asteroid_list">
            {sortedFiltered.map((asteroid) => {
              const size = asteroid.estimated_diameter.meters.estimated_diameter_max;
              const danger = getDangerLevel(size);
              const isInChart = topAsteroids.some((top) => top.id === asteroid.id);
              return (
                <div key={asteroid.id} className={`asteroid_card ${isInChart ? 'highlight_card' : ''}`}>
                  <h2>{asteroid.name}</h2>
                  <p>Date: {asteroid.approach_date}</p>
                  <p>Diameter: {size.toFixed(1)} m</p>
                  <p>Distance: {parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toLocaleString()} km</p>
                  <p>Speed: {parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toLocaleString()} km/h</p>
                  <p style={{ color: danger.color, fontWeight: "bold" }}>Danger: {danger.level}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p>No near-earth asteroids detected in past 7 days!</p>
      )}
    </div>
  );
}

export default AsteroidContent;
