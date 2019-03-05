import React from "react";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import High from "../components/High";
import Scientific from "../components/Scientific";
import Footer from "../components/Footer";
import Strength from "../components/Strength";
import Sports from "../components/Sports";
import HomePage from "../views/HomePage";
import { GlobalState } from "../utils/GlobalState";
import Copyright from "../components/Copyright";
import ScrollButton from "../components/ScrollUpButton"

const Router = () => (
  <GlobalState>
    {global => (
      <BrowserRouter>
        <div>
          <Navigation 
            links={[
                    {
                      label: "High Performance Coaching",
                      route: "/services/high-performance-coaching"
                    },
                    {
                      label: "Scientific Assessment",
                      route: "/services/scientific-assessment"
                    },
                    {
                      label: "Strength & Conditioning",
                      route: "/services/strength-conditioning"
                    },
                    {
                      label: "Sports Nutrition & Psychology",
                      route: "/services/nutrition"
                    }
                  ]
            }
          />
          <Switch>                
            <Route exact path="/" component={HomePage} />
            <Route exact path="/services/high-performance-coaching" component={High} />
            <Route exact path="/services/scientific-assessment" component={Scientific} />
            <Route exact path="/services/strength-conditioning" component={Strength} />
            <Route exact path="/services/nutrition" component={Sports} />
          </Switch>
          {global.payload.pages && 
            global.payload.pages.filter(page => Object.keys(page) == "homePage").map((page,index)=>
                page.homePage.map((hp,key)=>
                    hp.sections.map((section,index)=>
                       (
                        <React.Fragment>
                        {
                              section.id == 7 && <Footer content={section}/>
                            } 
                        </React.Fragment> 
                        )   
                      )
                  )
              )  
          }                
          <Copyright/>
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div>
      </BrowserRouter>
    )}
  </GlobalState>
);

export default Router;
