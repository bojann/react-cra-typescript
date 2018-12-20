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
import { Link } from "@reach/router";

import withAuth from "components/contexts/user/withAuth";
import CustomButton from "components/shared/buttons/CustomButton";

import "./Login.scss";

interface Props {
  handleChangeUser: (event: React.FormEvent<FormControl>) => void,
  handleChangePassw: (event: React.FormEvent<FormControl>) => void,
  handleSubmitForm:() => void,
  validateForm: () => string | boolean,
  email: string,
  password: string
}

const Login = (props:Props) => {
  const {
    handleChangeUser,
    handleChangePassw,
    handleSubmitForm,
    validateForm,
    email,
    password
  } = props;
  const isDisabled = !validateForm();
  
  const handleSigninForm = (ev: React.SyntheticEvent<EventTarget>) => {
    ev.preventDefault();
    // @ts-ignore
    const xxx = handleSubmitForm;
  };

  return (
    <div className="login-container">
      <Grid>
        <Row>
          <Form
            horizontal={true}
            className="login-container-form"
            onSubmit={handleSigninForm}
          >
            <FormGroup>
              <Col sm={12}>
                <h3>Sign In please:</h3>
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
              <Col>
                <CustomButton
                  bsSize="large"
                  bsStyle="warning"
                  type="submit"
                  disabled={isDisabled}
                  btnName="Log In"
                  handleClickEvent={handleSigninForm}
                  isVisible={true}
                />
                <Link to="/signup">
                  <CustomButton
                    bsSize="large"
                    bsStyle="info"
                    disabled={false}
                    btnName="Sign Up"
                    isVisible={true}
                  />                    
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </Row>
      </Grid>
    </div>
  );
}

export default withAuth(Login);
