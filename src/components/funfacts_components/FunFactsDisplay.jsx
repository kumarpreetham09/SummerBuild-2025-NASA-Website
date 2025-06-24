function FunFactsDisplay({ fact, image, loading, error }) {
  return (
    <>
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin fa-2x"></i>
          <p>Loading space fact...</p>
        </div>
      ) : error ? (
        <div className="curErrorState">
          <p>{error}</p>
        </div>
      ) : fact ? (
        <div className="fun_facts_box">
          <div className="fact_content">
            {image?.type === "image" && (
              <img 
                src={image.url} 
                alt="NASA" 
                className="fun_facts_image" 
                draggable="false" 
                onContextMenu={(e) => e.preventDefault()} 
              />
            )}
            {image?.type === "video" && (
              <div className="fun_facts_video">
                <iframe 
                  src={image.url} 
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="NASA Video"
                ></iframe>
              </div>
            )}
            <div className="fact_text">{fact}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FunFactsDisplay;
