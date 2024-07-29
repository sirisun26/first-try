import React from "react";
import Container from "./../../Container/Container";
import LandingCover from "./LandingCover";
import LandingDetails from "./LandingDetails";
import LandingWrapper from "./LandingWrapper";

const Landing = (props) => {
  return (
    <div className="landing">
      <Container>
        <LandingWrapper>
          <LandingDetails
            logo={props.logo}
            logoAlt={props.logoAlt}
            subtitle={props.subtitle}
            title={props.title}
            copy={props.copy}
            timeComplete={props.timeComplete}
            dueDate={props.dueDate}
            btnText={props.btnText}
            btnLink={props.btnLink}
          />
          <LandingCover
            image={props.image}
            alt={props.alt}
            badge={props.badge}
          />
        </LandingWrapper>
      </Container>
    </div>
  );
};

export default Landing;
