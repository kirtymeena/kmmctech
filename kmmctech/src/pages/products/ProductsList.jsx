import { useLocation } from "react-router-dom"
import { useFetchProductsByCategoryQuery } from "../../store/api-slice"
import { useEffect } from "react"
import Card from "../../components/Card"
import { Link } from "react-router-dom"
import Filters from "../filters/Filters"
import Loading from "../../components/Loading"
function ProductsList() {
    const location = useLocation()
    // const [filterOptions, setFilterOptions] = useState([])
    const category = location.pathname.split("/").length === 4 ? location.pathname.split("/")[2] + '/' + location.pathname.split("/")[3] : location.pathname.split("/")[2]
    const { data, isLoading } = useFetchProductsByCategoryQuery(category)


    useEffect(() => {
        console.log("Cat", data)
    })
    // const filteringOptions = extractFilterOptions(data);
    function extractFilterOptions(products) {
        const filterOptions = {};


        products.forEach((product) => {
            // Iterate through technical specifications
            product.technicalSpecification.forEach((spec) => {
                // Iterate through items in each specification
                spec.items.forEach((item) => {
                    if (item.inFilter) {
                        // Check if the key already exists in filterOptions
                        if (!filterOptions[item.key]) {
                            // If not, create a new array with the value
                            filterOptions[item.key] = [item.value];
                        } else {
                            // If yes, push the value to the existing array
                            if (!filterOptions[item.key].includes(item.value)) {
                                filterOptions[item.key].push(item.value);
                            }
                        }
                    }
                });
            });
        });
        setFilterOptions(filterOptions)
        console.log(filterOptions)
        return filterOptions;
    }


    // const onFilterSelection = (e) => {
    //     const filterName = e.target.name;

    //     setSelectedFilters([...selectedFilters,{label:""}])
    // }

    const displayImages = () => {
        if (location.pathname.replace(/%20/g, " ").includes("Interactive Flat Panel")) {
            return (
                <div>
                    <p className="float-text">Interactive Flat Panel</p>
                    <img src="https://www.v7world.com/media/catalog/category/ifp_1.jpg" alt="product-hero" />
                </div>
            )
        }
        else if (location.pathname.replace(/%20/g, " ").includes("Camera")) {
            return <img src="https://www.v7world.com/media/wysiwyg/CPBX16-01.png" alt="product-hero" />
        }
        else if (location.pathname.replace(/%20/g, " ").includes("Personal Computers")) {
            return <img src="https://www.v7world.com/media/wysiwyg/CPBX16-01.png" alt="product-hero" />
        }
        else if (location.pathname.replace(/%20/g, " ").includes("Ops")) {
            return <img src="https://www.v7world.com/media/wysiwyg/CPBX16-01.png" alt="product-hero" />
        }
    }
    return (
        !isLoading ?
            <div className="products__wrapper">

                <div className="products__hero">
                    {displayImages()}
                </div>
                <div className="products__body">
                    {/* <div className="products__filter">
                    <Filters options={filterOptions} onFilterSelection={onFilterSelection} />
                </div> */}
                    <div className="product__container">
                        <div className="products__list">
                            {
                                data && data.map(product =>
                                    <>
                                        <Link to={`/product/${product._id}`} className="link color-inherit"><Card product={product} /></Link >
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div > :
            <Loading />
    )
}

export default ProductsList