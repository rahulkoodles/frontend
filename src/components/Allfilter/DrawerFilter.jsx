import { FilterOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import DrawerImg from "../../imgs/Frame 34.png";

const DrawerFilter = () => {
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(!open);
  };
  return (
    <div className="drawer-class ">
      <Button
        className=" bg-inherit hover:bg-transparent"
        onClick={showDefaultDrawer}
      >
        <div className=" flex flex-wrap space-x-2 ">
          <img src={DrawerImg} />
          <span className="text-[#FFFFFF40]  text-[14px] before:content-[none] ">
            Filter
          </span>
        </div>
      </Button>
      <Drawer
        title={`Filter`}
        placement="right"
        width={450}
        onClose={onClose}
        open={open}
        className=" bg-black"
      >
        <div className="flex flex-col p-6 gap-6">
          {/* Network------------ */}
          <div className="text-ct-gray-200 text-ct-base border-b border-gray-800 pb-4">
            <div className="grid grid-cols-3 items-center">
              <div className="mr-6 col-span-1 text-white">Network</div>
              <div className="group bg-transparent col-span-2 flex items-center px-2.5 py-1.5 h-[36px] w-full justify-between border border-gray-800 rounded-lg gap-2 cursor-pointer text-gray-400">
                <span className="flex items-center gap-2 flex-1 text-ct-white-500">
                  <CiGlobe />
                  <span className="text-ct-base font-medium group-hover:text-ct-white-300 transition-all duration-300">
                    All Networks
                  </span>
                </span>
                <IoIosArrowDown />
              </div>
            </div>
          </div>

          {/* Fill Type---------- */}

          <div className="text-ct-gray-200 text-ct-base border-b border-gray-800">
            <div className="grid grid-cols-3">
              <div className="mr-6 text-white">Fill Type</div>

              <div className="flex flex-col col-span-2">
                <div className="container-checkbox text-white mb-4">
                  <div className="flex items-center  gap-2">
                    <input
                      type="checkbox"
                      // checked="true"
                      className="bg-transparent"
                    />
                    <span> Single Fill</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-sm text-gray-400 ml-6">
                      Entire offer must be filled by 1 user
                    </span>
                  </div>
                </div>

                <div className="container-checkbox text-white mb-4">
                  <div className="flex items-center  gap-2">
                    <input
                      type="checkbox"
                      // checked="true"
                      className="bg-transparent"
                    />

                    <span> Partial Fill</span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-ct-sm text-gray-400 ml-6">
                      Multiple users can contribute to fulfill the offer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button  */}

          <div className="py-3 grid grid-cols-2 gap-4">
            <button type="button" className="btn p-1 bg-green-400 rounded-md">
              Apply
            </button>
            <button type="button" className="btn p-1 bg-gray-700 rounded-md">
              Reset
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerFilter;
