import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../common/PageHeader';
import ApplicantForm from '../../components/admissions/ApplicantForm';

const Forms = () => (
  <Fragment>
    <PageHeader
      title="Applicant Form"
      description="We are currently accepting applications for the 2020-2021 Academic Year."
      className="mb-3"
    >
      <p className="fs--1 mb-1">
        <h6>Below are the admission requirements:</h6>
        <ul>
          <li>Completed application*</li>
          <li>18 years of age or older (Note: You must be 18 yrs of age by the time the Fall semester begins, HS Seniors are welcome to apply)</li>
          <li>High school diploma/GED equivalent or higher (Note: You must have earned a GED or High School Diploma by the time the Fall semester begins, HS Seniors are welcome to apply)</li>
          <li>1- Pastoral recommendation</li>
          <li>2- Personal recommendations</li>
          <li>Must be a U.S. citizen</li>
        </ul>
      </p>
    </PageHeader>
    <ApplicantForm />
  </Fragment>
);

export default Forms;