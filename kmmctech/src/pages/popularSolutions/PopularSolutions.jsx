import PSsolutionCard from "../../components/PSsolutionCard"

function PopularSolutions() {
    const products = [
        {
            id: 1,
            title: "Interactive Flat Panel",
            image: "https://www.v7world.com/media/wysiwyg/ifp_home.png"
        },
        {
            id: 2,
            title: "Kayboards",
            image: "https://www.v7world.com/media/wysiwyg/headset_home.png"
        },
        {
            id: 3,
            title: "Cables and Adapters",
            image: "https://www.v7world.com/media/wysiwyg/bags_home.png"
        },
        {
            id: 4,
            title: "Cables and Adapters",
            image: "https://www.v7world.com/media/wysiwyg/cables_home.png"
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