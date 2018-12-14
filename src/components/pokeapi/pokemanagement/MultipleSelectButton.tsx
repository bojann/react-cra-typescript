import React from "react";
import PropTypes from "prop-types";

import "./MultipleSelectButton.scss";

interface Props {
  handleChangeCheckbox: (event: React.SyntheticEvent<HTMLInputElement>) => void
}

const MultipleSelectButton = (props: Props) => {
  return (
    <div className="poke-checkbox">
      <input
        id="multipoke"
        type="checkbox"
        onChange={props.handleChangeCheckbox}
      />
      <label htmlFor="multipoke">Select multiple pokemons</label>
    </div>
  );
};

MultipleSelectButton.propTypes = {
  handleChangeCheckbox: PropTypes.func
};

export default MultipleSelectButton;
