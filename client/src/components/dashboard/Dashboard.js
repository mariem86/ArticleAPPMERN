import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


import Spinner from "../layout/Spinner";



const Dashboard = ({
  
  auth: { user,loading  },
  
}) => {
  

  return loading  ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard </h1>
      <p className="lead">
        <i className="fas fa-user" />
        Welcome {user && user.name}
      </p>
      <p className="lead">
      <i class='fas fa-envelope'/>
        {user && user.email}
      </p>
   
     
    </Fragment>
  );
};



const mapStateToProps = state => ({
 
  auth: state.auth
});

export default connect(mapStateToProps, null)(
  Dashboard
);
