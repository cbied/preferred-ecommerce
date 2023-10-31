import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'



const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    console.log(currentUser)
    const signOutHandler = async () => {
        const user = await signOutUser()
        if(user === undefined) {
            setCurrentUser(null)
        }
    }

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
                        <span className='nav-link' onClick={signOutHandler}>
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