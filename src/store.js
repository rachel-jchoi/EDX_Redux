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
const deleteItem = index => {
  return {
    type: DELETE_ITEM,
    index: index
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

//store

var store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
//dispatching actions
// store.dispatch(addItem("apple"));
// store.dispatch(addItem("banana"));
// store.dispatch(addItem("carrot"));
// store.dispatch(deleteItem(1));

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;
