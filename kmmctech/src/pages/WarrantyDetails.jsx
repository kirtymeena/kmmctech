import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function WarrantyDetails() {
    const params = useLocation()
    console.log("p", params)
    return (
        <div className="w__wrapper">
            <div className="w__header">
                <p>Check your warranty</p>
            </div>
            <div className="w__form">
                <form className="form__wrapper">
                    <p className="form__header">Coverage Details</p>
                    <br />
                    <hr className="line" />

                </form>
            </div>
        </div>
    )
}

export default WarrantyDetails