function Footer(props) {
    const { showModal, handleToggleModal, data } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>ASTRONOMY PICTURE OF THE DAY</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </footer>
    )
}

export default Footer