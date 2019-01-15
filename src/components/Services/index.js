import React from "react";
import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";
import {ServicesTitle,IconCard,Cards,ServicesBlock,Info} from "./styled"

const Services = () => {
    return (
        <React.Fragment>
            <ServicesBlock>
            <ServicesTitle >
                <h2> Our Services</h2>
            </ServicesTitle>
            <Cards>
                <Row>
                    <Col md={3}>
                        <Info><p>F3 Sports Coaching is providing services to young as well as professional athletes across sports in areas of Scientific Assessments, Injury Prevention and Management, Biomechanics, Sports Psychology, Sports Nutrition, Strength & Conditioning, Athlete Monitoring & High Performance. Our total client base, as on, 31st December 2018 Athletes are over 700+.</p></Info>
                    </Col>
                    <Col md={8}>
                        <IconCard>
                            <img src={Asset("assets/icons/cricket.svg")} width="60px" height="60px"/>
                        </IconCard>
                       
                        <IconCard>
                            <img src={Asset("assets/icons/tennis.svg")} width="60px" height="60px"/>
                        </IconCard>
                       
                        <IconCard>
                            <img src={Asset("assets/icons/football.svg")} width="60px" height="60px"/>
                        </IconCard>
                       
                        <IconCard>
                            <img src={Asset("assets/icons/skater.svg")} width="60px" height="60px"/>
                        </IconCard>
                        <IconCard>
                            <img src={Asset("assets/icons/swimming.svg")} width="60px" height="60px"/>
                        </IconCard>
                       
                        <IconCard>
                            <img src={Asset("assets/icons/badminton.svg")} width="60px" height="60px"/>
                        </IconCard>
                       
                        <IconCard>
                            <img src={Asset("assets/icons/boxing.svg")} width="60px" height="60px"/>
                        </IconCard>
                       
                        <IconCard>
                            <img src={Asset("assets/icons/sprint.svg")} width="60px" height="60px"/>
                        </IconCard>
                        <IconCard>
                            <img src={Asset("assets/icons/yoga.svg")} width="60px" height="60px"/>
                        </IconCard>
                       
                        <IconCard>
                            <img src={Asset("assets/icons/basketball.svg")} width="60px" height="60px"/>
                        </IconCard>
                    </Col>
            </Row>
            </Cards>
            </ServicesBlock>
        </React.Fragment>
    )
}

export default Services;