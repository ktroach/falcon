import React, { Fragment, useContext, useState } from 'react';
import {
  CardHeader,
  Card,
  CardBody,
  Button,
  Row,
  Col,
  CardImg,
  CardFooter,
  Media,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '../common/Avatar';
import women from '../../assets/img/illustrations/international-women-s-day.jpg';
import team1 from '../../assets/img/team/1.jpg';
import Flex from '../common/Flex';
import IconGroup from '../common/icon/IconGroup';
import AppContext from '../../context/Context';
import ButtonIcon from '../common/ButtonIcon';
import ButtonIconTooltip from '../common/ButtonIconTooltip';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import iconList from '../../data/footer/iconList';

const emailDetails = {
  sender: {
    name: 'Emma Watson',
    avatarSrc: team1,
    time: '8:40 AM (9 hours ago)',
    email: 'emma@watson.com'
  },
  subject: 'Women work wonders… on your marketing skills'
};

const EmailDetail = () => {
  const { isRTL } = useContext(AppContext);
  const { sender, subject } = emailDetails;
  const [star, setStar] = useState(true);

  return (
    <Fragment>
      <Card className="mb-3">
        <CardBody tag={Flex} justify="between">
          <div>
            <ButtonIconTooltip tag={Link} to="/email/inbox" id="back" icon={`arrow-${isRTL ? 'right' : 'left'}`}>
              Back to inbox
            </ButtonIconTooltip>
            <span className="mx-1 mx-sm-2 text-300">|</span>
            <ButtonIconTooltip id="archive" icon="archive">
              Archive
            </ButtonIconTooltip>
            <ButtonIconTooltip id="trash" icon="trash-alt" className="ml-1 ml-sm-2">
              Delete
            </ButtonIconTooltip>
            <ButtonIconTooltip id="message" icon="envelope" className="ml-1 ml-sm-2">
              Mark as unread
            </ButtonIconTooltip>
            <ButtonIconTooltip id="clock" icon="clock" className="ml-1 ml-sm-2">
              Clock
            </ButtonIconTooltip>
            <ButtonIconTooltip id="print" icon="print" className="ml-1 ml-sm-2 d-none d-sm-inline-block">
              Print
            </ButtonIconTooltip>
          </div>
          <Flex align="center">
            <div className="d-none d-md-block">
              <small>2 of 354</small>
              <ButtonIcon
                icon={`chevron-${isRTL ? 'right' : 'left'}`}
                color="falcon-default"
                size="sm"
                className="ml-1 ml-sm-2"
              />
              <ButtonIcon
                icon={`chevron-${isRTL ? 'left' : 'right'}`}
                color="falcon-default"
                size="sm"
                className="ml-1 ml-sm-2"
              />
            </div>
            <UncontrolledDropdown>
              <DropdownToggle className="btn-sm ml-2 text-600" color="falcon-default">
                <FontAwesomeIcon icon="cog" />
              </DropdownToggle>
              <DropdownMenu right className="border py-2">
                <DropdownItem>Configure inbox</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Themes</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Send feedback</DropdownItem>
                <DropdownItem>Help</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Flex>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <Media>
                <Avatar src={sender.avatarSrc} size="2xl" />
                <Media body className="ml-2">
                  <h5 className="mb-0">{subject}</h5>
                  <Link className="text-800 fs--1" to="#!">
                    <span className="font-weight-semi-bold">{sender.name}</span>
                    <span className="ml-1 text-500">&lt;{sender.email}&gt;</span>
                  </Link>
                </Media>
              </Media>
            </Col>
            <Col tag={Flex} align="center" xs="auto" className="ml-auto">
              <small>{sender.time}</small>
              <FontAwesomeIcon
                onClick={() => setStar(!star)}
                icon={star ? 'star' : ['far', 'star']}
                className={classNames('ml-2 fs--1', { 'text-warning': star, 'text-300': !star }, 'cursor-pointer')}
              />
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="bg-light">
          <Row className="justify-content-center">
            <Col lg={8} className="col-xxl-6">
              <Card className="shadow-none mb-3">
                <CardImg src={women} top />
                <CardBody>
                  <h3 className="font-weight-semi-bold">Happy International Women’s Day!</h3>
                  <p>
                    On International Women’s Day, we at ThemeWagon want you to discover the skills you can learn from
                    our amazing women digital marketing instructors.
                  </p>
                  <p>
                    That's not all, when you enroll in one of their courses, use promo code:
                    <code className="mx-1">GirlPower20</code>
                    and get
                    <a className="font-weight-semi-bold mx-1" href="#!">
                      20% off
                    </a>
                    as our Women's Day gift to you. This offer
                    <a className="font-weight-semi-bold ml-1" href="#!">
                      expires in 7 days
                    </a>
                    —so pick your course—and enroll today!
                  </p>
                  <div className="text-center">
                    <Button size="lg" color="success" className="my-3">
                      Browse Courses
                    </Button>
                    <small className="d-block">
                      For any technical issues faced, please contact
                      <a href="#!" className="ml-1">
                        Customer Support
                      </a>
                      .
                    </small>
                  </div>
                </CardBody>
              </Card>
              <div className="text-center">
                <IconGroup icons={iconList} className="justify-content-center" />
                <small>
                  If you wish to unsubscribe from all future emails, please click
                  <a href="#!" className="ml-1">
                    here
                  </a>
                  .
                </small>
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <Row className="justify-content-between">
            <Col>
              <ButtonIcon icon="reply" size="sm" className="mr-2" color="falcon-default">
                Reply
              </ButtonIcon>
              <ButtonIcon icon="location-arrow" size="sm" color="falcon-default">
                Forward
              </ButtonIcon>
            </Col>
            <Col tag={Flex} xs="auto" align="center">
              <small>2 of 354</small>
              <ButtonIcon
                icon={`chevron-${isRTL ? 'right' : 'left'}`}
                size="sm"
                className="ml-2"
                color="falcon-default"
              />
              <ButtonIcon
                icon={`chevron-${isRTL ? 'left' : 'right'}`}
                size="sm"
                className="ml-2"
                color="falcon-default"
              />
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export default EmailDetail;
