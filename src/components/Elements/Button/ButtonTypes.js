import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//import { FaSave, FaRegEdit, FaArrowLeft,FaArrowRight } from 'react-icons/fa';
import * as FontAwesome from 'react-icons/fa';
import * as Ionicons from 'react-icons/io';
//import './buttonStyles.css';
import ButtonReact from 'react-bootstrap/Button';

const Button = (props) => {
  const btnClick = (event) => {
    event.preventDefault();
    props.onClick('ass');
  };

  let { btnClass, disabled, iconClass, visible } = props;
  //const noIcon = false;

  if (visible === undefined) {
    visible = true;
  }

  if (disabled === undefined) {
    disabled = false;
  }

  switch (props.value) {
    case 'save':
      btnClass = 'outline-primary';
      iconClass = FontAwesome['FaSave'];
      break;
    case 'update':
      btnClass = 'outline-warning';
      iconClass = FontAwesome['FaRegEdit'];
      break;
    case 'back':
      btnClass = 'info';
      iconClass = FontAwesome['FaArrowLeft'];
      break;
    case 'next':
      btnClass = 'info';
      iconClass = FontAwesome['FaArrowRight'];
      break;
    case 'view':
      btnClass = 'success';
      iconClass = Ionicons['IoIosEye'];
      break;
    case 'mail':
      btnClass = 'outline-success';
      iconClass = Ionicons['IoIosMailUnread'];
      break;
    default:
      iconClass = FontAwesome[iconClass];
  }

  return (
    <Fragment>
      {visible && (
        <ButtonReact
          variant={btnClass} //// check ko pa to
          onClick={btnClick}
          disabled={disabled}
        >
          {React.createElement(iconClass)}
          {'  '}
          {props.text}
        </ButtonReact>
      )}
    </Fragment>
  );
};

Button.propTypes = {
  btnClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  btnClass: 'outline-dark',
};

export default Button;
