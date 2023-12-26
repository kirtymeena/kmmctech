import Slider from "../components/Slider"
import PopularSolutions from "./popularSolutions/PopularSolutions"

function Home() {
    return (
        <div>
            {/* <Slider /> */}
            <div className="home__body">
                <PopularSolutions />
            </div>
        </div>
    )
}

export default Home