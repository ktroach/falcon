import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Background from '../common/Background';
import corner1 from '../../assets/img/illustrations/corner-1.png';
import ButtonIcon from '../common/ButtonIcon';
import { Link } from 'react-router-dom';

const SpaceWarning = () => (
  <Card className="h-lg-100 overflow-hidden">
    <Background image={corner1} className="p-card bg-card" />
    <CardBody className="position-relative">
      <h5 className="text-warning">Running out of your space?</h5>
      <p className="fs--1 mb-0">
        Your storage will be running out soon. Get more
        <br /> space and powerful productivity features.
      </p>
      <ButtonIcon
        icon="chevron-right"
        transform="shrink-4 down-1"
        tag={Link}
        color="link"
        className="fs--1 text-warning mt-4 mt-lg-3 pl-0"
        to="#!"
        iconAlign="right"
      >
        Upgrade storage
      </ButtonIcon>
    </CardBody>
  </Card>
);

export default SpaceWarning;
