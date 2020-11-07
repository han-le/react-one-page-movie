/*
_ Day la component lon nhat cua HomeTemplate
_ Su dung: HOC (High Order Component)
_ Muc dich: Tu day se che nhanh ra 1 cai la Admin Page, 1 cai la HomePage
_ Chua tat ca Routes cua HomeTemplate
*/

import React from "react";
import { Route } from "react-router-dom";
import NavBarHome from "./../../components/NavBarHome";

//Tao component
function HomeLayout(props) {
  //{props.Children} truyen nguyen cuc html
  return (
    <div>
      <NavBarHome />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  //   Cach 1: const { exact, path, Component } = props;
  // ...props: nhung item con lai ngoai tru Component

  //   return <Route exact={exact} path={path} component={Component} />;

  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
}
