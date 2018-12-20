import React, { Component } from "react";
import CustomButton from "components/shared/buttons/CustomButton";

interface State {
  isVisible: boolean,
  disabled : boolean,
}

const BTN_STYLE = {
  add: "add-button",
  remove: "remove-button",
  change: "change-button"
};

class ButtonWidget extends Component<{}, State> {
  public state = {
    isVisible: false,
    disabled : false,
  };
  public handleClickAddBtn = () => null;

  public render() {
    return (
      <div className="poke-btn-widget">
        <CustomButton
          handleClickEvent={this.handleClickAddBtn}
          bsStyle="primary"
          btnName="Add Item"
          bsSize="small"
          className={BTN_STYLE.add}
          {...this.state}
        />
        <CustomButton 
          handleClickEvent={this.handleClickAddBtn}
          btnName="Remove Item"
          bsStyle="primary"
          bsSize="small"
          className={BTN_STYLE.add}
          {...this.state}
        />
        <CustomButton 
          handleClickEvent={this.handleClickAddBtn}
          btnName="Change Item"
          bsStyle="primary"
          bsSize="small"
          className={BTN_STYLE.add}
          {...this.state}
        />
      </div>
    );
  }
}

export default ButtonWidget;
