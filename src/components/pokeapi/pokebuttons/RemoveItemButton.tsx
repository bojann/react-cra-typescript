import React, { Component } from "react";

import CustomButton from "components/shared/buttons/CustomButton";

interface Props {
  "data-idname": string | number;
  handleClickRemovePokemon: (
    event: React.SyntheticEvent<HTMLSelectElement>
  ) => void;
}

interface State {
  className: string;
  bsStyle: string;
  bsSize: string;
  isDisabled: boolean;
}

class RemoveItemButton extends Component<Props, State> {
  public state = {
    className: "remove-button",
    bsStyle: "danger",
    bsSize: "small",
    isDisabled: false
  };

  public render() {
    const dataIdName = this.props["data-idname"];
    const { handleClickRemovePokemon } = this.props;
    return (
      <CustomButton
        {...this.state}
        data-idname={dataIdName}
        handleClickEvent={handleClickRemovePokemon}
      >
        Remove Poke
      </CustomButton>
    );
  }
}

export default RemoveItemButton;
