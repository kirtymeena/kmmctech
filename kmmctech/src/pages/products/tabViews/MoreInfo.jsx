/* eslint-disable react/prop-types */
import { Divider } from 'primereact/divider';

function MoreInfo({ moreInfo }) {
    let leftData;
    let rightData;
    if (moreInfo.length > 5) {
        const dividerData = Math.floor(moreInfo.length / 2)
        leftData = moreInfo.slice(0, dividerData)
        rightData = moreInfo.slice(dividerData + 1,)
    }
    else {
        leftData = moreInfo
    }


    const rightSpecs = () => {
        return (
            rightData && rightData.map((data) =>
                Object.keys(data).map(key =>
                    <div key={key} style={{ width: "100%" }}>
                        <h2 className='header-top'>{key}</h2>
                        <ul className='inner__specs'>

                        </ul>
                    </div >
                )
            )
        )
    }
    console.log(leftData, rightData)
    return (
        <div className='specs__wrapper'>
            <div className='specs__left'>
                {
                    leftData.map((data) =>
                        Object.keys(data).map(key =>
                            <div key={key} style={{ width: "100%" }}>
                                <h2 className='header-top'>{key}</h2>
                                <ul className='inner__specs'>
                                    {
                                        Object.entries(data[key]).map(([specKey, specVal]) =>
                                            <li key={specKey}>
                                                <p key={specKey} ><span className='key-bold'>{specKey}</span>: {specVal}</p>
                                            </li>

                                        )
                                    }
                                </ul>
                            </div>
                        )
                    )
                }
            </div>
            <div className='divider'>
                <Divider layout="vertical" style={{ border: "2px solid" }} />
            </div>
            <div className='specs__right'>
                {
                    rightData && rightData.map((data) =>
                        Object.keys(data).map(key =>
                            <div key={key} style={{ width: "100%" }}>
                                <h2 className='header-top'>{key}</h2>
                                <ul className='inner__specs'>
                                    {
                                        Object.entries(data[key]).map(([specKey, specVal]) =>

                                            <li key={specKey}>
                                                <p key={specKey}><span className='key-bold'>{specKey}</span>:
                                                    {Array.isArray(specVal) ?
                                                        <ul className='inner__list'>
                                                            {
                                                                specVal.map(val =>
                                                                    <li key={val}>{val}</li>
                                                                )
                                                            }</ul>
                                                        :
                                                        <span> {specVal}</span>
                                                        }</p>
                                            </li>

                                        )
                                    }
                                </ul>
                            </div>
                        )
                    )
                }
            </div>
        </div >
    )
}

export default MoreInfo