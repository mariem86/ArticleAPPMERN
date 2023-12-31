import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  if(isAuth){
   return  <Redirect to="/dashboard" />
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">articleApp</h1>
          <p className="lead">
            Create a  article 
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
            Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
