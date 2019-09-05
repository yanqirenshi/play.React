import React from "react";
import { render } from "react-dom";
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = { message: "hello redux." };
const store = createStore(
  (state = initialState) =>({ ...state }), initialState
);

const App = (props) => (<div>{props.message}</div>);

const ReduxApp = connect((state) => ({ message: state.message }))(App);

render(<Provider store={store}><ReduxApp /></Provider>, document.getElementById("content"));
