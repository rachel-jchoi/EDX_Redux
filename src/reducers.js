import React from "react";
import { createStore, combineReducers } from "redux";

//const variable to hold action type
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

//action
var action = {
  type: ADD_ITEM,
  item: "apple"
};

//action creator
const addItem = item => {
  return {
    type: ADD_ITEM,
    item: item
  };
};
const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    index: 0
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

//dispatching actions
//store.dispatch(addItem('apple'))

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;
