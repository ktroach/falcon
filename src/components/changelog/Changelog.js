import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { isIterableArray } from '../../helpers/utils';
import createMarkup from '../../helpers/createMarkup';
import PageHeader from '../common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const changelogs = [
  {
    title: '1.3.0 - Aplomado',
    publish: '18 December, 2019',
    logs: {
      New: ['<strong>Page</strong>: Feed', '<strong>Plugin</strong>: Plyr']
    }
  },
  {
    title: '1.2.0 - Kestrels',
    publish: '11 December, 2019',
    logs: {
      New: [
        '<strong>Page</strong>: Product List',
        '<strong>Page</strong>: Product Grid',
        '<strong>Page</strong>: Product Details',
        '<strong>Page</strong>: Orders',
        '<strong>Page</strong>: Order Details',
        '<strong>Page</strong>: Customers',
        '<strong>Page</strong>: Shopping Cart',
        '<strong>Page</strong>: Checkout',
        '<strong>Page</strong>: Favorite Items',
        'Counter on cart icon'
      ],
      Update: [
        '<strong>CSS</strong>: Bootstrap to <code>v4.4.1</code>',
        '<strong>Js</strong>: <code>utils.js</code>',
        'Top nav badge icons'
      ]
    }
  },
  {
    title: '1.1.0 - Gyrfalcon',
    publish: '04 November, 2019',
    logs: {
      New: [
        '<strong>Page</strong>: Dashboard Alt',
        '<strong>Page</strong>: Inbox',
        '<strong>Page</strong>: Email detail',
        '<strong>Page</strong>: Compose',
        '<strong>Plugin</strong>: Bulk select',
        '<strong>Plugin</strong>: WYSIWYG Editor',
        '<strong>Plugin</strong>: Progressbar'
      ],
      Fix: ['Redirect to 404'],
      Update: [
        'Add autoprefixer configuration in <code>package.json</code>',
        'Update autoprefixer configuration in <code>gulpfile.js</code>',
        '<strong>Js</strong>: <code>utils.js</code>'
      ]
    }
  },
  {
    title: '1.0.0 - initial release',
    publish: '30 September, 2019',
    children: 'Nothing to see here.'
  }
];

const Logs = ({ title, publish, logs, children }) => (
  <Card className="mb-3">
    <CardHeader>
      <h5>{title}</h5>
      <p className="mb-0">{publish}</p>
    </CardHeader>
    <CardBody className="bg-light">
      {children}
      {isIterableArray(Object.keys(logs)) &&
        Object.keys(logs).map((value, index) => (
          <Fragment key={index}>
            <h5 className="text-capitalize fs-0">{value}</h5>
            <ul className="pl-3">
              {logs[value].map((v, i) => (
                <li key={i} dangerouslySetInnerHTML={createMarkup(v)} />
              ))}
            </ul>
          </Fragment>
        ))}
    </CardBody>
  </Card>
);

Logs.propTypes = {
  title: PropTypes.string.isRequired,
  publish: PropTypes.string.isRequired,
  logs: PropTypes.object.isRequired,
  children: PropTypes.node
};

Logs.defaultProps = { logs: {} };

const Changelog = () => (
  <Fragment>
    <PageHeader title="Changelog" className="mb-3" />
    <Card className="mb-3">
      <CardBody>
        <Alert color="warning" className="p-4 mb-0">
          <Media>
            <FontAwesomeIcon icon="exclamation-triangle" className="fs-3" />
            <Media body className="ml-3">
              <h4 className="alert-heading">Before you update!</h4>
              Backup your files and read the changelog before updating Falcon on your project. If you come across with
              any problems with Falcon template during the update, feel free to contact us at{' '}
              <a href="mailto:info@themewagon.com">info@themewagon.com</a>.
            </Media>
          </Media>
        </Alert>
      </CardBody>
    </Card>
    {changelogs.map((logs, index) => (
      <Logs {...logs} key={index} />
    ))}
  </Fragment>
);

export default Changelog;
