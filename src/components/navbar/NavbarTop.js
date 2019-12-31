import React, { useContext } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, Nav, NavLink } from 'reactstrap';
import AppContext, { ProductContext } from '../../context/Context';
import Logo from './Logo';
import SearchBox from './SearchBox';
import ProfileDropdown from './ProfileDropdown';
import NotificationDropdown from './NotificationDropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const NavbarTop = () => {
  const { showBurgerMenu, setShowBurgerMenu } = useContext(AppContext);
  // const { shoppingCart } = useContext(ProductContext);

  return (
    <Navbar light className="navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit" expand>
      <NavbarToggler onClick={() => setShowBurgerMenu(!showBurgerMenu)} id="burgerMenu" />
      {/* <Logo at="navbar-top" width={40} id="topLogo" /> */}
      <Collapse navbar>
        <Nav navbar className="align-items-center d-none d-lg-block">
          {/* <NavItem>
            <SearchBox />
          </NavItem> */}
        </Nav>

        <Nav navbar className="align-items-center ml-auto">
          {/* <NavItem>
            <NavLink
              tag={Link}
              to="/e-commerce/shopping-cart"
              className={classNames('px-0', {
                'notification-indicator notification-indicator-warning notification-indicator-fill': !!shoppingCart.length
              })}
            >
              {!!shoppingCart.length && (
                <span className="notification-indicator-number">
                  {shoppingCart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
                </span>
              )}
              <FontAwesomeIcon icon="shopping-cart" transform="shrink-7" className="fs-4" />
            </NavLink>
          </NavItem> */}
          {/* <NotificationDropdown />
          <ProfileDropdown /> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarTop;
