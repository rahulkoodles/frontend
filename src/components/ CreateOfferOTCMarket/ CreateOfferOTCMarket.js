import React, { useState } from "react";

import { Button, ConfigProvider, Steps } from "antd";
import { CreateOfferOTCMarketDiv } from "../../styles/ CreateOfferOTCMarket";

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
    if (currentSteps < 3) {
      setCurrentSteps(currentSteps + 1);
    }
  };
  const StepsDecreament = () => {
    if (currentSteps > 0) {
      setCurrentSteps(currentSteps - 1);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            colorPrimary: "#5dec96",
            colorText: "white",
            // colorPrimaryBorder: "#5dec96",
            colorBorderBg: "#5dec96",
            colorTextDescription: "#FFFFFF80",
            iconSize: 40,
            titleLineHeight: 60,
            navArrowColor:"red"
          },
        },
      }}
    >
      <CreateOfferOTCMarketDiv>
        <div className=" w-[600px]">
          <div className="steps-div w-full flex p-6 border-b bg-[#121212]">
            <Steps
              labelPlacement="vertical"
              className="text-[#FFFFFF80]"
              current={currentSteps}
              items={stepsInfo}
            />
          </div>
          <Button onClick={StepsDecreament}  className=" bg-red-50 ">
            Back
          </Button>
          <Button onClick={StepsIncreament} className=" bg-red-50 ">
            Next
          </Button>
        </div>
      </CreateOfferOTCMarketDiv>
    </ConfigProvider>
  );
};

export default CreateOfferOTCMarket;
