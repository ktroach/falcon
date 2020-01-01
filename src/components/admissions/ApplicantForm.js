import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CustomInput, Form, FormGroup, Input, Label, Row, Col, Card, CardTitle, CardText, CardBody, FormText } from 'reactstrap';
import Divider from '../common/Divider';
import withRedirect from '../../hoc/withRedirect';
import classnames from 'classnames';
import axios from "axios";          
import Datetime from 'react-datetime';

const ApplicantForm = ({ setRedirect, setRedirectUrl, layout, hasLabel }) => {
    // State
    const [degreeProgramSelect, setDegreeProgramSelect] = useState('');

    const [firstName, setFirstName] = useState('');

    const [highSchoolAttended, setHighSchoolAttended] = useState('');
    const [dateOfCompletion, setDateOfCompletion] = useState('');    

    const [firstSchoolName, setFirstSchoolName] = useState('');
    const [firstSchoolStart, setFirstSchoolStart] = useState('');
    const [firstSchoolEnd, setFirstSchoolEnd] = useState('');
    const [firstSchoolDiploma, setFirstSchoolDiploma] = useState('');

    const [secondSchoolName, setSecondSchoolName] = useState('');
    const [secondSchoolStart, setSecondSchoolStart] = useState('');
    const [secondSchoolEnd, setSecondSchoolEnd] = useState('');
    const [secondSchoolDiploma, setSecondSchoolDiploma] = useState('');
    
    const [thirdSchoolName, setThirdSchoolName] = useState('');
    const [thirdSchoolStart, setThirdSchoolStart] = useState('');
    const [thirdSchoolEnd, setThirdSchoolEnd] = useState('');
    const [thirdSchoolDiploma, setThirdSchoolDiploma] = useState('');    

    const [highestLevelOfEducation, setHighestLevelOfEducation] = useState('');


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAccepted, setIsAccepted] = useState(false);
    const [isNext1Disabled, setIsNext1Disabled] = useState(true);
    const [isNext2Disabled, setIsNext2Disabled] = useState(true);
    const [isNext3Disabled, setIsNext3Disabled] = useState(true);
    const [isNext4Disabled, setIsNext4Disabled] = useState(true);
    const [isNext5Disabled, setIsNext5Disabled] = useState(true);
    const [isNext6Disabled, setIsNext6Disabled] = useState(true);
    const [isNext7Disabled, setIsNext7Disabled] = useState(true);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    // Handler
    const handleSubmit = e => {
        e.preventDefault();
        const updates = {

        };
        submitRequest();
    };

    const submitRequest = async updates => {
        console.log(">>> UPDATES >>> ", updates);
        // return await new Promise((success, fail) => {
        //     const url = `${LIVE_API_URI}/patient/task/update`;
        //     const recStatus = updates.status;
        //     const data = {
        //         "ActualStDt": "12-19-2019 10:00:00 AM",
        //         "ExpectedStDt": "12-19-2019 10:00:00 AM",
        //         "PatientId": "d32ba1ae-7c98-4574-8c8d-c67806e03677",
        //         "RecStatus": recStatus,
        //         "ScheduleId": "024c4d00-227e-11ea-8c10-e944c5f24202",
        //         "TaskId": 0,
        //         "Type": "Medication",
        //         "TypeQty": 1,
        //         "TypeRefId": "535f8308-4a78-4e6d-8725-ceb14496b5d0",
        //         "TypeUOM": "Each",
        //         "CronDef": "0 9,20 * * *",
        //         "Desc": "Actrapid HM 100",
        //         "Recurring": true,
        //         "SubType": "Insulin"
        //     };
        //     const options = {
        //         method: "post",
        //         headers: { 'X-API-KEY': API_KEY },
        //         data: data,
        //     };
        //     axios(url, options).then(function (response) {
        //         if (response.data) {
        //             toast.success(`Submit Successful`);
        //             // setRedirect(true);
        //         }
        //     });
        // })
        //     .then(response => response)
        //     .catch(error => error);
    };

    useEffect(() => {
        setRedirectUrl(`/authentication/${layout}/login`);
    }, [setRedirectUrl, layout]);

    useEffect(() => {
        setIsNext1Disabled(!degreeProgramSelect);
    }, [degreeProgramSelect]);

    useEffect(() => {
        setIsNext2Disabled(!firstName);
    }, [firstName]);    

    useEffect(() => {
        setIsNext3Disabled(!highSchoolAttended);
    }, [highSchoolAttended]);    

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (tab === "1") {
            setActiveTab(tab);
        }
        if (tab === "2") {
            if (degreeProgramSelect) {
                setActiveTab(tab);
            }
        }
        if (tab === "3") {
            if (firstName) {
                setActiveTab(tab);
            }
        }     
        if (tab === "4") {
            if (highSchoolAttended) {
                setActiveTab(tab);
            }
        }             

        //if (activeTab !== tab) setActiveTab(tab);
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Degree 
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Personal 
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Education 
          </NavLink>
        </NavItem>     

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Work 
          </NavLink>
        </NavItem> 

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Church 
          </NavLink>
        </NavItem>     

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }}
          >
            References
          </NavLink>
        </NavItem> 

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '7' })}
            onClick={() => { toggle('7'); }}
          >
            Testimony
          </NavLink>
        </NavItem> 

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '8' })}
            onClick={() => { toggle('8'); }}
          >
            Affirmations
          </NavLink>
        </NavItem>                                              

      </Nav>

      <TabContent activeTab={activeTab}>

        <TabPane tabId="1">
            <Row>
                <Col sm="12" style={{padding: 20}}>

                <Card className="mb-3">
                    <CardBody className="fs--1">
                      <CardTitle></CardTitle>
                      <Row>
                        <Col>   

                    <FormGroup>
                        <Label for="degreeProgramSelect">Which Degree Program are you applying for?</Label>
                        <Input type="select" name="degreeProgramSelect" id="degreeProgramSelect" value={degreeProgramSelect} onChange={({ target }) => setDegreeProgramSelect(target.value)}>
                            <option></option>
                            <option>Certificate in Christian Counseling</option>
                            <option>Certificate in Biblical Studies</option>
                            <option>Associates Degree (A.A. Theology)</option>
                            <option>Bachelors Degree (B.A. Theology)</option>
                            <option>Masters Degree (M.A. Theology)</option>
                            <option>Doctorate Degree (PhD. Theology)</option>
                        </Input>
                        <FormText>Select the Degree Program that you are interested in applying to</FormText>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" /> Are you a current or past Student of this College applying for the next degree level?
                        </Label>
                        <FormText>Only check this box if you have previously enrolled in courses or attended this college</FormText>
                    </FormGroup>                    



                    </Col>
                      </Row>
                    </CardBody>
                  </Card> 

                </Col>
            </Row>
        </TabPane>

        <TabPane tabId="2" disabled={true}>
            <Row>
                <Col sm="12" style={{padding: 20}}>

                <Card className="mb-3">
                    <CardBody className="fs--1">
                      <CardTitle></CardTitle>
                      <Row>
                        <Col>                  
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="" value={firstName} onChange={({ target }) => setFirstName(target.value)} />
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


                </Col>
                      </Row>
                    </CardBody>
                  </Card>  

                </Col>
            </Row>
        </TabPane>

        <TabPane tabId="3">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                  <Card className="mb-3">
                    <CardBody className="fs--1">
                      <CardTitle>High School/GED</CardTitle>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="highSchoolAttended">High School Attended</Label>
                            <Input type="text" name="highSchoolAttended" id="highSchoolAttended" placeholder="" value={highSchoolAttended} onChange={({ target }) => setHighSchoolAttended(target.value)} />
                          </FormGroup>


                          <FormGroup>
                            <Label for="highestLevelOfEducation">Highest Level of Education Completed</Label>
                            <Input type="select" name="highestLevelOfEducation" id="highestLevelOfEducation" value={highestLevelOfEducation} onChange={({ target }) => setHighestLevelOfEducation(target.value)}>
                              <option></option>
                              <option>High School or GED</option>
                              <option>Associates Degree</option>
                              <option>Bachelors Degree</option>
                              <option>Masters Degree</option>
                              <option>Doctorate or PhD</option>
                            </Input>
                          </FormGroup>


                          <FormGroup>
                            <Label for="dateOfCompletion">Date of Completion</Label>
                            <Datetime
                              id="dateOfCompletion"
                              value={dateOfCompletion}
                              onChange={setDateOfCompletion}
                              type="datetime"
                              timeFormat={false}
                              closeOnSelect
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>  

                  <hr />

                    {/* 
                    <hr/>
                    Starting after high school, list the educational institutions you've attended:

                    */}

                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>First School</CardTitle>
                            <Row>
                              <Col>
                                  <FormGroup>
                                      <Label for="firstSchoolName">School Name</Label>
                                      <Input type="text" name="firstSchoolName" id="firstSchoolName" placeholder="" value={firstSchoolName} onChange={({ target }) => setFirstSchoolName(target.value)} />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="firstSchoolStart">School Start Date</Label>
                                      <Datetime 
                                        id="firstSchoolStart"
                                        value={firstSchoolStart}
                                        onChange={setFirstSchoolStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                      
                                  </FormGroup>  
                                  <FormGroup>
                                      <Label for="firstSchoolEnd">School End Date</Label>
                                      <Datetime 
                                        id="firstSchoolEnd"
                                        value={firstSchoolEnd}
                                        onChange={setFirstSchoolEnd}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                        
                                  </FormGroup>   
                                  <FormGroup>
                                      <Label for="firstSchoolDiploma">Degree/Diploma Acquired</Label>
                                      <Input type="text" name="firstSchoolDiploma" id="firstSchoolDiploma" placeholder="" value={firstSchoolDiploma} onChange={({ target }) => setFirstSchoolDiploma(target.value)} />
                                  </FormGroup>                                                                                                       
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>                    
 
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Second School</CardTitle>
                            <Row>
                              <Col>
                                  <FormGroup>
                                      <Label for="secondSchoolName">School Name</Label>
                                      <Input type="text" name="secondSchoolName" id="secondSchoolName" placeholder="" value={secondSchoolName} onChange={({ target }) => setSecondSchoolName(target.value)} />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="secondSchoolStart">School Start Date</Label>
                                      <Datetime 
                                        id="secondSchoolStart"
                                        value={secondSchoolStart}
                                        onChange={setSecondSchoolStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                         
                                  </FormGroup>  
                                  <FormGroup>
                                      <Label for="secondSchoolEnd">School End Date</Label>
                                      <Datetime 
                                        id="secondSchoolEnd"
                                        value={secondSchoolEnd}
                                        onChange={setSecondSchoolEnd}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                       
                                  </FormGroup>   
                                  <FormGroup>
                                      <Label for="secondSchoolDiploma">Degree/Diploma Acquired</Label>
                                      <Input type="text" name="secondSchoolDiploma" id="secondSchoolDiploma" placeholder="" value={secondSchoolDiploma} onChange={({ target }) => setSecondSchoolDiploma(target.value)} />
                                  </FormGroup>                                                                                                       
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>  
                   
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Third School</CardTitle>
                            <Row>
                              <Col>
                                  <FormGroup>
                                      <Label for="thirdSchoolName">School Name</Label>
                                      <Input type="text" name="thirdSchoolName" id="thirdSchoolName" placeholder="" value={thirdSchoolName} onChange={({ target }) => setThirdSchoolName(target.value)} />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="thirdSchoolStart">School Start Date</Label>
                                      <Datetime 
                                        id="thirdSchoolStart"
                                        value={thirdSchoolStart}
                                        onChange={setThirdSchoolStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                          
                                  </FormGroup>  
                                  <FormGroup>
                                      <Label for="thirdSchoolEnd">School End Date</Label>
                                      <Datetime 
                                        id="thirdSchoolEnd"
                                        value={thirdSchoolEnd}
                                        onChange={setThirdSchoolEnd}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                           
                                  </FormGroup>   
                                  <FormGroup>
                                      <Label for="thirdSchoolDiploma">Degree/Diploma Acquired</Label>
                                      <Input type="text" name="thirdSchoolDiploma" id="thirdSchoolDiploma" placeholder="" value={thirdSchoolDiploma} onChange={({ target }) => setThirdSchoolDiploma(target.value)} />
                                  </FormGroup>                                                                                                       
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>  

                </Col>
            </Row>
        </TabPane>


        <TabPane tabId="4">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                    <p>Work History</p>

                </Col>
            </Row>
        </TabPane>


        <TabPane tabId="5">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                    <p>Church History</p>

                </Col>
            </Row>
        </TabPane>  


        <TabPane tabId="6">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                    <p>References</p>

                </Col>
            </Row>
        </TabPane>         


        <TabPane tabId="7">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                    <p>Testimony</p>
                    {/* <Button color="primary" block className="mt-3" disabled={isNext7Disabled}>
                        Next
                    </Button>                     */}
                </Col>
            </Row>
        </TabPane>   


        <TabPane tabId="8">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                    <p>Affirmations</p>
                    <Button color="primary" block className="mt-3" disabled={isSubmitDisabled}>
                        Submit Application
                    </Button>                    
                </Col>
            </Row>
        </TabPane>                         


      </TabContent>




      {/* <FormGroup>
        {hasLabel && <Label>Name</Label>}
        <Input placeholder={!hasLabel ? 'Name' : ''} value={name} onChange={({ target }) => setName(target.value)} />
      </FormGroup>
      <FormGroup>
        {hasLabel && <Label>Email address</Label>}
        <Input
          placeholder={!hasLabel ? 'Email address' : ''}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
        />
      </FormGroup>
      <div className="form-row">
        <FormGroup className="col-6">
          {hasLabel && <Label>Password</Label>}
          <Input
            placeholder={!hasLabel ? 'Password' : ''}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup className="col-6">
          {hasLabel && <Label>Confirm Password</Label>}
          <Input
            placeholder={!hasLabel ? 'Confirm Password' : ''}
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
            type="password"
          />
        </FormGroup> 
      </div> */}

      {/* <CustomInput
        id="customCheckTerms"
        label={
          <Fragment>
            I accept the <Link to="#!">terms</Link> and <Link to="#!">privacy policy</Link>
          </Fragment>
        }
        checked={isAccepted}
        onChange={({ target }) => setIsAccepted(target.checked)}
        type="checkbox"
      />
      <FormGroup>
        <Button color="primary" block className="mt-3" disabled={isDisabled}>
          Register
        </Button>
      </FormGroup> */}
      {/* <Divider className="mt-4">or register with</Divider> */}

    </Form>
  );
};

ApplicantForm.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  setRedirectUrl: PropTypes.func.isRequired,
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

ApplicantForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};

export default withRedirect(ApplicantForm);
