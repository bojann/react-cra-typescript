import React from "react";
import { Button, Sizes } from "react-bootstrap";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./CustomButton.scss";

interface Props {
  btnName: string,
  handleClickEvent?: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  className?: string,
  disabled? : boolean,
  isVisible? : boolean,
  bsStyle?: "success" | "warning" | "danger" | "info" | "default" | "primary" | "link",
  bsSizes?: Sizes,
  type?: string,
  children?: JSX.Element,
  rest?: any[]
}

const CustomButton = (props: Props) => {
  const BASE_CLASS = "poke-button";
  const {
    btnName,
    className,
    handleClickEvent= () => {},
    isVisible,
    children,
    ...rest
  } = props;
  const classNamesArr = className ? className.split(" ") : [];
  // const classConcat = classNamesArr.map(name => `${name}`);
  let itemStyleClasses = classNames(
    BASE_CLASS,
    classNamesArr
  );

  if(isVisible) {
    itemStyleClasses = classNames(
      isVisible ? `${BASE_CLASS}--visible` : `${BASE_CLASS}--hidden`
    );
  } 

  return (
    <Button
      className={itemStyleClasses}
      onClick={handleClickEvent}
      {...rest}
    >
      {btnName ? btnName : children}
    </Button>
  );
};

CustomButton.propTypes = {
  bsSize: PropTypes.string,
  bsStyle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  "data-idname": PropTypes.string,
  handleClickEvent: PropTypes.func,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default CustomButton;
