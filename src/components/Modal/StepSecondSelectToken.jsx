import React, { useState, useEffect } from "react";
import { Button, Divider, Modal, Radio } from "antd";
import { IoIosSearch } from "react-icons/io";

function StepSecondSelectToken({ isOpen, closeModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleCancel = () => {
    setIsModalOpen(false);
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal
        visible={isModalOpen}
        onCancel={handleCancel}
        style={{ padding: "0px" }}
        width={580}
        className="modalStyle"
        footer={null}
        closeIcon={null}
        
      >
        <div className="w-full flex justify-between mb-8">
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

       <Divider className="bg-gray-600"/>
                
            {/* // List */}

        <div className="px-6 py-2 flex flex-col gap-2 overflow-y-auto max-h-[40vh] ">
        <div className="flex justify-between rounded-lg items-center py-2 px-3 -mx-3 cursor-pointer transition-all duration-300 
               bg-ct-white-900">
                <div className="flex items-center gap-1">
                    <div  className="flex items-center justify-center relative w-8 h-8 min-w-[32px]">
                    <img src="https://static.jup.ag/jlp/icon.png" class="object-cover rounded-full w-[26px] h-[26px]" alt="JLP"></img>
                    </div>

                    <div className="flex flex-col text-ct-white-500">
                        <div className="flex items-center gap-1">
                        <span class="text-ct-base text-gray-200 font-medium ml-1">JLP</span>
                    
                        </div>

                    <span class="text-ct-sm ml-1 text-gray-400">Jupiter Perps LP</span>
                    </div>
                </div>

                <div>
                  <span className="text-lg text-green-300">0</span>
                </div>
               </div>

               <div className="flex justify-between rounded-lg items-center py-2 px-3 -mx-3 cursor-pointer transition-all duration-300 
               bg-ct-white-900">
                <div className="flex items-center gap-1">
                    <div  className="flex items-center justify-center relative w-8 h-8 min-w-[32px] ">
                    <img src="https://static.jup.ag/jlp/icon.png" class="object-cover rounded-full w-[26px] h-[26px]" alt="JLP"></img>
                    </div>

                    <div className="flex flex-col text-ct-white-500">
                        <div className="flex items-center gap-1">
                        <span class="text-ct-base text-gray-200 font-medium ml-1">JLP</span>
                        </div>

                    <span class="text-ct-sm ml-1 text-gray-400">Jupiter Perps LP</span>
                    </div>
                </div>

                <div>
                  <span className="text-lg text-green-300">0</span>
                </div>
              
                
               </div>

               <div className="flex justify-between rounded-lg items-center py-2 px-3 -mx-3 cursor-pointer transition-all duration-300 
               bg-ct-white-900">
                <div className="flex items-center gap-1">
                    <div  className="flex items-center justify-center relative w-8 h-8 min-w-[32px]">
                    <img src="https://static.jup.ag/jlp/icon.png" class="object-cover rounded-full w-[26px] h-[26px]" alt="JLP"></img>
                    </div>

                    <div className="flex flex-col text-ct-white-500">
                        <div className="flex items-center gap-1">
                        <span class="text-ct-base text-gray-200 font-medium ml-1">JLP</span>
                        </div>

                    <span class="text-ct-sm ml-1 text-gray-400">Jupiter Perps LP</span>
                    </div>
                </div>

               <div>
                  <span className="text-lg text-green-300">0</span>
                </div>
               </div>



               <div className="flex justify-between rounded-lg items-center py-2 px-3 -mx-3 cursor-pointer transition-all duration-300 
               bg-ct-white-900">
                <div className="flex items-center gap-1">
                    <div  className="flex items-center justify-center relative w-8 h-8 min-w-[32px]">
                    <img src="https://static.jup.ag/jlp/icon.png" class="object-cover rounded-full w-[26px] h-[26px]" alt="JLP"></img>
                    </div>

                    <div className="flex flex-col text-ct-white-500">
                        <div className="flex items-center gap-1">
                        <span class="text-ct-base text-gray-200 font-medium ml-1">JLP</span>
                        </div>

                    <span class="text-ct-sm ml-1 text-gray-400">Jupiter Perps LP</span>
                    </div>
                </div>
                <div>
                  <span className="text-lg text-green-300">0</span>
                </div>
               </div>

        </div>



      </Modal>
    </>
  );
}

export default StepSecondSelectToken;
