import { CssBaseline } from "@material-ui/core";
import React, { ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <header>
      <Header title={title}></Header>
    </header>
    {children}
    <footer>{/* <hr />
      <span>I'm here to stay (Footer)</span> */}</footer>
  </div>
);

export default Layout;
