import React from "react";
import { Button, Sizes } from "react-bootstrap";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./CustomButton.scss";

interface Props {
  btnName: string,
  className: string,
  handleClickEvent: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  isDisabled : boolean,
  isVisible : boolean,
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
    handleClickEvent,
    isDisabled = true,
    isVisible = true,
    children,
    ...rest
  } = props;
  const classNamesArr = className ? className.split(" ") : [];
  const classConcat = classNamesArr.map(name => `${BASE_CLASS}--${name}`);

  const itemStyleClasses = classNames(
    BASE_CLASS,
    isVisible ? `${BASE_CLASS}--visible` : `${BASE_CLASS}--hidden`,
    classConcat
  );

  return (
    <Button
      className={itemStyleClasses}
      onClick={handleClickEvent}
      disabled={isDisabled}
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
