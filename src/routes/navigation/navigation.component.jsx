import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import { ProductsContext } from "../../contexts/products.context";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'



const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    
    // console.log(products.map(product => {
    //     return product.name
    // }))
    

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div><CrwnLogo /></div>
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>
                    <Link className='nav-link' to="/contact">
                        CONTACT
                    </Link>
                    { currentUser ?
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                        :
                        <Link className='nav-link' to="/auth">
                            SIGN IN
                        </Link>
                    }
                    
                    <div>
                        cart logo
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;