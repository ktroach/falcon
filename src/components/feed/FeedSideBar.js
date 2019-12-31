import React, { Fragment } from 'react';
import FeedInterest from './FeedInterest';
import BirthdayNotice from './BirthdayNotice';
import AddToFeed from './AddToFeed';

const FeedSideBar = () => (
  <Fragment>
    <BirthdayNotice name="Emma Watson" profileLink="/pages/profile" />
    <AddToFeed />
    <FeedInterest />
  </Fragment>
);

export default FeedSideBar;
