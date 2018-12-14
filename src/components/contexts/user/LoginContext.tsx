/* tslint:disable no-empty */
import React, { Component } from "react";
import { navigate } from "@reach/router";

interface State {
  user: string,
  passw: string,
  isUserLogged: boolean,
  handleSubmitForm: (event: React.SyntheticEvent<HTMLSelectElement>) => void,
  handleChangeUser: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  handleChangePassw: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  validateForm: () => string | boolean,
  handleSignOut: (event: React.SyntheticEvent<HTMLSelectElement>) => void,
}


export const LoginContext = React.createContext({
  user: "",
  passw: "",
  isUserLogged: false,
  handleSubmitForm(event: React.SyntheticEvent<HTMLSelectElement>) {},
  handleChangeUser(event: React.SyntheticEvent<HTMLInputElement>){},
  handleChangePassw(event: React.SyntheticEvent<HTMLInputElement>){},
  validateForm(){},
  handleSignOut(event: React.SyntheticEvent<HTMLSelectElement>){},
});

export class LoginContextProvider extends Component<{}, State> {
  public constructor(props = {}) {
    super(props);

    this.state = {
      user: "",
      passw: "",
      isUserLogged: false,
      handleSubmitForm: this.handleSubmitForm,
      handleChangeUser: this.handleChangeUser,
      handleChangePassw: this.handleChangePassw,
      validateForm: this.validateForm,
      handleSignOut: this.handleSignOut
    };
  }

  public validateForm = () => {
    return this.state.user && this.state.passw;
  };

  public handleSubmitForm = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    ev.preventDefault();
    this.setState(
      () => {
        return {
          isUserLogged: true
        };
      },
      () => {
        navigate("/pokemons");
      }
    );
  };

  public handleChangeUser = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const username = target.value;
    if(!username) { return; }
    
    this.setState(() => {
      return {
        user: username
      };
    }, this.validateForm);
  };

  public handleChangePassw = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const userPassw = target.value;
    if(!userPassw) { return; }
    
    this.setState(() => {
      return {
        passw: userPassw
      };
    }, this.validateForm);
  };

  public handleSignOut = () => {
    this.setState(
      () => {
        return {
          isUserLogged: false
        };
      },
      () => {
        navigate("/login");
      }
    );
  };

  public render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
