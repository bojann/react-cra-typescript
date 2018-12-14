import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap/";

import withAuth from "components/contexts/user/withAuth";
import CustomButton from "components/shared/buttons/CustomButton";

import "./Login.scss";

interface Props {
  handleChangeUser: (event: React.FormEvent<FormControl>) => void,
  handleChangePassw: (event: React.FormEvent<FormControl>) => void,
  handleSubmitForm: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  validateForm: () => string | boolean,
  user: string,
  passw: string
}

class Login extends Component<Props> {
  public  render() {
    const {
      handleChangeUser,
      handleChangePassw,
      handleSubmitForm,
      validateForm,
      user,
      passw
    } = this.props;
    const isDisabled = !validateForm();

    return (
      <div className="login-container">
        <Grid>
          <Row>
            <Form
              horizontal={true}
              className="login-container-form"
              onSubmit={handleSubmitForm}
            >
              <FormGroup>
                <Col sm={12}>
                  <h3>Sign In please:</h3>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={2}>
                  <ControlLabel htmlFor="userName">User name:</ControlLabel>
                </Col>
                <Col sm={5}>
                  <FormControl
                    type="text"
                    id="userName"
                    value={user}
                    onChange={handleChangeUser}
                    onBlur={handleChangeUser}
                  />
                </Col>
                <FormGroup />
                <Col smOffset={2} sm={2}>
                  <ControlLabel htmlFor="userPassw">Password:</ControlLabel>
                </Col>
                <Col sm={5}>
                  <FormControl
                    type="text"
                    id="userPassw"
                    value={passw}
                    onChange={handleChangePassw}
                    onBlur={handleChangePassw}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col>
                  <CustomButton
                    bsSize="large"
                    type="submit"
                    isDisabled={isDisabled}
                    btnName="Sign in"
                    className=""
                    handleClickEvent={handleSubmitForm}
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
}

// @ts-ignore
export default withAuth(Login);
