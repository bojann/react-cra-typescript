import React from "react";
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import withAuth from "components/contexts/user/withAuth";
import CustomButton from "components/shared/buttons/CustomButton";
import { registerUser } from "services/userService";

import "./Signup.scss";

interface Props {
  handleChangeUser: (event: React.FormEvent<FormControl>) => void,
  handleChangePassw: (event: React.FormEvent<FormControl>) => void,
  handleChangeCity: (event: React.FormEvent<FormControl>) => void,
  handleChangePhone: (event: React.FormEvent<FormControl>) => void,
  handleChangeLanguage: (event: React.FormEvent<FormControl>) => void,
  handleSubmitForm: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  validateForm: () => string | boolean,
  email: string,
  password: string,
  lang: string,
  phone: string,
  city: string
}
 const Signup = (props:Props) => {
   const {
     handleChangeUser,
     handleChangePassw,
     handleChangeCity,
     handleChangePhone,
     handleChangeLanguage,
     handleSubmitForm,
     validateForm,
     email,
     password,
     phone,
     city,
     lang = "en"
   } = props;
   const isDisabled = !validateForm();
   
    const handleSignupForm = (ev: React.SyntheticEvent<EventTarget>) => {
      ev.preventDefault();
      // let isLogged = false;
      const state = {
        email,
        password,
        lang,
        phone,
        city,
      };

      registerUser(state)
        .then( (response: any) => {
          console.log("%c  BA :********* ","background: orange;", response);
        })

      // @ts-ignore
      const xxx = handleSubmitForm;
    }

    return (
      <div className="login-container">
        <Grid>
          <Row>
            <Form
              horizontal={true}
              className="login-container-form"
              onSubmit={handleSignupForm}
            >
              <FormGroup>
                <Col sm={12}>
                  <h3>Register new user:</h3>
                </Col>
              </FormGroup>
    
              <FormGroup>
                <Col xs={12} sm={2} componentClass={ControlLabel}>
                  User email:
                </Col>
                <Col xs={12} sm={5} className="nameInput">
                  <FormControl
                    type="text"
                    id="userName"
                    value={email}
                    onChange={handleChangeUser}
                    onBlur={handleChangeUser}
                  />
                </Col>
              </FormGroup>
    
              <FormGroup>
                <Col xs={12} sm={2} componentClass={ControlLabel}>
                  Password:
                </Col>
                <Col xs={12} sm={5} className="passwInput">
                  <FormControl
                    type="text"
                    id="userPassw"
                    value={password}
                    onChange={handleChangePassw}
                    onBlur={handleChangePassw}
                  />
                </Col>
              </FormGroup>
              
              <FormGroup>
                <Col xs={12} sm={2} componentClass={ControlLabel}>
                  City:
                </Col>
                <Col xs={12} sm={5} className="passwInput">
                  <FormControl
                    type="text"
                    id="userCity"
                    value={city}
                    onChange={handleChangeCity}
                    onBlur={handleChangeCity}
                  />
                </Col>
              </FormGroup>
              
              <FormGroup>
                <Col xs={12} sm={2} componentClass={ControlLabel}>
                  Telephone:
                </Col>
                <Col xs={12} sm={5} className="passwInput">
                  <FormControl
                    type="text"
                    id="userPhone"
                    value={phone}
                    onChange={handleChangePhone}
                    onBlur={handleChangePhone}
                  />
                </Col>
              </FormGroup>
              
              <FormGroup>
                <Col xs={12} sm={2} componentClass={ControlLabel}>
                  Language:
                </Col>
                <Col xs={12} sm={5} className="passwInput">
                  <FormControl
                    type="text"
                    id="lang"
                    value={lang}
                    onChange={handleChangeLanguage}
                    onBlur={handleChangeLanguage}
                  />
                </Col>
              </FormGroup>
    
              <FormGroup>
                <Col>
                  <CustomButton
                    bsSize="large"
                    bsStyle="warning"
                    type="submit"
                    disabled={isDisabled}
                    btnName="Submit"
                    handleClickEvent={handleSignupForm}
                    isVisible={true}
                  />
                </Col>
              </FormGroup>
            </Form>
          </Row>
        </Grid>
      </div>
    );
}

export default withAuth(Signup);
