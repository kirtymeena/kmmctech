import { useParams, useLocation } from "react-router-dom"
import { useFetchProductsByCategoryQuery } from "../../store/api-slice"
import { useEffect } from "react"
import Card from "../../components/Card"
import Filters from "../filters/Filters"
function ProductsList(props) {
    console.log(props)
    const location = useLocation()
    const category = location.pathname.split("/").length === 4 ? location.pathname.split("/")[2] + '/' + location.pathname.split("/")[3] : location.pathname.split("/")[2]
    const { data, error, isFetching } = useFetchProductsByCategoryQuery(category)

    
    useEffect(() => {
    })
    return (
        <div className="products__wrapper">

            <div className="products__hero">
                <img src="https://www.v7world.com/media/wysiwyg/CPBX16-01.png" alt="product-hero" />
            </div>
            <div className="products__body">
                <div className="products__filter">
                    <Filters options={} />
                </div>
                <div className="products__list">
                    {
                        data && data.map(product =>
                            <>
                                <Card product={product} />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsList