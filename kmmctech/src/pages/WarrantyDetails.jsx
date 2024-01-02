import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import moment from 'moment'

function WarrantyDetails() {
    const params = useLocation()
    const [data, setData] = useState(params.state[0])
    useEffect(() => {
        setData(params.state[0])
        console.log(new Date(params.state[0].endDate).toISOString())
    }, [params])

    return (
        data ?
            <div className="w__wrapper">
                <div className="w__header">
                    <p>Check your warranty</p>
                </div>
                <div className="w__form">
                    <form className="form__wrapper">

                        <p className="form__header">Coverage Details</p>
                        <br />
                        <hr className="line" />
                        <div>
                            {new Date(data.endDate) < new Date() ? <img className='expired-logo' src="https://c8.alamy.com/comp/ERDGHF/vector-illustration-of-red-expired-stamp-on-white-background-ERDGHF.jpg" />
                                : ""}
                        </div>
                        <div className='coverage__wrapper'>
                            <div className='coverage__product'>
                                <div className='prod__image'>
                                    <img src={data.productInfo.serialNumber} />
                                </div>
                                <div className='coverage__info'>
                                    <p className='converage__title'>{data.productInfo.title}</p>
                                    <div className='coverage__left'>
                                        <p className='coverage__text'><span>Serail Number: </span> <span>{data.productInfo.productId}</span></p>
                                    </div>
                                    <div className='coverage__right'>
                                        <p className='coverage__text'><span>Product: </span><span>{data.productInfo.productId}</span></p>
                                    </div>
                                </div>
                            </div>
                            <hr className="line" />
                            <div>
                                <p className='additional__title'>Additional Information</p>
                            </div>
                            <div className='additional__info'>
                                <table className='info__table'>
                                    <tr>
                                        <td><strong>Coverage Type</strong></td>
                                        <td>Onsite</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Status</strong></td>
                                        <td>{new Date(data.endDate) < new Date() ? "Expired" : "In Warranty"}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Start Date</strong></td>
                                        <td>{moment(new Date(data.startDate).toISOString()).format("MMM Do YY")}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>End Date</strong></td>
                                        <td>{moment(new Date(data.endDate).toISOString()).format("MMM Do YY")}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </div> :
            <Loading />
    )
}

export default WarrantyDetails