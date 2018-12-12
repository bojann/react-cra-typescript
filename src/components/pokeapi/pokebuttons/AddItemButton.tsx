import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import CustomButton from "components/shared/buttons/CustomButton";

interface Props {
  selectMultiplePokemonFlag: boolean;
  handleClickAddPokemon: (
    event: React.SyntheticEvent<HTMLSelectElement>
  ) => void;
  "data-idname": number | string;
}

interface State {
  className: string;
  bsStyle: string;
  bsSize: string;
}

class ButtonAddItem extends PureComponent<Props, State> {
  public static propTypes = {
    selectMultiplePokemonFlag: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]),
    "data-idname": PropTypes.string
  };

  public state = {
    className: "add-button",
    bsStyle: "primary",
    bsSize: "small"
  };

  public render() {
    const dataIdName = this.props["data-idname"];
    const isDisabled = !this.props.selectMultiplePokemonFlag;
    const handleClickEvent = this.props.handleClickAddPokemon;

    return (
      <CustomButton
        {...this.state}
        isDisabled={isDisabled}
        data-idname={dataIdName}
        handleClickEvent={handleClickEvent}
      >
        Add Poke
      </CustomButton>
    );
  }
}

export default ButtonAddItem;
