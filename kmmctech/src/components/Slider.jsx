import { useEffect, useRef, useState } from "react"
import { useFetchCarouselDataQuery } from "../store/api-slice";
import { Link } from "react-router-dom";

import { MdArrowForwardIos } from "react-icons/md";
function Slider() {
    const scrollLeft = useRef(null)
    const [slidLength, setSlideLength] = useState(1);
    const { data } = useFetchCarouselDataQuery()

    const slide = () => {
        if ((slidLength > 0 || slidLength === 1) && scrollLeft !== null) {
            setSlideLength(slidLength - 1)
            scrollLeft.current.scrollLeft -= window.innerWidth

        }
        if (slidLength === 0 && scrollLeft !== null) {
            setSlideLength(slidLength + 1)
            scrollLeft.current.scrollLeft += window.innerWidth

        }
    }
    useEffect(() => {
        let interval;
        interval = setInterval(slide, 3000)
        console.log("data", data)
        return () => clearInterval(interval)
    })

    return (
        <div className="slider__wrapper">
            <div className="slider__items" ref={scrollLeft}>

                {
                    data && data.map((sliderData, idx) =>
                        <div key={sliderData._id}>
                            <img className="sliderImg1" src={sliderData.imageUrl} loading="lazy"/>
                            <div className="home__links">
                                {
                                    idx === 0 ? <Link className="link slider__link" to="/products/Interactive Flat Panel/For Education">Education Solution <MdArrowForwardIos className="arrow " /></Link> : <Link to="products/Interactive Flat Panel/For Business" className="slider__link">Business Solution <MdArrowForwardIos className="arrow" /></Link>
                                }
                            </div>
                        </div>

                    )
                }
            </div>
            {/* <div className="slider__navigation">
                {
                    data && data.map(() =>
                        <button className="slider__btn"></button>
                    )
                }
            </div> */}
        </div>
    )
}

export default Slider