function Curiosity_Carousel(props) {
    const { data } = props
    return(
        <>
        <div className="curiosity_title">CURIOSITY</div>
        <div>
            <img src={data} className="curiosity_carousel"></img>
        <div className="curiosity_photo_desc">Hello this is a description of the image above</div>
        </div>
        </>
    )
}

export default Curiosity_Carousel