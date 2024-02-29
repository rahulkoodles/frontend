import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SteperSelectToken from "../Modal/SteperSelectToken";
import StepSelectTokenComponent from "../Modal/StepSelectTokenComponent";
import StepSecondSelectToken from "../Modal/StepSecondSelectToken";
import { Divider } from "antd";
import { Input, Radio, Button, Form } from "antd";
import { FormDataContext } from "./FormDataContext";

function SecondStep({ StepsIncreament, StepsDecreament }) {
  //*********** First Modal open************** */
  const [isSelectTokenModalOpen, setIsSelectTokenModalOpen] = useState(false);
  const [selectBaseToken, setSelectBaseToken] = useState(null);

  const handleSelectTokenModal = () => {
    setIsSelectTokenModalOpen(true);
  };

  const closeModal = () => {
    setIsSelectTokenModalOpen(false);
  };

  //************** Second Modal Open ********************* */
  const [isSecondSelectTokenModalOpen, setIsSeconfSelectTokenModalOpen] =
    useState(false);

  const handleSecondSelectTokenModal = () => {
    setIsSeconfSelectTokenModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSeconfSelectTokenModalOpen(false);
  };

  // Data Come From Modal-------------
  const handleSelectToken = (data) => {
    updateFormState({
      ...formState,
      BaseToken: data,
    });
  };

  const handleSecondSelectToken = (data) => {
    updateFormState({
      ...formState,
      QutoeToken: data,
    });
  };

  
  const [FirstRadioValue, setFirstRadioValue] = useState(1);
  const [SecondRadioValue, setSecondRadioValue] = useState(1);
  
  const { formState, updateFormState, resetFormState } =
  useContext(FormDataContext);

  console.log('form state', formState.buyAndSaleRadio);

  const tradeType = formState?.buyAndSaleRadio
  console.log('tradetype', tradeType);
  
  function handleSubmit(values) {
    StepsIncreament();
    updateFormState(values);
  }
  return (
    <>
      <Form onFinish={handleSubmit} onFinishFailed={(errorInfo) => {}}>
        <div className="bg-[#121212] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
          {/* //****** 2nd Stepper*** */}
          <div className="flex p-6 border-b border-ct-white-900"></div>

          {/* // *********** Steper Content ********** */}
          <div className="p-6">
            <div>
              <div className="secondhead">
                <div className="flex flex-col gap-2 text-ct-gray-500">

                  <div className="p-3 flex flex-col gap-2 w-full bg-[#3A3A3A] rounded-lg pb-10">
                    <div className=" rounded-lg flex flex-col gap-3 ">
                      <div className="flex items-center gap-2 w-full ">
                        <span
                          id="tooldip-buy"
                          className="bg-success/10 text-success px-0 text-start py-1 uppercase w-fit  font-semibold rounded cursor-default text-green-300 mb-2"
                        >
                          {tradeType === 0 ? 'Buying' : 'Selling'}
                          
                        </span>
                        <i
                          id="total-amount"
                          className="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                        ></i>
                      </div>
                    </div>

                    <div className=" flex items-center gap-1 w-full h-10  mb-4">
                      <div className="flex-1 mt-4">
                        <div className="flex items-center gap-4 ">
                          <Form.Item
                            name="inputFirst"
                            rules={[
                              {
                                required: true,
                                message: "Please Enter Ammount !",
                              },
                            ]}
                            className="mb-0 "
                          >
                            <Input
                              className="w-full  border-none pl-0 text-white bg-transparent text-left text-2xl text-ct-gray-200 placeholder:text-ct-gray-500 focus:outline-none !hover:bg-none focus:bg-transparent
                              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                              "
                              placeholder="Enter amount"
                              min="0"
                              name="tokenAmount"
                              type="number"
                              style={{
                                boxShadow: "none",
                                border: "none",
                                outline: "none",
                                background: "transparent",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "none",
                              }}
                              autoComplete="off"
                            />
                          </Form.Item>

                          {/* // Select Token  */}

                          <div className=" w-[11.5rem]">
                            <div
                              className="flex items-center justify-between text-gray-400 rounded-lg cursor-pointer h-[45px] gap-1 px-4 w-full bg-[#5B5B5B] "
                              onClick={() => handleSelectTokenModal()}
                            >
                              <span className="flex items-center justify-center ">
                                <span className="text-ct-base  font-medium text-ct-white-500">
                                  Select Token
                                </span>
                              </span>
                              <span className="flex items-center justify-center w-5 h-5 min-w-[20px] mt-0.5">
                                <IoIosArrowDown />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <span className="text-start text-ct-sm text-gray-400 mt-0">
                            1 Token ={" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //**************** */}

                  <div className="p-3 pb-10 flex flex-col gap-2 w-full bg-[#3A3A3A] rounded-lg ">
                    <div className=" rounded-lg flex flex-col gap-3 ">
                      <div className="flex items-center gap-2 w-full ">
                        <span
                          id="tooldip-buy"
                          className="bg-success/10 text-success px-0 text-start py-1 uppercase w-fit  font-semibold rounded cursor-default text-gray-400"
                        >
                          For
                        </span>
                        <i
                          id="total-amount"
                          className="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                        ></i>
                      </div>
                    </div>

                    <div className=" flex items-center gap-1 w-full ">
                      <div className="flex-1 ">
                        <div className="flex items-center gap-4 ">
                          <Form.Item
                            name="inputSecond"
                            rules={[
                              {
                                required: true,
                                message: "Please Enter Ammount !",
                              },
                            ]}
                            className="mb-0"
                          >
                            <Input
                              className="w-full  border-none pl-0 text-white bg-transparent text-left text-2xl text-ct-gray-200 placeholder:text-ct-gray-500 focus:outline-none !hover:bg-none focus:bg-transparent
                              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                              "
                              placeholder="Enter amount"
                              min="0"
                              name="tokenAmount"
                              type="number"
                              style={{
                                boxShadow: "none",
                                border: "none",
                                outline: "none",
                                background: "transparent",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "none",
                              }}
                              autoComplete="off"
                            />
                          </Form.Item>

                          <div className=" w-[11.5rem]">
                            <div
                              className="flex items-center justify-between text-gray-400 rounded-lg cursor-pointer h-[45px] gap-1 px-4 w-full bg-[#5B5B5B] "
                              onClick={() => handleSecondSelectTokenModal()}
                            >
                              <span className="flex items-center justify-center ">
                                <span className="text-ct-base  font-medium text-ct-white-500">
                                  Select Token
                                </span>
                              </span>
                              <span className="flex items-center justify-center w-5 h-5 min-w-[20px] mt-0.5">
                                <IoIosArrowDown />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* // Fill Type */}
                  <div className="flex flex-col gap-4  mt-6 ">
                    <div className="flex flex-col sm:flex-row gap-4 ">
                      <span className="flex item-center gap-0.5 min-w-[96px] ">
                        <span className="text-ct-gray-200 text-ct-sm font-semibold uppercase text-white mt-5">
                          Fill Type
                        </span>
                      </span>
                      <div className="flex flex-col gap-3 text-start flex-1  mt-0">
                        <div className="pt-0 top-0">
                          <div className="flex gap-2 cursor-pointer pt-0 top-0">
                            <Form.Item
                              name="FillType"
                              rules={[
                                {
                                  required: true,
                                  message: "Please Select !",
                                },
                              ]}
                            >
                              <Radio.Group
                                value={FirstRadioValue}
                                className=" radioSecondStepper flex flex-col  text-white mt-0"
                              >
                                <div className=" cursor-pointer ">
                                  <Radio value={0} className=" flex">
                                    <span className="mt-4 ">
                                      <h5 className="text-ct-base text-white font-medium uppercase mb-0">
                                        Partial Fill
                                      </h5>
                                      <span className="text-ct-sm text-gray-400">
                                        Multiple users can contribute to fulfill
                                        the offer
                                      </span>
                                    </span>
                                  </Radio>
                                </div>

                                <div className="flex  cursor-pointer">
                                  <Radio value={1} className="">
                                    <h5 className="text-ct-base text-white font-medium uppercase mb-0">
                                      Single Fill
                                    </h5>
                                    <span className="text-ct-sm text-gray-400">
                                      Entire offer must be filled by 1 user
                                    </span>
                                  </Radio>
                                </div>
                              </Radio.Group>
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Divider className="bg-gray-800 m-0 p-0 " />
                    {/* // Privacy */}

                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                      <span className="flex item-center gap-0.5 min-w-[96px]">
                        <span className="text-white text-ct-sm font-semibold uppercase mt-5">
                          Privacy
                        </span>
                      </span>
                      <div className="flex flex-col gap-3 text-start flex-1">
                        <div>
                          <div className="flex gap-2 cursor-pointer">
                            <Form.Item
                              name="Privacy"
                              rules={[
                                {
                                  required: true,
                                  message: "Please Select !",
                                },
                              ]}
                            >
                              <Radio.Group
                                value={SecondRadioValue}
                                className=" radioSecondStepper flex flex-col  text-white mt-0"
                              >
                                <div className=" cursor-pointer ">
                                  <Radio value={0} className=" flex">
                                    <span className="mt-4 ">
                                      <h5 className="text-ct-base text-white font-medium uppercase mb-0">
                                        Public
                                      </h5>
                                      <span className="text-ct-sm text-gray-400">
                                        Everyone can see your offer
                                      </span>
                                    </span>
                                  </Radio>
                                </div>
                                {/* 
                                <div className="flex  cursor-pointer">
                                  <Radio value={1} className="">
                                    <h5 className="text-ct-base text-white font-medium uppercase mb-0">
                                      Private
                                    </h5>
                                    <span className="text-ct-sm text-white">
                                      Your offer is accessible only through a
                                      private link
                                    </span>
                                  </Radio>
                                </div> */}
                              </Radio.Group>
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* //button */}

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Button
                      className="capitalize rounded-lg p-7 border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] hover:bg-[#87EE94] text-black"
                      onClick={StepsDecreament}
                    >
                      {" "}
                      Back
                    </Button>
                    <Button
                      className="capitalize rounded-lg p-7   border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94] text-black"
                      htmlType="submit"
                    >
                      {" "}
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
          <SteperSelectToken
            isOpen={isSelectTokenModalOpen}
            closeModal={closeModal}
            handleSelectToken={handleSelectToken}
          />
          <StepSelectTokenComponent />


        <StepSecondSelectToken
          isOpen={isSecondSelectTokenModalOpen}
          closeModal={closeSecondModal}
          handleSecondSelectToken={handleSecondSelectToken}
        />
      </Form>
    </>
  );
}

export default SecondStep;
