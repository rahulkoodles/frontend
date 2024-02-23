import React from "react";
import salonaImg from '../../imgs/salona.png'

const FirstStep = () => {
  return (

<>
<div className="bg-[#10141F] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
        {/* //****** Stepper*** */}
        <div className="flex px-6 border-b "></div>

        {/* // *********** Steper Content ********** */}
        <div className="p-6">
          <div>
            <div id="firsthead">
              <div className="flex flex-col gap-6 text-start">
                <div className="flex flex-col gap-2">
                  <h5 className="text-ct-base text-white font-medium">
                    Network
                  </h5>
                  <div className="flex items-center justify-between gap-2 px-3 py-2.5 border-2 border-ct-gray-700 rounded-lg">
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
                        className="border-ct-gray-700 flex items-center justify-center rounded-full border-[3px] "
                        style={{
                          width: "18px",
                          height: "18px",
                          minWidth: "18px",
                        }}
                      >
                        <div
                          className="bg-[#87EE94] rounded-full mt-[0]"
                          style={{
                            width: "6px",
                            height: "6px",
                            minWidth: "6px",
                          }}
                        ></div>
                      </div>
                      <span className="flex flex-col gap-0">
                        <h5 className="text-ct-base text-white font-medium uppercase mb-0">
                          {" "}
                          Buying
                        </h5>
                        <span className="text-ct-sm text-white">
                          You want to buy
                           tokens
                        </span>
                      </span>
                    </div>
                  </div>

                  <div id="selling">
                    <div className="flex gap-2 cursor-pointer">
                      <div
                        className="border-ct-gray-700 flex items-center justify-center rounded-full border-[3px]"
                        style={{
                          width: "18px",
                          height: "18px",
                          minWidth: "18px",
                        }}
                      >
                        <div
                          className="bg-primary rounded-full mt-[0px] bg-[#87EE94]"
                          style={{
                            width: "6px",
                            height: "6px",
                            minWidth: "6px",
                          }}
                        ></div>
                      </div>
                      <span className="flex flex-col gap-0">
                        <h5 className="text-ct-base text-white font-medium uppercase mb-0">
                          {" "}
                          Selling
                        </h5>
                        <span className="text-ct-sm text-white">
                          You want to buy
                           tokens
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
