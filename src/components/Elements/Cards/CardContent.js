import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const CardContent = (props) => {
  return (
    <Fragment>
      <Card className="text-center">
        <Card.Header>{props.data.header}</Card.Header>
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.text}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{props.data.footer}</Card.Footer>
      </Card>
      <br />
    </Fragment>
  );
};

export default CardContent;
