/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { MdClose } from "react-icons/md";

function FullScreen({ imageUrl, blocked, setBlocked }) {
    console.log(imageUrl, "imgurl")
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className='full-screen' style={{ display: blocked ? "flex" : "none" }}>
            <MdClose className="close-btn" onClick={() => setBlocked(false)} size={30} />
            <div className="image__container">
                <img src={imageUrl} alt={imageUrl} />
            </div>
        </div>
    )
}

export default FullScreen