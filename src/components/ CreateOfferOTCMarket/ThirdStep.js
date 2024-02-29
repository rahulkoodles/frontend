import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Tooltip } from "antd";
import React, { useContext } from "react";
import { FormDataContext } from "./FormDataContext";

import { otcABI } from "../../abis/OtcAbi";
import { useWriteContract } from "wagmi";

function ThirdStep({ StepsIncreament, StepsDecreament }) {
  const { formState, updateFormState, resetFormState } =
    useContext(FormDataContext);

  const { data: hash, isPending, writeContract, error } = useWriteContract();

  //**************** Values**************************** */
  console.log("data final----", formState);
  console.log("hash :>> ", hash, isPending, error, writeContract);
  const Tradetype = formState.buyAndSaleRadio;
  const BaseInput = formState.inputFirst;
  const QutoeInput = formState.inputSecond;
  const Filltype = formState.Filltype;
  const Privacy = formState.Privacy;
  const BaseToken = formState.BaseToken;
  const QutoeToken = formState.QutoeToken;

  async function handleSubmit(values) {
    console.log("Selected Radio Value:", values);
    StepsIncreament();
    updateFormState(values);
  }

  return (
    <>
      <Form
        onFinish={handleSubmit}
        onFinishFailed={(errorInfo) => {
          console.log("Failed:", errorInfo);
        }}
      >
        <div className="bg-[#121212] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
          {/* //****** Stepper*** */}
          <Divider className=" p-0 m-0 bg-[#47474733]" />
          <div className="flex px-6 ">
            <div className="p-6">
              <div>
                <div className="thirdHead w-[405px]">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <div className=" w-12 h-12">
                          <div className="relative w-12 h-12 min-w-[48px]">
                            <img
                              src="https://static.jup.ag/jlp/icon.png"
                              class="object-cover rounded-full w-12 h-12 min-w-[48px]"
                              alt="image-logo"
                            />
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                              class="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                              alt="image-logo"
                            ></img>
                          </div>
                        </div>

                        <span className="font-medium text-[16px] text-white uppercase">
                          JLP
                        </span>
                      </div>

                      <div className="flex flex-col border border-[#FFFFFF33] text-[14px] leading-[19.09px] rounded-lg font-[400] ">
                        <div className="divide-y divide-[#FFFFFF33]">
                          <span class="flex items-center justify-between px-4 py-3">
                            <span className="text-[rgb(128,128,128)] ">
                              Offer Type
                            </span>

                            <span
                              id="tooltip-buy-undefined"
                              class="bg-success/10 text-success px-1.5 py-1 uppercase w-fit text-[8px]font-semibold rounded cursor-default text-green-400"
                            >
                              Buying
                            </span>
                          </span>
                          <span class="flex items-center justify-between px-4 py-3">
                            <span class="flex items-center gap-1.5">
                              <div class="text-[rgb(128,128,128)] flex items-center gap-2">
                                <span>Want to buy</span>
                                <span>
                                  <Tooltip
                                    placement="top"
                                    title="Total token you want to buy. "
                                    className=" w-3 h-3 cursor-pointer"
                                  >
                                    <InfoCircleOutlined />
                                  </Tooltip>
                                </span>
                              </div>

                              <i
                                id="total-amount"
                                class="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                              ></i>
                            </span>
                            <span class="text-ct-gray-200 flex gap-1 items-center font-medium text-white">
                              1
                              <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                                <img
                                  src="https://static.jup.ag/jlp/icon.png"
                                  class="object-cover rounded-full w-4 h-4"
                                  alt="JLP"
                                />
                              </div>
                            </span>
                          </span>
                          <span class="flex items-center justify-between px-4 py-3">
                            <span class="flex items-center gap-1.5">
                              <div class="text-[rgb(128,128,128)] flex items-center gap-2">
                                <span>For</span>
                                <span>
                                  <Tooltip
                                    placement="top"
                                    title="The amount you are paying. "
                                    className=" w-3 h-3 cursor-pointer"
                                  >
                                    <InfoCircleOutlined />
                                  </Tooltip>
                                </span>
                              </div>
                              <i
                                id="for"
                                class="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                              ></i>
                            </span>
                            <span class="text-ct-gray-200 flex gap-1 items-center font-medium text-white">
                              2
                              <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                                <img
                                  src="https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                                  class="object-cover rounded-full w-4 h-4"
                                  alt="USDC"
                                />
                              </div>
                            </span>
                          </span>
                          <span class="flex items-center justify-between px-4 py-3">
                            <span class="flex items-center gap-1.5">
                              <div class="text-[rgb(128,128,128)] flex items-center gap-2">
                                <span>Price / Token</span>
                                <span>
                                  <Tooltip
                                    placement="top"
                                    title="Token price per offered amount. "
                                    className=" w-3 h-3 cursor-pointer"
                                  >
                                    <InfoCircleOutlined />
                                  </Tooltip>
                                </span>
                              </div>
                              <i
                                id="price"
                                class="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                              ></i>
                            </span>
                            <span class="text-ct-gray-200 font-medium text-white">
                              $2
                            </span>
                          </span>
                          <span class="flex items-center justify-between px-4 py-3">
                            <span class="text-[#808080]">Fill Type</span>
                            <span id="fill-type" class="cursor-pointer">
                              <span
                                id="tooltip-partial-undefined"
                                class="bg-[#2F2F2F] text-[#ffffff80] px-1.5 py-1 uppercase w-fit text-[10px] font-semibold rounded cursor-default "
                              >
                                partial fill
                              </span>
                            </span>
                          </span>
                          <span class="flex items-center justify-between px-4 py-3">
                            <span class="flex items-center gap-1.5">
                              <div class="text-[rgb(128,128,128)] flex items-center gap-2">
                                <span>Listing Fee (0.1%)</span>
                                <span>
                                  <Tooltip
                                    placement="top"
                                    title="The platform fee for listing offer. "
                                    className=" w-3 h-3 cursor-pointer"
                                  >
                                    <InfoCircleOutlined />
                                  </Tooltip>
                                </span>
                              </div>
                              <i
                                id="listing-fee"
                                class="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-white"
                              ></i>
                            </span>
                            <span class="text-ct-gray-200 flex gap-1 items-center font-medium text-white">
                              0.002
                              <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                                <img
                                  src="https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                                  class="object-cover rounded-full w-4 h-4"
                                  alt="USDC"
                                />
                              </div>
                            </span>
                          </span>
                          <span class="flex items-center justify-between px-4 py-3">
                            <span class="text-[#808080]">Privacy</span>
                            <span id="privacy" class="cursor-pointer">
                              <span class="text-ct-base font-medium text-info text-[#437FEC]">
                                Public
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button
                        className="capitalize rounded-lg p-7 border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94]"
                        onClick={StepsDecreament}
                      >
                        Back
                      </Button>
                      <Button
                        className="capitalize rounded-lg p-7   border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94]"
                        htmlType="submit"
                      >
                        {" "}
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ThirdStep;
