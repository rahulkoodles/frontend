import React, { useState, useEffect } from "react";
import { ConfigProvider, Divider, Steps } from "antd";
import { CreateOfferOTCMarketDiv } from "../../styles/ CreateOfferOTCMarket";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { Link } from "react-router-dom";
import WalletImg from "../../imgs/AllWalletImg.png";

//************** Wallet ******************* */
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { StyledCardContainer } from "../../styles/stylesCard";
import ConnectButton from "../ConnectButton/ConnectButton";

//************ Redux ********************* */
import { useSelector } from "react-redux";

//********************* CreateStyledComponent For Form******************** */
import CreateOfferStepperStyledComponent from "../../styles/CreateOfferStepperStyledComponent";

//************** ContextApi **************** */
import { createContext, useContext } from "react";
import { FormDataContext } from "./FormDataContext";

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
  const [isOpen, setIsOpen] = useState(!address);
  const walletAddressRedux = useSelector((state) => state.auth.WalletAddress);

  //***************** UseContext ************************ */
  const [formState, setFormState] = useState({});

  const updateFormState = (newData) => {
    setFormState((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const resetFormState = () => {
    setFormState("");
  };

  console.log("form data", formState);
  //*************************************** */

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
        return <FirstStep StepsIncreament={StepsIncreament} />;
      case 1:
        return (
          <SecondStep
            StepsIncreament={StepsIncreament}
            StepsDecreament={StepsDecreament}
          />
        );
      case 2:
        return (
          <ThirdStep
            StepsIncreament={StepsIncreament}
            StepsDecreament={StepsDecreament}
          />
        );
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
    <FormDataContext.Provider
      value={{ formState, updateFormState, resetFormState }}
    >
      <div className="w-full  flex justify-center items-center rounded-md">
        {address || walletAddressRedux ? (
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
                      {/* <div className="grid grid-cols-2 gap-2  pb-4 px-6">
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
                    </div> */}
                    </Link>
                  </div>
                </div>
              </div>
            </CreateOfferOTCMarketDiv>
          </ConfigProvider>
        ) : (
          <div className="flex justify-center items-center w-full h-[86vh]">
            <StyledCardContainer>
              <div className="mx-auto max-md:w-[18rem] md:w-[44.125rem] h-[60vh] bg-[#121212] p-3  rounded-[15px] ">
                <div className="mt-2">
                  <div className="flex justify-center items-center">
                    <span className="text-3xl text-white">Wallet Connect</span>
                  </div>
                  <Divider className="mt-5 bg-gray-700" />
                </div>

                <div className=" w-full  h-[40vh]">
                  <div className=" h-full  mt-10">
                    <div className="h-full flex justify-between ">
                      <div className=" w-[32vh] m-0 p-0">
                        <div className="flex flex-col text-white px-2 h-full">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis porro, minus voluptate ab
                            expedita quisquam! Necessitatibus nulla veniam iusto
                            culpa eum
                          </p>
                        </div>
                      </div>
                      <Divider
                        className="createOffeDeivder bg-white m-0"
                        style={{ width: "1px" }}
                      />

                      <div className="">
                        <div className="text-white px-2 flex flex-col items-center gap-4">
                          <img src={WalletImg} alt="" className="w-[20rem] " />

                          {/* //******************* Connect Button************************** */}

                          <ConnectButton className="h-[2.5rem]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StyledCardContainer>
          </div>
        )}
        <CreateOfferStepperStyledComponent />
      </div>
    </FormDataContext.Provider>
  );
};

export default CreateOfferOTCMarket;
