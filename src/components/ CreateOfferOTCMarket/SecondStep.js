import React,{useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import SteperSelectToken from '../Modal/SteperSelectToken';
import StepSelectTokenComponent from '../Modal/StepSelectTokenComponent'
import StepSecondSelectToken from '../Modal/StepSecondSelectToken';

function SecondStep(props) {


   //*********** First Modal open************** */
   const [isSelectTokenModalOpen, setIsSelectTokenModalOpen] = useState(false);

   const handleSelectTokenModal = () => {
     setIsSelectTokenModalOpen(true);
   };
 
   const closeModal = () => {
     setIsSelectTokenModalOpen(false);
   };

   //************** Second Modal Open ********************* */
   const [isSecondSelectTokenModalOpen, setIsSeconfSelectTokenModalOpen] = useState(false);

   const handleSecondSelectTokenModal = () => {
       setIsSeconfSelectTokenModalOpen(true);
   };
 
   const closeSecondModal = () => {
       setIsSeconfSelectTokenModalOpen(false);
   };

    return (
        <>
        <div className="bg-[#121212] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
        {/* //****** 2nd Stepper*** */}
        <div className="flex px-6 border-b "></div>

        {/* // *********** Steper Content ********** */}
        <div className="p-6">
          <div>
            <div className="secondhead">
              <div className="flex flex-col gap-2 text-ct-gray-500">
                <div className="p-3 flex flex-col gap-2 w-full bg-[#212632] rounded-lg ">
                  <div className=" rounded-lg flex flex-col gap-3 ">
                    <div className="flex items-center gap-2 w-full ">
                      <span
                        id="tooldip-buy"
                        className="bg-success/10 text-success px-0 text-start py-1 uppercase w-fit  font-semibold rounded cursor-default text-green-300"
                      >
                        Buying
                      </span>
                      <i
                        id="total-amount"
                        className="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                      ></i>
                    </div>
                  </div>

                  <div className=" flex items-center gap-1 w-full h-10">
                    <div className="flex-1 ">
                      <input
                        class="w-full flex-1 border-none text-white bg-transparent text-left text-2xl text-ct-gray-200 placeholder:text-ct-gray-500 focus:outline-none"
                        placeholder="Enter amount"
                        min="0"
                        name="tokenAmount"
                      />
                      <div className="flex justify-start">
                        <span className="text-start text-ct-sm text-gray-400" >
                          1 Token ={" "}
                        </span>
                      </div>
                    </div>

                    {/* // Select Token  */}
                    <div className="flex items-center p-1 text-gray-400 rounded-lg cursor-pointer h-full gap-1 px-3 bg-[#2A2F3A]"
                    onClick={()=>handleSelectTokenModal()}
                    >
                      <span className="flex items-center gap-1">
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
                {/* // */}
                <div className="p-3 flex flex-col gap-2 w-full bg-[#212632] rounded-lg ">
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

                  <div className=" flex items-center gap-1 w-full h-10">
                    <div className="flex-1 ">
                      <input
                        class="w-full flex-1 border-none bg-transparent text-left text-white text-2xl text-ct-gray-200 placeholder:text-ct-gray-500 focus:outline-none"
                        placeholder="Enter amount"
                        min="0"
                      
                        name="tokenAmount"
                       
                      />
                    </div>
                    <div className="flex items-center p-1 text-gray-400 bg-[#2A2F3A] rounded-lg cursor-pointer h-full gap-1 px-3"
                    onClick={()=>handleSecondSelectTokenModal()}
                    >
                      <span className="flex items-center gap-1">
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

                {/* // description */}
                <div className="flex flex-col gap-2 mt-6 mb-2">
                  <span className="flex items-center justify-between gap-3 text-ct-sm text-gray-500">
                    <span className="flex item-center gap-0.5">
                      <span class="text-ct-gray-200 text-ct-base font-medium">
                        Description
                      </span>
                      <span class="flex items-center mt-0.5">(Optional)</span>
                    </span>
                    <span class="flex items-center mt-0.5">0/180</span>
                  </span>

                  <textarea
                    class="bg-transparent text-white border-gray-400 border-[1px] rounded-lg px-3 py-2 focus:outline-none text-ct-gray-200  focus:border-ct-gray-700 resize-none placeholder:text-ct-gray-600"
                    rows="4"
                    maxlength="180"
                    placeholder="Write your description"
                  ></textarea>
                </div>

                {/* // Fill Type */}
                <div className="flex flex-col gap-6  mt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <span className="flex item-center gap-0.5 min-w-[96px]">
                      <span class="text-ct-gray-200 text-ct-sm font-semibold uppercase text-white">
                        Fill Type
                      </span>
                    </span>
                    <div className="flex flex-col gap-3 text-start flex-1">
                      <div>
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
                              Partial Fill
                            </h5>
                            <span className="text-ct-sm text-white">
                              Multiple users can contribute to fulfill the offer
                            </span>
                          </span>
                        </div>

                        <div className="flex gap-2 cursor-pointer mt-6">
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
                            <h5 className="text-white font-medium uppercase mb-0">
                              {" "}
                              Single Fill
                            </h5>
                            <span className="text-ct-sm text-white">
                              Entire offer must be filled by 1 user
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* // Privacy */}
                  <hr />

                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <span className="flex item-center gap-0.5 min-w-[96px]">
                      <span class="text-white text-ct-sm font-semibold uppercase">
                        Privacy
                      </span>
                    </span>
                    <div className="flex flex-col gap-3 text-start flex-1">
                      <div>
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
                              Partial Fill
                            </h5>
                            <span className="text-ct-sm text-white">
                              Multiple users can contribute to fulfill the offer
                            </span>
                          </span>
                        </div>

                        <div className="flex gap-2 cursor-pointer mt-6">
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
                              Single Fill
                            </h5>
                            <span className="text-ct-sm text-white">
                              Entire offer must be filled by 1 user
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* //button */}

                {/* <div className="grid grid-cols-2 gap-2 mt-4">
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

       <SteperSelectToken isOpen={isSelectTokenModalOpen} closeModal={closeModal}/>
       <StepSelectTokenComponent/>

      <StepSecondSelectToken isOpen={isSecondSelectTokenModalOpen} closeModal={closeSecondModal}/>

  
    </>
    );
}

export default SecondStep;