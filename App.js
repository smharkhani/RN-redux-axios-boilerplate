import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Home from "./src/component/Home";
import HomeComponents from "./src/component/HomeComponents";
import { Demo } from "./src/demo/Demo";
import configureStore from "./src/redux/store/store";

let { store, persistor } = configureStore();

export default class App extends Component {

  render() {
    return (
      // <Demo />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomeComponents />
        </PersistGate>
      </Provider>
    );
  }
}