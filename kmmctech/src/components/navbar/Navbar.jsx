import PropTypes from "prop-types";
import logo from "../../assets/logo.jpeg";
import { MegaMenu } from "primereact/megamenu";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import _ from "lodash";

function Navbar() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [visibleDropdown, setVisibleDropdown] = useState(false)
    const [clickedArea, setClickedArea] = useState(null)
    const items = [
        // {
        //     label: "Solutions",
        //     icon: "pi pi-fw pi-video",
        //     items: [ 
            
        //         [
        //             {
        //                 label: "Eduction Solutions",
        //                 url: "/Videos",
        //                 items: [
        //                     {
        //                         label: "Classroom",
        //                         command: () => {
        //                             navigate(`/Education Solutions/Classroom`);
        //                         },
        //                     },
        //                     {
        //                         label: "Tech Labs",
        //                         command: () => {
        //                             navigate(`/Education Solutions/Tech Labs`);
        //                         },
        //                     },
        //                     {
        //                         label: "Remote Learning",
        //                         command: () => {
        //                             navigate(`/Education Solutions/Remote Learning`);
        //                         },
        //                     },
        //                     {
        //                         label: "Works with Chromebook",
        //                         command: () => {
        //                             navigate(`/Education Solutions/Works With Chromebook`);
        //                         },
        //                     },
        //                 ],
        //             },
        //         ],
        //         [
        //             {
        //                 label: "Business Solutions",
        //                 items: [
        //                     {
        //                         label: "Workspace & Cubes",
        //                         command: () => {
        //                             navigate(`/Business Solutions/Workspace & Cubes`);
        //                         },
        //                     },
        //                     {
        //                         label: "Conference Rooms",
        //                         command: () => {
        //                             navigate(`/Business Solutions/Conference Rooms`);
        //                         },
        //                     },
        //                     {
        //                         label: "Remote Working", command: () => {
        //                             navigate(`/Business Solutions/Remote Working`);
        //                         },
        //                     },
        //                     {
        //                         label: "Business Travel", command: () => {
        //                             navigate(`/Business Solutions/Business Travel`);
        //                         },
        //                     },
        //                 ],
        //             },
        //         ],
        //     ],
        // },
        {
            label: "Products",
            icon: "pi pi-fw pi-users",
            items: [
                [
                    {
                        label: (
                            <Link to="products/Interactive Flat Panel" className="prod__link">
                                Interactive Flat Panel
                            </Link>
                        ),
                        items: [
                            {
                                label: "For Education",
                                command: () => {
                                    navigate(`products/Interactive Flat Panel/For Education`);
                                },
                            },
                            {
                                label: "For Business",
                                command: () => {
                                    navigate(`products/Interactive Flat Panel/For Business`);
                                },
                            },
                        ],
                    },
                    {
                        label: (
                            <Link
                                to="products/Personal Computers"
                                className="prod__link"
                                style={{ paddingTop: "1rem" }}
                            >
                                Personal Computers
                            </Link>
                        ),
                        items: [],
                    },
                ],
                [
                    {
                        label: (
                            <Link to="products/Camera" className="prod__link">
                                Camera
                            </Link>
                        ),
                        items: [],
                    },
                ],
                [
                    {
                        label: (
                            <Link to="products/Ops" className="prod__link">
                                Ops
                            </Link>
                        ),
                        items: [],
                    },
                ],
            ],
        },
        {
            label: "About Us",
            command: () => {
                navigate(`/about-us`);
            },
        },
        {
            label: "Support",

            items: [
                [
                    {
                        label: (
                            <Link to="/support" className="prod__link">
                                Support
                            </Link>
                        ),
                        command: () => {
                            navigate(`/support`);
                        },
                        items: [
                            {
                                label: (
                                    <Link to="/support/warranty" className="prod__link">
                                        Check Warranty
                                    </Link>
                                ),
                            },
                        ],
                    },
                ],
            ],
        },
    ];
    const start = (
        <Link to="/">
            <img alt="logo" src={logo} height="40" className="mr-2"></img>
        </Link>

    );

    const end = (
        <div className="search__wrapper">

            <InputText
                placeholder="Search"
                type="text"
                onFocus={() => setVisibleDropdown(true)}
                onBlur={() => setTimeout(() => setVisibleDropdown(false), 500)}
                onChange={(e) =>
                    _.debounce(fetchFilterData(e), 500)
                }
            />
            {

                filteredData.length > 0 && visibleDropdown &&
                <div className="dropdown_result" ref={clickedArea}>
                    {
                        filteredData.map(data =>
                            <Link to={`product/${data._id}`} key={data._id} className="result__wrapper link" onClick={() => setTimeout(setVisibleDropdown(false))}>
                                <div className="result__img">
                                    <img src={data.productImages.original} alt="img" />
                                </div>
                                <div>
                                    <p className="fs-12">{data.title}</p>
                                </div>

                            </Link>
                        )
                    }
                </div>
            }
        </div >
    );

    const handleNavigation = (e) => {
        console.log(e.target.offsetParent);
    };

    async function fetchFilterData(e) {
        console.log(e.target.value)
        setSearchQuery(e.target.value);
        if (visibleDropdown === false && e.target.value.length >= 3) {
            setVisibleDropdown(true)
        }
        else {
            setVisibleDropdown(false)
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/filter?q=${e.target.value}`
            );
            const data = await response.json();
            console.log(data);
            setFilteredData(data);
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <nav className="nav__container container">
            {
                <MegaMenu
                    model={items}
                    onClick={(e) => handleNavigation(e, e.target.textContent)}
                    orientation="horizontal"
                    start={start}
                    end={end}
                    breakpoint="926px"
                    style={{
                        width: "100%",
                        backgroundColor: "inherit",
                        display: "flex",
                        gap: "1rem",
                        justifyContent:
                            window.innerWidth > 926 ? "space-between" : "space-evenly",
                        border: "none",
                    }}
                />
            }
        </nav>
    );
}

Navbar.propTypes = {
    textColor: PropTypes.string,
};
export default Navbar;
