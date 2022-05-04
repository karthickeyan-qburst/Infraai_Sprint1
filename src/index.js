import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "@aws-amplify/core";

Amplify.configure({
  Auth: {
    region:process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_AWS_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_WEB_CLIENT,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
