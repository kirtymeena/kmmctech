/* eslint-disable react/prop-types */

import { useEffect } from "react"

function FullScreen({ imageUrl }) {
    console.log(imageUrl,"imgurl")
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div className='full-screen'>
            
            <img src={imageUrl} alt={imageUrl} />

        </div>
    )
}

export default FullScreen