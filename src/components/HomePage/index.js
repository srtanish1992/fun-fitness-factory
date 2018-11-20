import React from "react";
import { GlobalState } from "../../utils/GlobalState";
import { HomePageImage, Image, DivBlock } from "./styled";

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomePageImage>
          <Image />
        </HomePageImage>
        <GlobalState>
          {global =>
            global.payload.steps &&
            global.payload.steps.map((step, index) =>
              step.sections.map(
                section =>
                  section.layout === "formBlock" ? (
                    section.paras.map((para, index) => (
                      <React.Fragment>
                        <DivBlock>
                          {index === 0 ? (
                            <h3 key={index}>{section.title}</h3>
                          ) : (
                            ""
                          )}
                          <div>{para.para}</div>
                        </DivBlock>
                      </React.Fragment>
                    ))
                  ) : (
                    <React.Fragment>
                      {section.lists.map((list, index) => (
                        <React.Fragment>
                          {index === 0 ? (
                            <React.Fragment>
                              <h3 key={index}>{section.title}</h3>
                              <h4>{section.subheader}</h4>
                            </React.Fragment>
                          ) : (
                            ""
                          )}
                          <li>{list.list}</li>
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  )
              )
            )
          }
        </GlobalState>
      </React.Fragment>
    );
  }
}
