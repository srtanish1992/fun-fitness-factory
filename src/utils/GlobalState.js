import React, { Component } from "react";

import API from "../utils/API";

const AppContext = React.createContext();
const GlobalState = AppContext.Consumer;

class AppProvider extends Component {
  constructor() {
    super();
    this.state = {
      // config,
      payload: {},
      pourPayload: (key, val, callback) => this.pourPayload(key, val, callback)
    };
  }

  pourPayload = (key, val, callback) => {
    let payload = this.state.payload;
    payload[key] = val;
    this.setState(
      {
        payload
      },
      () => {
        // eslint-disable-next-line
        callback && callback;
      }
    );
  };

  componentDidMount() {
    API.getPayload().then(res => {
      console.log(res);
      Object.keys(res.data.payload).forEach(key => {
        let payload = this.state.payload;
        payload[key] = res.data.payload[key];
        this.setState({
          payload
        });
      });
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const App = ({ children }) => <AppProvider>{children}</AppProvider>;

export { App, AppProvider, AppContext, GlobalState };
