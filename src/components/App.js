import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <h1 data-ns-test="project-name" s>
        Project name
      </h1>
      <h2 data-ns-test="project-description">Project Description</h2>
    </div>
  );
};

export default App;
