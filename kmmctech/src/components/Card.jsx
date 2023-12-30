/* eslint-disable react/prop-types */
function Card({ product }) {
    return (
        <section className="card__wrapper">
            <div className="card__image">
                {
                    product.productImages &&
                    <img src={product.productImages.original} alt={product.title} />
                }
            </div>
            <div className="card__body">
                <h2>{product.productId}</h2>
                <p title={product.title}>{product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title}</p>
                <p className="price">₹{product.price.toLocaleString()}</p>
            </div>
        </section>
    )
}

export default Card