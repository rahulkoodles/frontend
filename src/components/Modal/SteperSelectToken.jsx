import React, { useState, useEffect } from "react";
import { Button, Divider, Modal, Radio } from "antd";
import { IoIosSearch } from "react-icons/io";

function SteperSelectToken({ isOpen, closeModal,handleSelectToken }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);

  
  

  useEffect(() => {
    setIsModalOpen(isOpen);
    // Reset selectedToken when modal is opened
    if (isOpen) {
      setSelectedToken(null);
    }
  }, [isOpen]);

  const handleCancel = () => {
    setIsModalOpen(false);
    closeModal();
  };

  const handleSelectedToken = (tokenData) => {
    setSelectedToken(tokenData.basetoken);
    closeModal();
    handleSelectToken(tokenData.basetoken);
  };

  console.log('select token ', selectedToken);


  const tokenList = [
    {
      icon: "https://static.jup.ag/jlp/icon.png",
      name: "JLP",
      address: "27G8...idD4",
      description: "Jupiter Perps LP",

      basetoken: '0xf805f7437C1D26c00bbd5B1445cc1D5eaB1A428A'
    },
  ];

  return (
    <>
      <Modal
        visible={isModalOpen}
        onCancel={handleCancel}
        style={{ width: "20px", padding: "0px" }}
        width={580}
        className="modalStyle"
        footer={null}
        closeIcon={null}
      >
        <div className="w-full flex justify-between mb-10">
          <div>
            <span className="text-white text-2xl font-semibold">
              Select Token
            </span>
          </div>
          <div>
            <span
              className=" text-white bg-red-100flex justify-center items-center hover:bg-[#1A1F2E] px-3 py-2 rounded-full cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <span className="text-lg">X</span>
            </span>
          </div>
        </div>

        <Divider className="bg-gray-600" />

        {/* ///////// Searching////////// */}

        <div className="flex gap-4 relative items-center flex-col shadow-sm mt-6">
          <input
            placeholder="Enter token mint address"
            class="w-full pl-9 py-2 px-2.5 border-[3px] border-ct-white-800 bg-transparent rounded-lg focus:border-green-900 focus:!ring-0  text-ct-white-200 placeholder:text-ct-white-700 text-ct-base !outline-none text-white transition-all duration-300"
          />
          <button className="shadow-sm rounded-lg text-base absolute left-4 inset-y-0 text-white">
            <IoIosSearch size={20} />
          </button>
        </div>

        <Divider className="mt-6 bg-gray-600" />

        {/* ///////////// Radio Button///////////// */}
        <div className="mt-6 text-white flex justify-between gap-4 items-center">
          <div>
            <Radio.Group value="">
              <Radio.Button value="large" className="text-white">
                Strict
              </Radio.Button>
              <Radio.Button value="default" className="text-gray-500">
                All
              </Radio.Button>
            </Radio.Group>
          </div>

          <div>
            <span className="flex items-center gap-1.5 text-ct-sm text-gray-500">
              Token List
            </span>
          </div>
        </div>
        {/* // List */}

        <div className="px-6 py-4 flex flex-col gap-2 overflow-y-auto max-h-[40vh]">
          {tokenList.map((tokenData, index) => (
            // <div
            //   key={index}
            //   className="flex justify-between rounded-lg items-center py-2 px-3 -mx-3 cursor-pointer transition-all duration-300 bg-ct-white-900"
            //   onClick={() => handleSelectToken(tokenData)}
            // >
            //   <div className="flex items-center gap-1">
            //     <div className="flex items-center justify-center relative w-8 h-8 min-w-[32px]">
            //       <img
            //         src={tokenData.icon}
            //         className="object-cover rounded-full w-[26px] h-[26px]"
            //         alt={tokenData.name}
            //       />
            //     </div>

            //     <div className="flex flex-col text-ct-white-500">
            //       <div className="flex items-center gap-1">
            //         <span className="text-ct-base text-gray-200 font-medium ml-1">
            //           {tokenData.name}
            //         </span>
            //         <span className="bg-ct-gray-700 text-gray-500 px-1.5 py-1 uppercase w-fit text-ct-xs font-semibold rounded cursor-pointer">
            //           <span className="flex normal-case font-normal items-center">
            //             {tokenData.address}
            //             <span className="w-3 h-3 flex items-center justify-center">
            //               <i className="fa-regular fa-arrow-up-right text-ct-sm"></i>
            //             </span>
            //           </span>
            //         </span>
            //       </div>

            //       <span className="text-ct-sm ml-1 text-gray-400">
            //         {tokenData.description}
            //       </span>
            //     </div>
            //   </div>
            // </div>

            <div
            key={index}
              onClick={() => handleSelectedToken(tokenData)}
              className="cursor-pointer"
            >
              <span className="text-1xl text-white">0xf805f7437C1D26c00bbd5B1445cc1D5eaB1A428A</span>
              </div>
          ))}

          {/*  */}

          <div
            className="flex justify-between rounded-lg items-center py-2 px-3 -mx-3 cursor-pointer transition-all duration-300 
               bg-ct-white-900"
          >
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center relative w-8 h-8 min-w-[32px]">
                <img
                  src="https://static.jup.ag/jlp/icon.png"
                  class="object-cover rounded-full w-[26px] h-[26px]"
                  alt="JLP"
                ></img>
              </div>

              <div className="flex flex-col text-ct-white-500">
                <div className="flex items-center gap-1">
                  <span class="text-ct-base text-gray-200 font-medium ml-1">
                    JLP
                  </span>
                  <span className="bg-ct-gray-700 text-gray-500 px-1.5 py-1 uppercase w-fit text-ct-xs font-semibold rounded  cursor-pointer">
                    <span class="flex normal-case font-normal items-center">
                      27G8...idD4
                      <span class="w-3 h-3 flex items-center justify-center">
                        <i class="fa-regular fa-arrow-up-right text-ct-sm"></i>
                      </span>
                    </span>
                  </span>
                </div>

                <span class="text-ct-sm ml-1 text-gray-400">
                  Jupiter Perps LP
                </span>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between rounded-lg items-center py-2 px-3 -mx-3 cursor-pointer transition-all duration-300 
               bg-ct-white-900">
                <div className="flex items-center gap-1">
                    <div  className="flex items-center justify-center relative w-8 h-8 min-w-[32px]">
                    <img src="https://static.jup.ag/jlp/icon.png" class="object-cover rounded-full w-[26px] h-[26px]" alt="JLP"></img>
                    </div>

                    <div className="flex flex-col text-ct-white-500">
                        <div className="flex items-center gap-1">
                        <span class="text-ct-base text-gray-200 font-medium ml-1">JLP</span>
                        <span className="bg-ct-gray-700 text-gray-500 px-1.5 py-1 uppercase w-fit text-ct-xs font-semibold rounded  cursor-pointer">
                        <span class="flex normal-case font-normal items-center">27G8...idD4<span class="w-3 h-3 flex items-center justify-center"><i class="fa-regular fa-arrow-up-right text-ct-sm"></i></span></span>
                        </span>
                        </div>

                    <span class="text-ct-sm ml-1 text-gray-400">Jupiter Perps LP</span>
                    </div>
                </div>



               </div> */}


        </div>
      </Modal>
    </>
  );
}

export default SteperSelectToken;
