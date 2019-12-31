import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import FeedCardHeader from './FeedCardHeader';
import FeedCardFooter from './FeedCardFooter';
import FeedCardContent from './FeedCardContent';

const FeedCard = ({ id, user, content, footer }) => (
  <Card className="mb-3">
    {!!user && <FeedCardHeader {...user} />}
    {!!content && <FeedCardContent {...content} />}
    {!!footer && <FeedCardFooter id={id} {...footer} />}
  </Card>
);

FeedCard.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  user: PropTypes.object
};

export default FeedCard;
