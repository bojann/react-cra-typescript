import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import MultipleSelectButton from "components/pokeapi/pokemanagement/MultipleSelectButton";
import CompareButton from "components/pokeapi/pokemanagement/CompareButton";

import "./PokeToolbar.scss";

interface Props {
  handleChangeCheckbox: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  selectedItems: string[],
  multiplePokemonsFlag: boolean,
  handleClickBtnCompare: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
}

class PokeToolbar extends PureComponent<Props> {
  public static propTypes = {
    handleChangeCheckbox: PropTypes.func,
    selectedItems: PropTypes.array,
    handleClickBtnCompare: PropTypes.func,
    multiplePokemonsFlag: PropTypes.bool
  };
  
  public render() {
    return (
      <div className="poke-toolbar">
        <MultipleSelectButton
          handleChangeCheckbox={this.props.handleChangeCheckbox}
        />
        <CompareButton
          selectedItems={this.props.selectedItems}
          handleClickBtnCompare={this.props.handleClickBtnCompare}
          multiplePokemonsFlag={this.props.multiplePokemonsFlag}
        />
      </div>
    );
  }
}

export default PokeToolbar;
