import { useState } from "react";

function Perseverance_Carousel(props) {
    const { data } = props;
    const [index, setIndex] = useState(0); // carousel index
    const length = data.length;

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % length);
    };

    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };

    return (
        <>
            <div className="perseverance_title">PERSEVERANCE</div>
            <div>
                <img
                    src={data[index].img_src}
                    className="perseverance_image"
                    alt="Perseverance Rover"
                />
                <div className="carousel_controls_per">
                    <p className="perseverance_photo_meta">
                    Taken by: {data[index].camera.full_name} on {data[index].earth_date}
                </p>
                <br></br>
                    <button onClick={prevImage}>← Prev</button>
                    <span>{index + 1} / {length}</span>
                    <button onClick={nextImage}>Next →</button>
                    
                </div>
            </div>
        </>
    );
}

export default Perseverance_Carousel;
