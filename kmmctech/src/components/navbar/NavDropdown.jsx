import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function NavDropdown({ option }) {
    console.log("option", option)
    return option && option.map(child =>
    (
        <div className='navDropdown__wrapper' key={child._id}>

            <div className='navDropdown__options'>
                <p className={child.subRoot ? 'fw-600' : 'child__node'}><Link to={{ pathname: `/products/${child.title}`, state:  child  }} className='dropdown__link'>{child.title}</Link></p>
            </div>
            <div className='navDropdown__subOptions'>
                {
                    child.items && child.items.length > 0 &&
                    <div key={option._id} className='subOption__wrapper'>
                        <NavDropdown option={child.items} />
                    </div>

                }
            </div>
        </div >
    )
    )

}


NavDropdown.propTypes = {
    option: PropTypes.array
}

export default NavDropdown