import { useState } from "react";

function Contact() {
    const [serialNumber, setSerialNumber] = useState(null);
    const [productDetails, setProductDetails] = useState([]);
    const fetchProductDetails = async (serialNumber) => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/warranty/${serialNumber}`
            );
            const data = await response.json();
            console.log(data);
            setProductDetails(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="contact__wrapper">
            <div className="contact__hero">
                <div className="img__overlay">
                    <p className="img__text">customer service</p>
                </div>
                <img
                    src="https://www.v7world.com/media/service_banner.jpg"
                    className=""
                    alt="contact us"
                />
            </div>
            <div className="contact__detials">
                <div>
                    <p className="fs-20">
                        At V7 we’re committed to delivering high quality products; however
                        even high quality products can sometimes encounter issues. We want
                        to ensure that you are completely satisfied with your product
                        purchase, so if you encounter a problem, our technical support team
                        makes service and support easy.
                    </p>
                </div>
                <div>
                    <p className="fs-lg">Technical Support</p>
                    <p className="fs-16">
                        Our tech support team is here to help. Our staff of product experts
                        can help to troubleshoot issues or provide instructions if the
                        product needs to be returned.
                    </p>
                    <br />
                    <p className="fs-16">
                        For fastest response – send us an email:{" "}
                        <a href="mailto:techsupport@v7-world.com">
                            techsupport@v7-world.com
                        </a>
                    </p>
                    <p className="fs-16">
                        We're also available Monday through Friday from 9a to 8p EST at
                        1.800.289.9686
                    </p>
                </div>
                <div>
                    <p className="fs-lg">Service and Repair</p>
                    <p className="fs-16">
                        Most issues are easily handled over the phone or by e-mail. However,
                        if the call center is unable to resolve your problem over the phone,
                        they will coordinate service by issuing a return or repair material
                        authorization (RMA). Service and repair differ from product to
                        product– the call center agent will instruct you how to package the
                        defective unit and send it to the designated service center for
                        repair.
                    </p>
                </div>
                <div>
                    <p className="fs-lg">Check Warranty</p>
                    <input
                        className="search__box"
                        placeholder="Enter Serial No"
                        onChange={(e) => setSerialNumber(e.target.value)}
                    />
                    <br />
                    <br />
                    <button
                        className="btn-search"
                        onClick={() => fetchProductDetails(serialNumber)}
                    >
                        Search
                    </button>
                </div>
                <div>
                    {productDetails.map((product) => (
                        <div key={product._id} className="warranty__details">
                            <p>
                                <span className="prod__header">Title: </span>
                                <span className="prod__info">{product.productInfo.title}</span>
                            </p>
                            <p>
                                <span className="prod__header">Model: </span>
                                <span className="prod__info">{product.productInfo.productId}</span>
                            </p>
                            <p>
                                <span className="prod__header">Start Date: </span>
                                <span className="prod__info">{product.startDate}</span>
                            </p>
                            <p>
                                <span className="prod__header">End Date: </span>
                                <span className="prod__info">{product.endDate}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;
