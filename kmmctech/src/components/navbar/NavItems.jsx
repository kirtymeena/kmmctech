import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { MdMenu } from "react-icons/md";
import { Sidebar } from 'primereact/sidebar';
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";

function NavItems({ navItems, textColor }) {
    const [visible, setVisible] = useState(false)
    const [DropdownVal, setDropdownVal] = useState({ show: false, hoveredOn: null })
    useEffect(() => {
        console.log(navItems, "nav")
    })

    const showNavItems = () => {
        return (
            <>
                {
                    navItems && navItems.map(option =>
                        <section className="nav__items" key={option.id} onClick={() => setDropdownVal({ show: !DropdownVal.show, hoveredOn: "PRODUCTS" })} onMouseOver={() => option.isExpandable && setDropdownVal({ show: true, hoveredOn: option.title })} onMouseLeave={() => setDropdownVal({ show: false, hoveredOn: null })}>
                            <div className="item">
                                <Link to="/" className={`link fw-700 ${textColor}`}>{option.title.toUpperCase()}</Link>
                            </div>
                            {DropdownVal.show && option.items.length > 0 && DropdownVal.hoveredOn.toLowerCase() === option.title.toLowerCase() &&
                                <div className="dropdown__wrapper">
                                    <NavDropdown option={option.items} />
                                </div>
                            }
                        </section >
                    )
                }
            </>
        )
    }
    return (
        <>
            <div className="nav__items-lg">
                {showNavItems()}
            </div>
            <div className="nav__items-sm" onClick={() => setVisible(true)}>
                <MdMenu size={22} />
            </div>
            <div className="sidebar">
                <Sidebar visible={visible} onHide={() => setVisible(false)}>
                    <div className="sidebar__content">
                        {showNavItems()}

                    </div>
                </Sidebar>
            </div>
        </>
    )
}

NavItems.propTypes = {
    navItems: PropTypes.array,
    textColor: PropTypes.string
}

export default NavItems