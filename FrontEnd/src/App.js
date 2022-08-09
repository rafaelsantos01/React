import React from "react";
import Header from "./Components/Headers";
import Headers from "./Components/Headers";

export default function App() {
  return (
    <>
      <Header title="Home Page">
        <ul>
          <li>Home Page</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Home Page</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}
