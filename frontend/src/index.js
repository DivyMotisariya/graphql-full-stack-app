import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://7sgx4.sse.codesandbox.io",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
