import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { NaviagtionContainer,
         LogoContainer,
         NavLinks,
         NavLink } from './navigation.styles'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <NaviagtionContainer>
                <LogoContainer to="/">
                    <div><CrwnLogo /></div>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    { currentUser ?
                    <NavLink as='span' onClick={signOutUser}>
                        SIGN OUT
                    </NavLink>
                    :
                    <NavLink to="/auth">
                        SIGN IN
                    </NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                    {
                        isCartOpen && <CartDropdown />
                       
                    }
            </NaviagtionContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;