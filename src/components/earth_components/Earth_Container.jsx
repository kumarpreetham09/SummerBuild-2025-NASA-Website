import Earth_Timelapse from "./Earth_Timelapse";

function Earth_Container({ data, loading, error }) {
  return (
    <div className="earth_timelapse_wrapper">
      <div className="earth_title">🌍 NASA EPIC Earth Timelapse</div>
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin fa-2x"></i>
          <p>Loading Earth images...</p>
        </div>
      ) : error ? (
        <div className="errorState">
          <p>{error}</p>
        </div>
      ) : data.length > 0 ? (
        <Earth_Timelapse data={data} />
      ) : (
        <p>No Earth images available.</p>
      )}
    </div>
  );
}

export default Earth_Container;
