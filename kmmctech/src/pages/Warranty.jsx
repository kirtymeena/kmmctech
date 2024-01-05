/* eslint-disable react/prop-types */
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
function Warranty({ baseUrl }) {
    const navigate = useNavigate()
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [error, setError] = useState(null)
    const [productDetails, setProductDetails] = useState([]);
    const [serialNumber, setSerialNumber] = useState(null)

    const countries = [
        { name: "India" },
        { name: "USA" },
        { name: "UK" },
        { name: "Austrilia" },
        { name: "Japan" }
    ]

    const fetchProductDetails = async (serialNumber) => {
        console.log(serialNumber)
        try {
            const response = await fetch(
                `${baseUrl}/warranty/${serialNumber}`
            );
            const data = await response.json();
            if (!response.ok) {
                throw Error(data.message)
            }
            console.log(data);
            setProductDetails(data);
            setTimeout(() => {
                navigate(`/warranty/product/${serialNumber}`, { state: data })

            }, 300)

        } catch (err) {
            console.log(err);
            setError("Invalid Serial Number")
        }
    };

    const handleSubmit = (e) => {
        console.log(serialNumber)
        e.preventDefault()
        fetchProductDetails(serialNumber);
        if (selectedCountry.name !== "India") {
            setError("invalid Country")
        }
        else {
            setError(null)
            // if (productDetails.length > 0) {

            // }
        }
    }
    return (
        <div className="w__wrapper">
            <div className="w__header">
                <p>Check your warranty</p>
            </div>
            <div className="w__form">
                <form className="form__wrapper" onSubmit={handleSubmit}>
                    <p className="form__header">Single Product</p>
                    <br />
                    <hr className="line" />
                    <div className="form__group">
                        <label htmlFor="serial number" className="label">
                            Country/Region of purchase
                        </label>
                        <br />
                        <Dropdown required value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                            placeholder="Select a City" style={{ width: "100% !important" }} className="w-full" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="serial number" className="label">
                            Serial number
                        </label>
                        <br />
                        <input required name="serial number" className="group__input" onChange={(e) => { setSerialNumber(e.target.value); console.log(e.target.value) }} />

                    </div>
                    <div>
                        <small style={{ color: "#f43f5e" }}>{error !== null && error}</small>
                        <br />
                        <button className='btn-submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Warranty