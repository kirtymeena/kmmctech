import PropTypes from "prop-types";
import logo from "../../assets/logo.jpeg";
// import { useFetchNavItemsQuery } from "../../store/api-slice";
import { MegaMenu } from "primereact/megamenu";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    const items = [
        {
            label: "Solutions",
            icon: "pi pi-fw pi-video",
            items: [
                [
                    {
                        label: "Eduction Solutions",
                        url: "/Videos",
                        items: [
                            {
                                label: "Classroom",
                                command: () => {
                                    navigate(`/Education Solutions/Classroom`);
                                },
                            },
                            {
                                label: "Tech Labs",
                                command: () => {
                                    navigate(`/Education Solutions/Tech Labs`);
                                },
                            },
                            {
                                label: "Remote Learning",
                                command: () => {
                                    navigate(`/Education Solutions/Remote Learning`);
                                },
                            },
                            {
                                label: "Works with Chromebook",
                                command: () => {
                                    navigate(`/Education Solutions/Works With Chromebook`);
                                },
                            },
                        ],
                    },
                ],
                [
                    {
                        label: "Business Solutions",
                        items: [
                            {
                                label: "Workspace & Cubes",
                                command: () => {
                                    navigate(`/Business Solutions/Workspace & Cubes`);
                                },
                            },
                            {
                                label: "Conference Rooms",
                                command: () => {
                                    navigate(`/Business Solutions/Conference Rooms`);
                                },
                            },
                            {
                                label: "Remote Working", command: () => {
                                    navigate(`/Business Solutions/Remote Working`);
                                },
                            },
                            {
                                label: "Business Travel", command: () => {
                                    navigate(`/Business Solutions/Business Travel`);
                                },
                            },
                        ],
                    },
                ],
            ],
        },
        {
            label: "Products",
            icon: "pi pi-fw pi-users",
            items: [
                [
                    {
                        label: <Link to="products/Interactive Flat Panel" className="prod__link">Interactive Flat Panel</Link>,
                        items: [{
                            label: "For Education", command: () => {
                                navigate(`products/Interactive Flat Panel/For Education`);
                            },
                        }, {
                            label: "For Business", command: () => {
                                navigate(`products/Interactive Flat Panel/For Business`);
                            },
                        }],
                    },
                    {
                        label: "Bags",
                        items: [{
                            label: "Bagpacks", command: () => {
                                navigate(`products/Bags/Bagpacks`);
                            },
                        }],
                    },
                ],
                [
                    {
                        label: "Input Devices",
                        items: [
                            {
                                label: "Keyboards", command: () => {
                                    navigate(`/products/Input Devices/Keyboards`);
                                },
                            },
                            {
                                label: "Web Cam", command: () => {
                                    navigate(`/products/Input Devices/Web Cam`);
                                },
                            },
                            {
                                label: "Mouse", command: () => {
                                    navigate(`/products/Input Devices/Mouse`);
                                },
                            },
                        ],
                    },
                ],
            ],
        },
        {
            label: "About Us",
            command: () => {
                navigate(`/About Us`);
            },
        },
        {
            label: "Contact Us",
            command: () => {
                navigate(`/Contact Us`);
            },
        },
    ];
    const start = <img alt="logo" src={logo} height="40" className="mr-2"></img>;

    const end = <InputText placeholder="Search" type="text" />;

    const handleNavigation = (e) => {
        console.log(e.target.offsetParent);
    };


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
            {/* <div className="logo">
                <img src={logo} alt="kmmctech" className="logo" />
            </div>
            <div className="nav__items-wrapper">
                {
                    !isFetching &&

                    <NavItems navItems={data} textColor={textColor} />
                }
                <div>
                    <SearchBar />
                </div> */}
            {/* </div> */}
        </nav>
    );
}

Navbar.propTypes = {
    textColor: PropTypes.string,
};
export default Navbar;
