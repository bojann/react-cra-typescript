/* tslint:disable no-empty */
import React, { Component } from "react";
import { navigate } from "@reach/router";
// import { registerUser, loginUser, updateUser, logoutUser, getUserProfile } from "services/userServices";

interface Profile {
  email: string,
  password: string,
  lang?: string,
  phone?: string | number,
  city?: string
}

interface State {
  isUserLogged: boolean,
  handleSubmitForm: () => void,
  handleChangeUser: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  handleChangePassw: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  handleChangeCity: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  handleChangePhone: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  handleChangeLanguage: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  validateForm: () => string | boolean,
  handleSignOut: (event: React.SyntheticEvent<HTMLSelectElement>) => void,
}


export const LoginContext = React.createContext({
  email: "",
  password: "",
  lang: "",
  phone: "",
  city: "",
  isUserLogged: false,
  handleSubmitForm() {},
  handleChangeUser() {},
  handleChangePassw() {},
  validateForm() {},
  handleSignOut() {},
  handleChangeCity() {},
  handleChangePhone() {},
  handleChangeLanguage() {},
});

export class LoginContextProvider extends Component<{}, State & Profile> {
  public constructor(props = {}) {
    super(props);

    this.state = {
      email: "",
      password: "",
      lang: "en",
      phone: "",
      city: "",
      isUserLogged: false,
      handleSubmitForm: this.handleSubmitForm,
      handleChangeUser: this.handleChangeUser,
      handleChangePassw: this.handleChangePassw,
      handleChangeCity: this.handleChangeCity,
      handleChangePhone: this.handleChangePhone,
      handleChangeLanguage: this.handleChangeLanguage,
      validateForm: this.validateForm,
      handleSignOut: this.handleSignOut
    };
  }

  public validateForm = () => {
    return this.state.email && this.state.password;
  };

  public handleSubmitForm = () => {
    
    
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
    const email = target.value;
    if(!email) { return; }
    
    this.setState(() => {
      return {
        email: email
      };
    }, this.validateForm);
  };

  public handleChangePassw = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const userPassw = target.value;
    if(!userPassw) { return; }
    
    this.setState(() => {
      return {
        password: userPassw
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


  public handleChangeCity = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const userCity = target.value;
    if(!userCity) { return; }

    this.setState(() => {
      return {
        city: userCity
      };
    }, this.validateForm);
  };
  public handleChangePhone = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const userPhone = target.value;
    if(!userPhone) { return; }

    this.setState(() => {
      return {
        phone: userPhone
      };
    }, this.validateForm);
  };
  public handleChangeLanguage = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const userLang = target.value;
    if(!userLang) { return; }

    this.setState(() => {
      return {
        lang: userLang
      };
    }, this.validateForm);
  };

  public render() {
    return (
      // @ts-ignore
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
