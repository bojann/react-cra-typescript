import React, { Component } from "react";

import CustomButton from "components/shared/buttons/CustomButton";

interface Props {
  "data-idname": string;
  handleClickRemovePokemon: (event: React.SyntheticEvent<HTMLSelectElement | EventTarget>) => void;
}

interface State {
  className: string,
  btnName: string
}

class RemoveItemButton extends Component<Props, State> {
  public state = {
    className: "list-group-item__remove-button",
    btnName: "Remove Poke"
  };

  public render() {
    const dataIdName = this.props["data-idname"];
    const { handleClickRemovePokemon } = this.props;
    return (
      <CustomButton
        bsStyle="danger"
        data-idname={dataIdName}
        handleClickEvent={handleClickRemovePokemon}
        {...this.state}
      />
    );
  }
}

export default RemoveItemButton;
