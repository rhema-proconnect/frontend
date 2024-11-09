import React from "react";
import { Routes, Navigate } from "react-router-dom";

const FreeRoute = ({ component: Component, ...rest }) => {
  if (localStorage.getItem("token")) return <Navigate push to="/boards" />;
  return (
    <Routes
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default FreeRoute;
