import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom"
function PSsolutionCard({ products }) {
    console.log(products.navigationUrl)
    useEffect(() => {
        console.log("p", products)
    })
    return (
        <div className='ps__card-wrapper'>
            <div className='ps__card-full'>
                <Link to={products[0].navigationUrl} className='link'>
                    <br />
                    <h3>{products[0].title}</h3>
                    <br />
                    <div className="view__btn">
                        View all <MdArrowForwardIos />
                    </div>
                </Link>
                <img className="ps__image" src={products[0].image} alt={products[0].title} />
            </div>
            {
                products.map((product) =>
                    <div className='ps__card' key={product.id}>
                        <Link to={product.navigationUrl} className='link'>
                            <br />
                            <h3>{product.title}</h3>
                            <br />
                            <div className="view__btn">
                                View all <MdArrowForwardIos />
                            </div>
                        </Link>
                        <img className="ps__image" src={product.image} alt={product.title} />
                    </div>
                )
            }
        </div>
    )
}
PSsolutionCard.propTypes = {
    products: PropTypes.array
}

export default PSsolutionCard