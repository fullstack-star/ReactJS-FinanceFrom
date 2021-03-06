import React, { Component } from "react";
import logo from "../images/Logo.png";
import Footer from "./../Footer";
import { NavLink } from 'react-router-dom';

class SignUpThree extends Component {
  render() {
    return (
      <body>
        <section>
          <div className="container-fluid">
            <div className="logo-section  text-center mt-3">
              <img width="100px" src={logo} alt={""} />
              <span className="tagline">Simple, fast, finance.</span>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-4">
                <div className="container mt-5">
                  <div className="signup-form-steps">
                    <div className="MuiPaper-root MuiPaper-elevation0 MuiStepper-root MuiStepper-horizontal MuiStepper-alternativeLabel">
                      <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                        <button
                          tabindex="0"
                          className="MuiButtonBase-root MuiStepButton-root"
                          type="button"
                        >
                          <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                            <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                              <svg
                                className="MuiSvgIcon-root c314 MuiStepIcon-root MuiStepIcon-active"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <circle cx="12" cy="12" r="12" />
                                <text
                                  className="c315"
                                  x="12"
                                  y="16"
                                  text-anchor="middle"
                                >
                                  1
                                </text>
                              </svg>
                            </span>
                            <span className="MuiStepLabel-labelContainer">
                              <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel MuiStepLabel-active">
                                1
                              </span>
                            </span>
                          </span>
                          <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                        </button>
                        <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                          <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
                        </div>
                      </div>
                      <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                        <button
                          tabindex="0"
                          className="MuiButtonBase-root MuiStepButton-root"
                          type="button"
                        >
                          <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                            <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                              <svg
                                className="MuiSvgIcon-root c314 MuiStepIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <circle cx="12" cy="12" r="12" />
                                <text
                                  className="c315"
                                  x="12"
                                  y="16"
                                  text-anchor="middle"
                                >
                                  2
                                </text>
                              </svg>
                            </span>
                            <span className="MuiStepLabel-labelContainer">
                              <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                                2
                              </span>
                            </span>
                          </span>
                          <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                        </button>
                        <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                          <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
                        </div>
                      </div>
                      <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                        <button
                          tabindex="0"
                          className="MuiButtonBase-root MuiStepButton-root"
                          type="button"
                        >
                          <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                            <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                              <svg
                                className="MuiSvgIcon-root c314 MuiStepIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <circle cx="12" cy="12" r="12" />
                                <text
                                  className="c315"
                                  x="12"
                                  y="16"
                                  text-anchor="middle"
                                >
                                  3
                                </text>
                              </svg>
                            </span>
                            <span className="MuiStepLabel-labelContainer">
                              <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                                3
                              </span>
                            </span>
                          </span>
                          <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                        </button>
                        <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                          <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
                        </div>
                      </div>
                      <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                        <button
                          tabindex="0"
                          className="MuiButtonBase-root MuiStepButton-root"
                          type="button"
                        >
                          <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                            <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                              <svg
                                className="MuiSvgIcon-root c314 MuiStepIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <circle cx="12" cy="12" r="12" />
                                <text
                                  className="c315"
                                  x="12"
                                  y="16"
                                  text-anchor="middle"
                                >
                                  4
                                </text>
                              </svg>
                            </span>
                            <span className="MuiStepLabel-labelContainer">
                              <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                                4
                              </span>
                            </span>
                          </span>
                          <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <h5 style={{ color: "#29262C" }}>Your Financial Status</h5>
                <br />
                <h6 style={{ color: "#29262C" }}>
                  What's your employment status?
                </h6>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    This dropdown's menu is right-aligned
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">
                      Action
                    </button>
                    <button class="dropdown-item" type="button">
                      Another action
                    </button>
                    <button class="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
                <h6 style={{ color: "#29262C" }}>
                  What's your annual income before tax?
                </h6>
                <div className="form-group">
                  <div className="second mt-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="£"
                    />
                  </div>
                </div>
                <h6 style={{ color: "#29262C" }}>Do you own your home?</h6>
                <div class="form-check mt-3">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="materialGroupExample1"
                    name="groupOfMaterialRadios"
                  />
                  <label class="form-check-label" for="materialGroupExample1">
                    Yes, outright owner
                  </label>
                </div>

                <div class="form-check mt-3">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="materialGroupExample1"
                    name="groupOfMaterialRadios"
                  />
                  <label class="form-check-label" for="materialGroupExample1">
                    Yes with mortgage
                  </label>
                </div>

                <div class="form-check mt-3 mb-3">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="materialGroupExample1"
                    name="groupOfMaterialRadios"
                  />
                  <label class="form-check-label" for="materialGroupExample1">
                    No
                  </label>
                </div>
                <h6 style={{ color: "#29262C" }}>
                  What is your monthly mortgage or rent contribution?
                </h6>
                <div className="form-group mt-2">
                  <div className="second">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="£"
                    />
                  </div>
                </div>
                <NavLink to="/SignUpFour">
                <a
                  title="Link to Find my quote"
                  className="btn find-my-quote text-center"
                  target="_blank"
                  style={{
                    color: " #212529",
                    backgroundColor: "#fff",
                    borderColor: "#fab62d",
                    marginBottom: "20px",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    fontWeight: "700",
                    borderWidth: "4px",
                    borderRadius: "2rem",
                    fontSize: " 1.4rem"
                  }}
                >
                  Next
                </a>
                </NavLink>
              </div>

              <div className="col-md-4" />
            </div>
          </div>
        </section>
        <Footer />
      </body>
    );
  }
}

export default SignUpThree;
