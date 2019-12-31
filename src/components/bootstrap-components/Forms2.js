import React, { Fragment, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Card, CardBody, Col, Row, Form, FormGroup, Label, Input, CardTitle, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconCardHeader from '../common/FalconCardHeader';
import FalconEditor from '../common/FalconEditor';
import PageHeader from '../common/PageHeader';
import Flex from '../common/Flex';
import classnames from 'classnames';

const Forms2 = () => (
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
    <Card className="mb-3">
      <FalconCardHeader title="General Info" light={false} />
      <CardBody className="bg-light">
        <Form>
          <FormGroup>
            <Label for="degreeProgramSelect">Which Degree Program are you applying for?</Label>
            <Input type="select" name="degreeProgramSelect" id="degreeProgramSelect">
              <option></option>
              <option>Certificate in Christian Counseling</option>
              <option>Certificate in Biblical Studies</option>
              <option>Associates Degree (A.A. Theology)</option>
              <option>Bachelors Degree (B.A. Theology)</option>
              <option>Masters Degree (M.A. Theology)</option>
              <option>Doctorate Degree (PhD. Theology)</option>
            </Input>
          </FormGroup>          
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" id="firstName" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="middleName">Middle Name</Label>
            <Input type="text" name="middleName" id="middleName" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="maidenName">Maiden Name</Label>
            <Input type="text" name="maidenName" id="maidenName" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="primaryEmail">Email</Label>
            <Input type="email" name="primaryEmail" id="primaryEmail" placeholder="username@email.com" />
          </FormGroup>
          <FormGroup>
            <Label for="homePhone">Home Phone #</Label>
            <Input type="text" name="homePhone" id="homePhone" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="cellPhone">Cell Phone #</Label>
            <Input type="text" name="cellPhone" id="cellPhone" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="address1">Address</Label>
            <Input type="text" name="address1" id="address1" placeholder="1234 Main St" />
          </FormGroup>
          <FormGroup>
            <Label for="address2">Address 2</Label>
            <Input type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input type="text" name="state" id="state" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input type="text" name="zip" id="zip" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="genderSelect">Gender</Label>
            <Input type="select" name="genderSelect" id="genderSelect">
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="dateOfBirth">Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="01/01/1970"
            />
          </FormGroup>
          <FormGroup>
            <Label for="citizenShipSelect">Citizenship Status</Label>
            <Input type="select" name="citizenShipSelect" id="citizenShipSelect">
              <option></option>
              <option>Non-resident Alien</option>
              <option>Not U.S. Citizen</option>
              <option>Resident Alien</option>
              <option>U.S. Citizen</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="citizenShipCountry">Citizenship Country</Label>
            <Input type="text" name="citizenShipCountry" id="citizenShipCountry" placeholder="" />
          </FormGroup>

        </Form>
      </CardBody>
    </Card>
  </Fragment>
);

export default Forms2;
