import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'reactstrap';

const NavbarVerticalMenuItem = ({ route }) => (
  <div className="d-flex align-items-center">
    {route.icon && (
      <span className="nav-link-icon">
        <FontAwesomeIcon icon={route.icon} />
      </span>
    )}
    <span>{route.name}</span>
    {!!route.badge && (
      <Badge color={route.badge.color || 'soft-success'} pill className="ml-2">
        {route.badge.text}
      </Badge>
    )}
  </div>
);

NavbarVerticalMenuItem.propTypes = {
  route: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    name: PropTypes.string.isRequired
  }).isRequired
};

export default NavbarVerticalMenuItem;
