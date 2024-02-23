import React, { useState , useEffect } from "react";
import { Button, ConfigProvider, Steps } from "antd";
import { CreateOfferOTCMarketDiv } from "../../styles/ CreateOfferOTCMarket";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { Link } from "react-router-dom";
import ModalCreateOffer from "../Modal/ModalCreateOffer";

//************** Wallet ******************* */
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

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
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const [currentSteps, setCurrentSteps] = useState(0);
  const [isOpen, setIsOpen] = useState(!address); // Open modal if address is undefined

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
      default:
        return null;
    }
  };

  useEffect(() => {
    setIsOpen(!address);
  }, [address]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-full flex justify-center items-center rounded-md">
      {address ? (
        <ConfigProvider
          theme={{
            components: {
              Steps: {
                colorPrimary: "#5dec96",
                colorText: "#FFFFFF66",
                colorBorderBg: "#5dec96",
                colorTextDescription: "#FFFFFF80",
                iconSize: 40,
                titleLineHeight: 60,
              },
            },
          }}
        >
          <CreateOfferOTCMarketDiv>
            <div className=" w-[500px]">
              <div className=" bg-[#121212] rounded-xl ">
                <div className="steps-div w-full flex p-4 ">
                  <Steps
                    labelPlacement="vertical"
                    className="text-[#FFFFFF80]"
                    current={currentSteps}
                    items={stepsInfo}
                  />
                </div>
                <div>
                  {renderStepComponent()}
                  <Link to="/createoffer">
                    <div className="grid grid-cols-2 gap-2  pb-4 px-6">
                      <button
                        className="capitalize rounded-lg p-[16px, 36px, 16px, 36px] text-[#000000] text-[16px] font-[400]  leading-[19.54px] disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-CustomGreenColor"
                        onClick={StepsDecreament}
                      >
                        Back
                      </button>
                      <button
                        className="capitalize rounded-lg p-3 text-ct-gray-950 text-[#000000] text-[16px] font-[400]  leading-[19.54px] disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-CustomGreenColor"
                        onClick={StepsIncreament}
                      >
                        Next
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </CreateOfferOTCMarketDiv>
        </ConfigProvider>
      ) : null}
      {isOpen && (
        <ModalCreateOffer isOpen={isOpen} closeModal={handleCloseModal} />
      )}
    </div>
  );
};

export default CreateOfferOTCMarket;
