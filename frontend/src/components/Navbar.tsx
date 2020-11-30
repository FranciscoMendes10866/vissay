import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DiTypo3 } from 'react-icons/di'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap';

import LogOutAction from '../store/actions/auth/LogOut'
import CleanAction from '../store/actions/articles/Clean'
import { StoreTypes } from '../store/types/storeTypes';
import { ButtonEvent } from '../@types/eventTypes';

const NavbarComponent = () => {
    const linkStyles = {
        textDecoration: 'none',
        color: 'black',
    }
    const dispatch = useDispatch()
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const stateToken = useSelector((state: StoreTypes) => state.auth.token)
    const stateUsername = useSelector((state: StoreTypes) => state.auth.username)
    const handleLogOut = (e: ButtonEvent) => {
        e.preventDefault()
        if (stateToken !== '') {
            dispatch(LogOutAction())
            dispatch(CleanAction())
            history.push('/sign-in')
        }
    }
    let isLoggedIn
    if (stateToken === '') {
        isLoggedIn = (
            <>
                <NavItem>
                    <NavLink>
                        <Link
                            style={{
                                textDecoration: linkStyles.textDecoration,
                                color: linkStyles.color
                            }}
                            to="/"
                        >
                            Sign up
                    </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link
                            style={{
                                textDecoration: linkStyles.textDecoration,
                                color: linkStyles.color
                            }}
                            to="/sign-in"
                        >
                            Sign in
                    </Link>
                    </NavLink>
                </NavItem>
            </>
        )
    } else {
        isLoggedIn = (
            <>
                <NavItem>
                    <NavLink>
                        <Link
                            style={{
                                textDecoration: linkStyles.textDecoration,
                                color: linkStyles.color
                            }}
                            to="/panel"
                        >
                            Articles
                    </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link
                            style={{
                                textDecoration: linkStyles.textDecoration,
                                color: linkStyles.color
                            }}
                            to="/create"
                        >
                            Add article
                    </Link>
                    </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <span
                            style={{
                                textDecoration: linkStyles.textDecoration,
                                color: linkStyles.color
                            }}
                        >Account</span>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Hello {stateUsername}!
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={handleLogOut}>
                            Log out
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </>
        )
    }
    let showNavBrand
    if (stateToken === '') {
        showNavBrand = (
            <Link
                style={{
                    textDecoration: linkStyles.textDecoration,
                    color: linkStyles.color
                }}
                to="/"
            >
                <DiTypo3 />
            </Link>
        )
    } else {
        showNavBrand = (
            <Link
                style={{
                    textDecoration: linkStyles.textDecoration,
                    color: linkStyles.color
                }}
                to="/panel"
            >
                <DiTypo3 />
            </Link>
        )
    }
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    {showNavBrand}
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {isLoggedIn}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent
