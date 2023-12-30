/* eslint-disable react/prop-types */
import { MdArrowForwardIos } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
function Catelog({ documents }) {
    return (
        <div className="catalog__wrapper">
            {
                documents.map(doc =>
                    Object.entries(doc).map(([key, val]) =>
                        <>
                            <h1 >{key}</h1>
                            <br />
                            <div className="files">
                                <div className="file__container">
                                    <div>
                                        <VscFilePdf className="pdf" color="#1D9ADD" size={25} />
                                        <p className="file__name">{val.fileName}</p>
                                    </div>
                                    <div className="download-link">

                                        <a href={val.link} className="file-download link" download>Download <MdArrowForwardIos /></a>
                                    </div>

                                </div>
                            </div>
                        </>

                    )
                )
            }
        </div>
    )
}

export default Catelog