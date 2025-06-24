function Earth_ImageCard({ item }) {
  if (!item || !item.date || !item.image) return null;

  const dateParts = item.date.split(" ")[0].split("-");
  const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${dateParts[0]}/${dateParts[1]}/${dateParts[2]}/png/${item.image}.png`;

  const cleanedCaption = item.caption
    .replace("This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft", "")
    .trim();

  return (
    <div className="earth_card">
      <img src={imageUrl} alt="Earth" />
      <p>{item.date}</p>
      {cleanedCaption && <p>{cleanedCaption}</p>}
    </div>
  );
}

export default Earth_ImageCard;
