import React, { Component } from "react";
import Aside_bar from "./Aside_bar";
import { getProfile } from "./auth/UserFunctions";
import axios from "axios";

export class Admin_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: "",
    };
  }

  componentDidMount() {
    getProfile().then((res) => {
      console.log(this.state.id);

      axios
        .get(`https://oofood.herokuapp.com/api/getprofile/${res.id}`)
        .then((res) => {
          this.setState({
            data: res.data,
          });
          console.log(this.state.data);
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        id: res.id,
        name: res.name,
        email: res.email,
      });
    });
  }

  deleteOrder = (id) => {
    axios
      .delete(`https://oofood.herokuapp.com/api/destroy/${id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });

    getProfile().then((res) => {
      console.log(this.state.id);

      axios
        .get(`https://oofood.herokuapp.com/api/getprofile/${res.id}`)
        .then((res) => {
          this.setState({
            data: res.data,
          });
          console.log(this.state.data);
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        id: res.id,
        name: res.name,
        email: res.email,
      });
    });
  };

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
              Company name
            </a>
            <button
              className="navbar-toggler position-absolute d-md-none collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <input
              className="form-control form-control-dark w-100"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <div className="row">
              <Aside_bar />

              <main
                role="main"
                className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
              >
                <div className="col-md-6 "></div>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin_profile;
