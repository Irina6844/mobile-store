import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const Layout = ({cartLength}) => {
  return (
    <>
      <Header cartLength={cartLength} />

      <Container maxWidth='xl'>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
