import React, { useState } from "react";

import { Button, Steps } from "antd";

const stepsInfo = [
  {
    description: "Network & Type",
  },
  {
    description: "Detail Settings",
  },
  {
    description: "Review & Create",
  },
];

const CreateOfferOTCMarket = () => {
  const [currentSteps, setCurrentSteps] = useState(0);

  const description = "This is a description.";

  const StepsIncreament = () => {
    setCurrentSteps(currentSteps + 1);
  };
  const StepsDecreament = () => {
    setCurrentSteps(currentSteps - 1);
  };

  return (
    <div>
      <div className="flex p-6 border-b border-ct-white-900">
        <Steps className=" bg-white" current={currentSteps} items={stepsInfo} />
      </div>
      <Button onClick={StepsDecreament} className=" bg-red-50">
        Back
      </Button>
      <Button onClick={StepsIncreament} className=" bg-red-50">
        Next
      </Button>
    </div>
  );
};

// Github commit :
// git add .
// git commit -m "initial setup"
// git push origin main

export default CreateOfferOTCMarket;
