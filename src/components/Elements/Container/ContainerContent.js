import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonForm from '../../Pages/ButtonForm';
import InputForm from './../../Pages/InputForm';
import CardContent from '../Cards/CardContent';

import DropdownForm from '../../Pages/DropdownForm';

import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

import Button from 'react-bootstrap/Button';

const ContainerContent = () => {
  const [open, setOpen] = useState(false);

  const contentOne = {
    header: 'Page 1 Home',
    title: 'Special title treatment',
    text:
      'With supporting text below as a natural lead-in to additional content.',
    footer: '1 days ago',
  };
  const contentTwo = {
    header: 'Page 2 Featured',
    title: 'What the Fuck??',
    text: 'Show some content here.',
    footer: '2 days ago',
  };
  return (
    <Container>
      <h2>React Reusable Form Component</h2>
      <hr />
      <Row>
        <Col sm={6}>
          <InputForm />
        </Col>
        <Col sm={6}>
          <DropdownForm />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <Button onClick={() => setOpen(!open)}>Click</Button>
          <SlideDown>
            {open ? (
              <CardContent
                className={'my-dropdown-slidedown'}
                data={contentOne}
              />
            ) : (
              <CardContent
                className={'my-dropdown-slidedown'}
                data={contentTwo}
              />
            )}
          </SlideDown>
        </Col>
        <Col sm={4}>
          <ButtonForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerContent;
