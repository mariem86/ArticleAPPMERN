import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../js/actions/authAction";

const Navbar = ({ logout, auth: { isAuth, loading } }) => {
  const authLinks = (
    <ul>
      
      <li>
     
        <Link to="/articles">articles</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a href="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm"> Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
     

      <li>
        <Link to="/register">  Sign Up</Link>
      </li>
      <li>
        <Link to="/login">  Sign In</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
        <i class="fas fa-newspaper"></i> ArticleApp
        </Link>
      </h1>
      {!loading && <Fragment>{isAuth ? authLinks : guestLinks}</Fragment>}
    </nav>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
