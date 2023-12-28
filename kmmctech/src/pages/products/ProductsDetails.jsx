import { useEffect, useState } from 'react'
import { useFetchProductByIdQuery } from '../../store/api-slice'
import { useParams } from "react-router-dom"
import { TabView, TabPanel } from 'primereact/tabview';
import MoreInfo from './tabViews/MoreInfo';
import Catelog from './tabViews/Catalog';
import ReactImageMagnify from 'react-image-magnify';
function ProductsDetails() {
    const params = useParams()
    console.log(params)
    const { data: product, error, isFetching } = useFetchProductByIdQuery(params.id)

    const [selectedImage, setSelectedImage] = useState(null)

    const getDefaultImage = (product) => {
        setSelectedImage(product.productImages.original)
    }
    useEffect(() => {
        if (product) {
            getDefaultImage(product)
        }
        console.log(product)
        // console.log(product.productImages, "img")
    }, [product])
    return (
        !isFetching && !error && product &&
        <div className='pd__main container'>
            <div className='pd__wrapper '>
                <div className='product__images'>
                    <div className='current__image'>
                        {/* <img src={selectedImage !== null ? selectedImage : product.productImages.original} alt={product.title} /> */}
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: product.title,
                                // isFluidWidth: true,
                                width: 600,
                                height: 500,
                                src: selectedImage,
                                imageClassName: "width:200px;height:200px",
                                imageStyle: { minWidth: "100px", height: "100px" }
                            },
                            largeImage: {
                                src: selectedImage,
                                width: 1200,
                                height: 1800
                            }
                        }} />
                    </div>
                    <div className='images__list'>
                        <>
                            {
                                product.productImages.collection.map(collection =>
                                    <div onClick={() => setSelectedImage(collection)} key={collection}>
                                        <img src={collection} alt={product.title} />

                                    </div>
                                )
                            }

                        </>

                    </div>
                </div>
                <div className='pd__body'>
                    <div className='pd__productId'>

                        {product.productId}

                    </div>
                    <div className='pd__title'>
                        {product.title}
                    </div>
                    <div className='pd__price price'>
                        ₹{product.price.toLocaleString()}
                    </div>
                    <div className='pd__description'>
                        {product.description}
                    </div>
                </div>
            </div>
            <div className='pd__tabs'>
                <TabView>
                    <TabPanel header="More Information">
                        <MoreInfo moreInfo={product.technicalSpecification} />
                    </TabPanel>
                    <TabPanel header="FAQs">
                        {
                            product.faq.length === 0 ? <h1>No FAQ's are present</h1> : "there are FAQ"
                        }
                    </TabPanel>
                    <TabPanel header="Files">
                        <Catelog documents={product.documents} />
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default ProductsDetails