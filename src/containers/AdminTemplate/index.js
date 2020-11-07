import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "./../../components/NavbarAdmin";

function AdminLayout(props) {
  return (
    <div>
      <NavbarAdmin />
      {props.children}
    </div>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(props_component) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...props_component} />
            </AdminLayout>
          );
        }
        //Neu user vao page ma ko dang nhap thi redirect ve trang dang nhap
        return <Redirect to="/auth" />;
      }}
    />
  );
}
