import React, { Component } from "react";
import { Link } from "@reach/router";

import withAuth from "components/contexts/user/withAuth";
import CustomButton from "components/shared/buttons/CustomButton";

import "./Navigation.scss";

interface Props {
  isUserLogged: boolean,
  handleSignOut: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void
}

class Navigation extends Component<Props> {
  public render() {
    const { isUserLogged, handleSignOut } = this.props;

    return (
      <nav className="navigation">
        <Link to="pokemons">Pokemons</Link>
        <Link to="blizzard">World of Warcraft</Link>
        <Link to="login">
          <CustomButton
            bsStyle="warning"
            handleClickEvent={handleSignOut}
            isVisible={true}
            isDisabled={false}
            btnName={isUserLogged ? "Sign Out" : "Login"}
            className=""
          />
        </Link>
      </nav>
    );
  }
}

// @ts-ignore
export default withAuth(Navigation);
