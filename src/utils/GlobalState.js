import React, { Component } from "react";
import axios from "axios";
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
    // API.getPayload().then(res => {

      

      axios.get("http://127.0.0.1:5984/payload/6976a57acfd9281ace59ba77410001e4").then(response => {
        console.log(response);
        Object.keys(response.data).forEach(key => {
          let payload = this.state.payload;
          payload[key] = response.data[key];
          this.setState({
            payload
          });
        });

      // res.send({
      //   status: "Got payload",
      //   response: response.data
      // });
    });
      
      
      // Object.keys(res.data.response).forEach(key => {
      //   let payload = this.state.payload;
      //   payload[key] = res.data.response[key];
      //   this.setState({
      //     payload
      //   });
      // });

    // });
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
