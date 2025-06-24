import { useState } from "react";
import NavBar from "../components/Navbar";
import FunFactsDisplay from "../components/funfacts_components/FunFactsDisplay";
import FunFactsButtons from "../components/funfacts_components/FunFactsButtons";

function FunFacts() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  return (
    <>
      <NavBar />
      <div className="fun_facts_wrapper">
        <img src="/exoplanet.png" className="background_image" alt="Background" />
        <div className="fun_facts_container">
          <div className="fun_facts_content">
            <h1>🚀 Space Fun Facts Generator</h1>
            <p>Click any button to load a fact!</p>

            <FunFactsDisplay fact={fact} image={image} loading={loading} error={error} />
            <FunFactsButtons 
              setFact={setFact} 
              setLoading={setLoading} 
              setError={setError} 
              setImage={setImage} 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FunFacts;
