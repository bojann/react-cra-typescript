import React, { Component } from "react";
import CustomButton from "components/shared/buttons/CustomButton";

interface State {
  btnName: string;
  bsStyle: string;
  bsSize: string;
  isVisible: boolean;
}

class ButtonWidget extends Component<{}, State> {
  public state = {
    btnName: "Add Item",
    bsStyle: "primary",
    bsSize: "small",
    isVisible: false
  };
  public handleClickAddBtn = () => null;

  public render() {
    const btnStyle = {
      add: "add-button",
      remove: "remove-button",
      change: "change-button"
    };

    return (
      <div className="poke-btn-widget">
        <CustomButton
          {...this.state}
          className={btnStyle.add}
          handleClickEvent={this.handleClickAddBtn}
        >
          Add Item
        </CustomButton>
        <CustomButton {...this.state} handleClickEvent={this.handleClickAddBtn}>
          Remove Item
        </CustomButton>
        <CustomButton {...this.state} handleClickEvent={this.handleClickAddBtn}>
          Change Item
        </CustomButton>
      </div>
    );
  }
}

export default ButtonWidget;
