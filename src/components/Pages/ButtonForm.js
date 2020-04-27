import React, { useState, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '../Elements/Button/ButtonTypes';

const ButtonForm = () => {
  const [btnAble, setBtnAble] = useState(false);
  const [btnHide, setBtnHide] = useState(true);

  // const ShitClick = (event) => {
  //   const id = event.target.value;
  //   const ids = event.target.id;
  //   console.log(id, ids);
  // };

  const eventClick = (data) => {
    //setClick(!click);
    console.log(data);
    alert('Button Clicked');
    setBtnHide(false);
  };

  const eventGoClick = (action) => {
    console.log(action);
    alert('Go action Clicked');
    setBtnAble(true);
  };

  return (
    <Fragment>
      <Row>
        <Col sm={4}>
          <Button value="back" text="Back" onClick={eventGoClick} />
        </Col>
        <Col sm={4}>
          <Button
            value="next"
            text="Next"
            visible={btnHide}
            onClick={eventClick}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={8}>
          <Button
            value="save"
            text="Save Comments"
            webservice="true"
            disabled={btnAble}
            onClick={eventClick}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Button
            value="update"
            text="Update Comments"
            webservice="true"
            disabled={btnAble}
            onClick={eventClick}
          />
        </Col>

        <Col sm>
          <Button value="view" text="View Data" onClick={eventClick} />
          <Button value="mail" text="Post Email" onClick={eventClick} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default ButtonForm;
