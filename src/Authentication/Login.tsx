import React, {useEffect, useState, useTransition} from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';
import {Link, useNavigate, useLocation} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";
import {useTranslation} from "react-i18next";
import {get} from "lodash";
import Actions from "../redux/auth/Actions";
import {DispatchInterface} from "../core/interfaces/dispatch.interface";

const SignIn = ({
                  loginRequest,
                  isFetched,
                  token,
                  checkAuthRequest}: any) => {
  const {t, i18n} = useTranslation(['auth', 'common']);
  const navigate = useNavigate();
  const [data, setData] = useState({
    user: "Admin",
    password: "",
  });

  const {user, password} = data;

  useEffect(() => {
      checkAuthRequest({token});
  }, [])

  useEffect(() => {
    if (token) {
      checkAuthRequest({token});
      routeChange();
    }
  }, [token])

  const changeHandler = (e: any) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const routeChange = () => {
    let path = `/dashboard/dashboard-1/`;
    navigate(path);
  }

  const Login = (e: any) => {
    e.preventDefault();
    loginRequest({user, password});
  }

  return (
      <React.Fragment>
        <div className="square-box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="page bg-primary">
          <div className="page-single">
            <div className="container" style={{marginTop: "89px"}}>
              <Row>
                <Col
                    xl={5}
                    lg={6}
                    md={8}
                    sm={8}
                    xs={10}
                    className="card-sigin-main mx-auto my-auto py-4 justify-content-center"
                >
                  <div className="card-sigin">
                    {/* <!-- Demo content--> */}
                    <div className="main-card-signin d-md-flex">
                      <div className="wd-100p">
                        <div className="d-flex mb-4">
                          <Link to="#">
                            <img
                                src={require("../assets/img/brand/favicon.png")}
                                className="sign-favicon ht-40"
                                alt="logo"
                            />
                          </Link>
                        </div>
                        <div className="">
                          <div className="main-signup-header">
                            <h2>Welcome back!</h2>
                            <h6 className="font-weight-semibold mb-4">
                              Please sign in to continue.
                            </h6>
                            <div className="panel panel-primary">
                              <div className=" tab-menu-heading mb-2 border-bottom-0">
                                <div className="tabs-menu1">
                                  <Form>
                                    <Form.Group className="form-group">
                                      <Form.Label className=''>{t('Username', {ns: 'auth'})}</Form.Label>{" "}
                                      <Form.Control
                                          className="form-control"
                                          placeholder={t('Enter your username', {ns: 'auth'}) || ''}
                                          name="user"
                                          type='text'
                                          value={user}
                                          onChange={changeHandler}
                                          required
                                      />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                      <Form.Label>{t('Password', {ns: 'auth'})}</Form.Label>{" "}
                                      <Form.Control
                                          className="form-control"
                                          placeholder={t('Enter your password', {ns: 'auth'}) || ''}
                                          name="password"
                                          type='password'
                                          value={password}
                                          onChange={changeHandler}
                                          required
                                      />
                                    </Form.Group>
                                    <Button
                                        variant=""
                                        type='submit'
                                        className="btn btn-primary btn-block"
                                        onClick={Login}
                                    >
                                      {t('Sign In', {ns: 'auth'})}
                                    </Button>
                                  </Form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </React.Fragment>
  );
}

const mapState = (state: any) => {
  return {
    token: get(state, 'auth.token', null),
    isFetched: get(state, 'auth.isFetched', false),
  }
}

const mapDispatch = (dispatch: (config: DispatchInterface) => {}) => {
  return {
    loginRequest: ({user = '', password = ''}) => dispatch({
      type: Actions.LOGIN.REQUEST,
      payload: {user, password}
    }),
    checkAuthRequest: ({token = ''}) => dispatch({
      type: Actions.CHECK_AUTH.REQUEST,
      payload: {token}}
    ),
  }
}

const connector = connect(mapState, mapDispatch);

export default connector(SignIn);
