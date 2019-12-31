import React, { useContext } from 'react';
import { Button, Collapse, CustomInput, Nav, Navbar } from 'reactstrap';
import { navbarBreakPoint } from '../../config';
import Logo from './Logo';
import routes from '../../routes';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import AppContext from '../../context/Context';

const isBurgerMenuShown = () => {
  const burgerMenu = document.getElementById('burgerMenu');
  return !(getComputedStyle(burgerMenu).display === 'none');
};

const NavbarVertical = () => {
  const { isFluid, setFluid, isRTL, setRTL, showBurgerMenu, setShowBurgerMenu } = useContext(AppContext);

  const handleNavbarVerticalCollapse = () => isBurgerMenuShown() && setShowBurgerMenu(!showBurgerMenu);

  return (
    <Navbar expand={navbarBreakPoint} className="navbar-vertical navbar-glass" light>
      <Logo at="navbar-vertical" width={40} />
      <Collapse navbar isOpen={showBurgerMenu}>
        <Nav navbar vertical>
          <NavbarVerticalMenu routes={routes} handleNavbarVerticalCollapse={handleNavbarVerticalCollapse} />
        </Nav>
        {/* <div className={`px-3 px-${navbarBreakPoint}-0`}>
          <hr className="border-300 my-3" />
          <h6 className="text-uppercase fs--2 font-weight-semi-bold ls text-600">Settings</h6>
          <div
            className="bg-light border py-card rounded"
            style={{ paddingLeft: '1.4375rem', paddingRight: '1.4375rem' }}
          >
            <CustomInput
              type="checkbox"
              id="rtl"
              name="rtl"
              label="RTL Layout"
              checked={isRTL}
              onChange={({ target }) => setRTL(target.checked)}
            />
            <CustomInput
              type="checkbox"
              id="fluid"
              name="fluid"
              label="Fluid Container"
              checked={isFluid}
              onChange={({ target }) => setFluid(target.checked)}
            />
          </div>
        </div>
        <Button
          tag={'a'}
          href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template-react/"
          target="_blank"
          color="primary"
          size="sm"
          block
          className="my-3"
        >
          Purchase
        </Button> */}
      </Collapse>
    </Navbar>
  );
};

export default NavbarVertical;
