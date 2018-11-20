import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import HomePage from "../components/HomePage";
import { GlobalState } from "../utils/GlobalState";

const Router = () => (
  <GlobalState>
    {global => (
      <BrowserRouter>
        <div>
          <Navigation
            links={[
              {
                label: "Images",
                route: "/images"
              },
              {
                label: "Videos",
                route: "/videos"
              }
            ]}
          />

          <HomePage />
        </div>
      </BrowserRouter>
    )}
  </GlobalState>
);

export default Router;
