import React, { useState } from 'react';
import { Card, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconCardHeader from '../common/FalconCardHeader';
import { Link } from 'react-router-dom';
import ListGroup from 'reactstrap/es/ListGroup';
import ListGroupItem from 'reactstrap/es/ListGroupItem';
import Notification from '../notification/Notification';
import classNames from 'classnames';
import { isIterableArray } from '../../helpers/utils';
import { rawNewNotifications, rawEarlierNotifications } from '../../data/notification/notification';
import useFakeFetch from '../../hooks/useFakeFetch';

const NotificationDropdown = () => {
  // State
  const { data: newNotifications, setData: setNewNotifications } = useFakeFetch(rawNewNotifications);
  const { data: earlierNotifications, setData: setEarlierNotifications } = useFakeFetch(rawEarlierNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [isAllRead, setIsAllRead] = useState(false);

  // Handler
  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const markAsRead = e => {
    e.preventDefault();
    const updatedNewNotifications = newNotifications.map(notification => {
      if (notification.hasOwnProperty('unread')) {
        return {
          ...notification,
          unread: false
        };
      }
      return notification;
    });
    const updatedEarlierNotifications = earlierNotifications.map(notification => {
      if (notification.hasOwnProperty('unread')) {
        return {
          ...notification,
          unread: false
        };
      }
      setIsAllRead(true);
      return notification;
    });

    setNewNotifications(updatedNewNotifications);
    setEarlierNotifications(updatedEarlierNotifications);
  };

  return (
    <Dropdown nav inNavbar isOpen={isOpen} toggle={handleToggle}>
      <DropdownToggle
        nav
        className={classNames('px-0', {
          'notification-indicator notification-indicator-primary': !isAllRead
        })}
      >
        <FontAwesomeIcon icon="bell" transform="shrink-6" className="fs-4" />
      </DropdownToggle>
      <DropdownMenu right className="dropdown-menu-card">
        <Card className="card-notification shadow-none" style={{ maxWidth: '20rem' }}>
          <FalconCardHeader className="card-header" title="Notifications" titleTag="h6" light={false}>
            <Link className="card-link font-weight-normal" to="#!" onClick={markAsRead}>
              Mark all as read
            </Link>
          </FalconCardHeader>
          <ListGroup flush className="font-weight-normal fs--1">
            <div className="list-group-title">NEW</div>
            {isIterableArray(newNotifications) &&
              newNotifications.map((notification, index) => (
                <ListGroupItem key={index} onClick={handleToggle}>
                  <Notification {...notification} flush />
                </ListGroupItem>
              ))}
            <div className="list-group-title">EARLIER</div>
            {isIterableArray(earlierNotifications) &&
              earlierNotifications.map((notification, index) => (
                <ListGroupItem key={index} onClick={handleToggle}>
                  <Notification {...notification} flush />
                </ListGroupItem>
              ))}
          </ListGroup>
          <div className="card-footer text-center border-top-0" onClick={handleToggle}>
            <Link className="card-link d-block" to="/pages/notifications">
              View all
            </Link>
          </div>
        </Card>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NotificationDropdown;
