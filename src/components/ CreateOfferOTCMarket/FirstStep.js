import React from "react";
import salonaImg from "../../imgs/salona.png";
import { Divider } from "antd";

const FirstStep = () => {
  return (
    <>
      <div className="bg-[#121212] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
        {/* //** **** Stepper*** */}
        <Divider className=" p-0 m-0 bg-[#47474733]"/>

        {/* // *********** Steper Content ********** */}
        <div className="p-6">
          <div>
            <div id="firsthead">
              <div className="flex flex-col gap-6 text-start">
                <div className="flex flex-col gap-2">
                  <h5 className="text-[16px] leading-[19.54px] text-white font-[500]">
                    Network
                  </h5>
                  <div className="flex items-center justify-between gap-2 px-3 py-2.5 border-[1px] border-[#FFFFFF33] rounded-lg bg-[#090909]">
                    <span className="flex items-center gap-2 flex-1">
                      <img src={salonaImg} alt="" className="w-5 h-5 rounded" />
                      <span className="flex-1 text-ct-base text-white">
                        Solana
                      </span>
                    </span>
                  </div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div id="buying">
                    <div className="flex gap-2 cursor-pointer">
                      <div
                        className="bg-[#47474733] flex items-center justify-center rounded-full border-[2px] "
                        style={{
                          width: "18px",
                          height: "18px",
                          minWidth: "18px",
                        }}
                      >
                        <div
                          className="rounded-full mt-[0]"
                          style={{
                            width: "6px",
                            height: "6px",
                            minWidth: "6px",
                          }}
                        ></div>
                      </div>
                      <span className="flex flex-col gap-0">
                        <h5 className="text-[16px] text-white font-[500]  leading-[19.54px] mb-0">
                          {" "}
                          Buying
                        </h5>
                        <span className="text-[12px] font-[400] leading-[14.32px] text-[#FFFFFF80]">
                          You want to buy tokens
                        </span>
                      </span>
                    </div>
                  </div>

                  <div id="selling">
                    <div className="flex gap-2 cursor-pointer">
                      <div
                        className="bg-[#47474733]  flex items-center justify-center rounded-full border-[2px]"
                        style={{
                          width: "18px",
                          height: "18px",
                          minWidth: "18px",
                        }}
                      >
                        <div
                          className="bg-primary rounded-full mt-[0px] bg-19.54px"
                          style={{
                            width: "6px",
                            height: "6px",
                            minWidth: "6px",
                          }}
                        ></div>
                      </div>
                      <span className="flex flex-col gap-0">
                        <h5 className="text-[16px] text-white font-[500]  mb-0 leading-[19.54px]">
                          {" "}
                          Selling
                        </h5>
                        <span className="text-[12px] font-[400] leading-[14.32px] text-[#FFFFFF80]">
                          You want to buy tokens
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button  */}

                {/* <div className="grid grid-cols-2 gap-2">
                    <button className="capitalize rounded-lg p-3 text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94]">
                        Back
                    </button>
                    <button className="capitalize rounded-lg p-3 text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94]">
                        Next
                        </button>

                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
