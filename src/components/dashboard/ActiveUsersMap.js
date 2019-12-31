import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CustomInput
} from 'reactstrap';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/world';
import { activeUserByCountry } from '../../data/dashboard/activeUsers';

const chartOption = {
  tooltip: {
    show: true,
    trigger: 'item',
    backgroundColor: '#f9fafd',
    textStyle: {
      color: '#000'
    },
    formatter: function({ name, value }) {
      return `<strong>${name}</strong><br/>Active user: ${value ? `${Math.round(value / 10000)}` : 0}`;
    }
  },
  visualMap: {
    min: 0,
    max: 100000,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['#d8e2ef', '#2d7bcd']
    }
  },
  series: [
    {
      type: 'map',
      mapType: 'world',
      roam: true,
      zoom: 1.25,
      scaleLimit: {
        min: 0.9,
        max: 17
      },
      itemStyle: {
        normal: {
          borderColor: '#d8e2ef',
          borderWidth: 0.5,
          areaStyle: {
            color: '#d8e2ef'
          }
        },
        emphasis: {
          areaColor: '#0443a2',
          borderColor: '#d8e2ef',
          label: {
            show: false,
            color: '#fff'
          }
        }
      },
      data: activeUserByCountry
    }
  ]
};

const ActiveUsersMap = () => {
  const [duration, setDuration] = useState('week');

  return (
    <Card className="h-100 mt-3 mt-lg-0">
      <CardHeader className="bg-light d-flex justify-content-between">
        <h5 className="mb-0">Active users</h5>
        <UncontrolledDropdown className="text-sans-serif">
          <DropdownToggle color="link" size="sm" className="text-600 dropdown-caret-none" boundary="viewport">
            <FontAwesomeIcon icon="ellipsis-h" className="fs--1" />
          </DropdownToggle>
          <DropdownMenu className="border py-0" right>
            <div className="bg-white py-2">
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Move</DropdownItem>
              <DropdownItem>Resize</DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="text-warning">Archive</DropdownItem>
              <DropdownItem className="text-danger">Delete</DropdownItem>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody className="p-3 overflow-hidden">
        <ReactEchartsCore echarts={echarts} option={chartOption} style={{ width: '100%', height: 420 }} />
      </CardBody>
      <CardFooter className="bg-light">
        <Row className="justify-content-between">
          <Col xs="auto">
            <CustomInput
              type="select"
              bsSize="sm"
              id="selectDuration"
              value={duration}
              onChange={({ target }) => setDuration(target.value)}
            >
              <option value="week">Last 7 days</option>
              <option value="month">Last month</option>
              <option value="year">Last year</option>
            </CustomInput>
          </Col>
          <Col xs="auto">
            <Button color="falcon-default" size="sm">
              <span className="d-none d-sm-inline-block mr-1">Location</span>Overview
              <FontAwesomeIcon icon="chevron-right" className="ml-1 fs--1" />
            </Button>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default ActiveUsersMap;
