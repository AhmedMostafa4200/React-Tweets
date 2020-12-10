import React, { useState } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

// import { getSearchBlogs } from "../actions/BlogAction";
// import { logOut } from "../actions/AuthAction";

// import { toast } from "react-toastify";

const NavBar = (props) => {
  // const [state, setState] = useState({
  //   searchBy: "",
  //   searchValue: "",
  // });
  // const { searchBy, searchValue } = state;
  // const handleSearchChange = (e) => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // };
  // const handleSearchingBy = (e) => {
  //   setState({ ...state, searchBy: e.target.value });
  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   props.getSearchBlogs(searchBy, searchValue);
  //   props.history.push("/searchblogs");
  // };

  // const handleShowingSearchToast = () => {
  //   if (searchBy === "") {
  //     toast("Please define the field you want to searchby!", {
  //       position: toast.POSITION.TOP_LEFT,
  //     });
  //   }
  // };

  // const handleLoggingOut = () => {
  //   props.logOut();
  //   localStorage.clear();
  //   window.location.replace("/explore");
  // };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{ backgroundColor: "#252525" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/explore">
                <i className="fab fa-slack-hash mr-2"></i>
                Explore
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
