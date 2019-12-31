import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Modal,
  ModalBody,
  NavbarBrand,
  Container,
  NavLink,
  UncontrolledTooltip,
  CardBody,
  Card
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavbarDropdown from './NavbarDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import handleNavbarTransparency from '../../helpers/handleNavbarTransparency';
import { pageRoutes, utilityRoutes, pluginRoutes, componentRoutes } from '../../routes';
import Login from '../auth/basic/Login';
import Registration from '../auth/basic/Registration';

const breakpoint = 'lg';

const NavbarStandard = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);

  return (
    <Navbar
      dark
      fixed="top"
      expand={breakpoint}
      className={classNames('fs--1 font-weight-semi-bold navbar-standard navbar-theme', {
        'bg-dark': !navbarCollapsed
      })}
    >
      <Container>
        <NavbarBrand className="text-white" tag={Link} to="/">
          Falcon
        </NavbarBrand>
        <NavbarToggler onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Collapse isOpen={!navbarCollapsed} navbar>
          <Nav navbar>
            <NavbarDropdown title={pageRoutes.name} items={pageRoutes.children} />
            <NavbarDropdown title={pluginRoutes.name} items={pluginRoutes.children} />
            <NavbarDropdown title={componentRoutes.name} items={componentRoutes.children} />
            <NavbarDropdown title={utilityRoutes.name} items={utilityRoutes.children} />
          </Nav>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink tag={Link} to="/">
                <FontAwesomeIcon
                  icon="chart-pie"
                  id="dashboardTooltip"
                  className={`d-none d-${breakpoint}-inline-block`}
                />
                <UncontrolledTooltip placement="bottom" target="dashboardTooltip">
                  Dashboard
                </UncontrolledTooltip>
                <span className={`d-${breakpoint}-none`}>Dashboard</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/documentation">
                <FontAwesomeIcon
                  icon="book"
                  id="documentationTooltip"
                  className={`d-none d-${breakpoint}-inline-block`}
                />
                <UncontrolledTooltip placement="bottom" target="documentationTooltip">
                  Documentation
                </UncontrolledTooltip>
                <span className={`d-${breakpoint}-none`}>Documentation</span>
              </NavLink>
            </NavItem>
            <NavbarDropdown title="Login" right>
              <Card className="navbar-card-login shadow-none">
                <CardBody className="fs--1 font-weight-normal p-4">
                  <Login />
                </CardBody>
              </Card>
            </NavbarDropdown>
            <NavItem>
              <NavLink tag={Link} to="#!" onClick={() => setShowRegistrationModal(!showRegistrationModal)}>
                Register
              </NavLink>
              <Modal
                isOpen={showRegistrationModal}
                centered
                toggle={() => setShowRegistrationModal(!showRegistrationModal)}
              >
                <ModalBody className="p-0">
                  <Card>
                    <CardBody className="fs--1 font-weight-normal p-4">
                      <Registration />
                    </CardBody>
                  </Card>
                </ModalBody>
              </Modal>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
