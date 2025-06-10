function Perseverance_Carousel(props) {
    const { data } = props
    return(
        <>
        <div className="perseverance_title">PERSEVERANCE</div>
        <div>
            <img src={data} className="perseverance_carousel"></img>
        <div className="perseverance_photo_desc">Hello this is a description of the image above</div>
        
        </div>
        </>
    )
}

export default Perseverance_Carousel