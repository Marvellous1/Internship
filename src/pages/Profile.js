import React, { Component } from "react";
import Img from "../assets/img.png";

class Profile extends Component {
  render() {
    const { user } = this.props.data;
    return (
      <div className="container page-bg">
        {this.props.data && (
          <div className="row ">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src={Img} alt="" className="img-fluid mb-3" />
                      <button className="btn btn-primary btn-lg mb-3">
                        Edit Profile
                      </button>
                    </div>
                    <div className="col-md-8 pt-3">
                      <h3>{user.name}</h3>
                      <div className="mb-3">
                        <small className="text-primary">
                          <b>ABOUT</b>
                        </small>
                        <p>{user.about}</p>
                      </div>

                      <div className="mb-3">
                        <small className="text-primary">
                          <b>CONTACT</b>
                        </small>
                        <p>
                          <i
                            className="fa fa-map-marker mr-3 text-primary"
                            aria-hidden="true"
                          ></i>
                          {user.address}
                          <br />
                          <i
                            className="fa fa-phone mr-3 text-primary"
                            aria-hidden="true"
                          ></i>
                          {user.phone}
                        </p>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <small className="text-primary">
                              <b>LIKES</b>
                            </small>
                            <p>
                              {user.likes.map((element) => {
                                return (
                                  <span key={element}>
                                    {element}
                                    <br />
                                  </span>
                                );
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <small className="text-primary">
                              <b>DISLIKES</b>
                            </small>
                            <p>
                              {user.dislikes.map((element) => {
                                return (
                                  <span  key={element}>
                                    {element}
                                    <br />
                                  </span>
                                );
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
