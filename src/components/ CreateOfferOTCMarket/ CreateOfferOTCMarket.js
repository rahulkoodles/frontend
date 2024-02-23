import React, { useState } from "react";

import { Button, ConfigProvider, Steps } from "antd";
import { CreateOfferOTCMarketDiv } from "../../styles/ CreateOfferOTCMarket";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

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

  const renderStepComponent = () => {
    switch (currentSteps) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;

      case 2:
        return <ThirdStep />;
      // Add more cases for additional steps if needed
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center ">
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
              navArrowColor: "navArrowColor",
            },
          },
        }}
      >
        <CreateOfferOTCMarketDiv>
          <div className=" w-[500px]">
            <div className="steps-div w-full flex p-6 border-b bg-[#121212]">
              <Steps
                labelPlacement="vertical"
                className="text-[#FFFFFF80]"
                current={currentSteps}
                items={stepsInfo}
              />
            </div>
            {renderStepComponent()}

            <div className="grid grid-cols-2 gap-2">
              <button
                className="capitalize rounded-lg p-3 text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94]"
                onClick={StepsDecreament}
              >
                Back
              </button>
              <button
                className="capitalize rounded-lg p-3 text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94]"
                onClick={StepsIncreament}
              >
                Next
              </button>
            </div>
          </div>
        </CreateOfferOTCMarketDiv>
      </ConfigProvider>
    </div>
  );
};

export default CreateOfferOTCMarket;
