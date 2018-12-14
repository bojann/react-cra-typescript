import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import CustomButton from "components/shared/buttons/CustomButton";

interface Props {
  multiplePokemonsFlag: boolean;
  handleClickAddPokemon: (event: React.SyntheticEvent<HTMLSelectElement | EventTarget>) => void;
  "data-idname": string;
}

interface State {
  className: string,
  btnName: string,
  isVisible : boolean,
}

class ButtonAddItem extends PureComponent<Props, State> {
  public static propTypes = {
    multiplePokemonsFlag: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]),
    "data-idname": PropTypes.string
  };

  public state = {
    className: "add-button",
    btnName: 'Add Poke',
    isVisible : true
  };

  public render() {
    const dataIdName = this.props["data-idname"];
    const isDisabled = !this.props.multiplePokemonsFlag;

    return (
      <CustomButton
        isDisabled={isDisabled}
        data-idname={dataIdName}
        handleClickEvent={this.props.handleClickAddPokemon}
        bsStyle="primary"
        {...this.state}
      />
    );
  }
}

export default ButtonAddItem;
