import React from 'react';
import { ReactComponent as Mad } from "../../../assets/svg/mad.svg";
import { ReactComponent as Neutral } from "../../../assets/svg/neutral.svg";
import { ReactComponent as Sad } from "../../../assets/svg/sad.svg";
import { ReactComponent as SuperHappy } from "../../../assets/svg/super-happy.svg";
import { ReactComponent as Happy } from "../../../assets/svg/happy.svg";

function Measurement() {
  const handleClick = (emoji) => {
    console.log(`You clicked on: ${emoji}`);
    alert(`You clicked on: ${emoji}`);
  };

  return (
    <div className="question">
      <div className="question-text">Question 1</div>
      <div className="question-choices">
        <Mad onClick={() => handleClick('Mad')} style={{ cursor: 'pointer' }} />
        <Neutral onClick={() => handleClick('Neutral')} style={{ cursor: 'pointer' }} />
        <Sad onClick={() => handleClick('Sad')} style={{ cursor: 'pointer' }} />
        <SuperHappy onClick={() => handleClick('SuperHappy')} style={{ cursor: 'pointer' }} />
        <Happy onClick={() => handleClick('Happy')} style={{ cursor: 'pointer' }} />
      </div>
      
      <div className="question-text">Question 2</div>
      <div className="question-choices">
        
      </div>
    </div>
  );
}

export default Measurement;