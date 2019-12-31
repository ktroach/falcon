import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarDropdown = ({ title, items, right, children }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {title}
    </DropdownToggle>
    <DropdownMenu right={right} className="dropdown-menu-card">
      {items.length > 0 && (
        <div className="bg-white rounded-soft py-2">
          {items.map(({ to, name }, index) => (
            <DropdownItem tag={Link} to={to} key={index}>
              {name}
            </DropdownItem>
          ))}
        </div>
      )}
      {children}
    </DropdownMenu>
  </UncontrolledDropdown>
);

NavbarDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  right: PropTypes.bool,
  children: PropTypes.node
};

NavbarDropdown.defaultProps = {
  items: [],
  right: false
};

export default NavbarDropdown;
