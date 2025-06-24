function FunFactsButtons({ setFact, setLoading, setError, setImage }) {
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;

  async function fetchNASA() {
    setLoading(true);
    setError(null);
    setImage(null);
    try {
      const randomDate = getRandomDate();
      const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${randomDate}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`NASA API error: ${res.status}`);
      const data = await res.json();

      setFact(`${data.title}: ${data.explanation}`);

      // Always set the image with its type
      setImage({
        type: data.media_type,
        url: data.url
      });

    } catch (err) {
      console.error(err);
      setError("Failed to load NASA fact");
    } finally {
      setLoading(false);
    }
  }

  async function fetchWikipedia() {
    setLoading(true);
    setError(null);
    setImage(null);
    try {
      const categoryRes = await fetch("https://corsproxy.io/?https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Astronomy&cmlimit=50&format=json");
      const categoryData = await categoryRes.json();

      const pages = categoryData.query.categorymembers;
      if (!pages || pages.length === 0) {
        setError("No astronomy facts found.");
        return;
      }

      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      const pageTitle = encodeURIComponent(randomPage.title);

      const summaryRes = await fetch(`https://corsproxy.io/?https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitle}`);
      const summaryData = await summaryRes.json();

      setFact(`${summaryData.title}: ${summaryData.extract}`);
    } catch (err) {
      console.error(err);
      setError("Failed to load Wikipedia fact");
    } finally {
      setLoading(false);
    }
  }

  function getRandomDate() {
    const start = new Date(1995, 5, 16);
    const end = new Date();
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    return randomDate.toISOString().split('T')[0];
  }

  return (
    <div className="fun_facts_buttons">
      <button onClick={fetchNASA} className="fun_facts_button">🛰 NASA Fact</button>
      <button onClick={fetchWikipedia} className="fun_facts_button">🌌 Wiki Fact</button>
    </div>
  );
}

export default FunFactsButtons;
