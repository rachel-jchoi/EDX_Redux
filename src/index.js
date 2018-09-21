import React from "react";
import ReactDOM from "react-dom";

import SetUpRedux from "./set-up-redux";
import Actions from "./actions";
import Reducers from "./reducers";
import Store from "./store";
import Advanced from "./advanced";

const rootElement = document.getElementById("root");
ReactDOM.render(<Advanced />, rootElement);
