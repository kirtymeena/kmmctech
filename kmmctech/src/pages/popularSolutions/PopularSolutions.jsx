import PSsolutionCard from "../../components/PSsolutionCard"

function PopularSolutions() {
    const products = [
        {
            id: 1,
            title: "Interactive Flat Panel",
            image: "https://www.v7world.com/media/wysiwyg/ifp_home.png",
            navigationUrl: "/products/Interactive Flat Panel"
        },
        {
            id: 2,
            title: "Cameras",
            image: "https://www.v7world.com/media/wysiwyg/headset_home.png",
            navigationUrl: "/products/Camera"


        },
        {
            id: 3,
            title: "Personal Computers",
            image: "https://www.v7world.com/media/wysiwyg/bags_home.png",
            navigationUrl: "/products/Personal Computers"
        },
        {
            id: 4,
            title: "Ops",
            image: "https://www.v7world.com/media/wysiwyg/cables_home.png",
            navigationUrl: "/products/Ops"
        },
    ]
    return (
        <div className='ps__wrapper container'>
            <div className='ps__header'>
                <h2>POPULAR SOLUTIONS</h2>
            </div>
            <div className='ps__body'>
                <PSsolutionCard products={products} />
            </div>
        </div>
    )
}

export default PopularSolutions