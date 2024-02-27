import { Collapse, Divider } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className=" ml-6 mt-[50px]">
        <div class="flex items-center gap-2">
          <span class="flex items-center gap-2 font-semibold">
            <span class="text-md text-white">My Created Offers</span>
            <span class="p-1 bg-[#1B1B1B] rounded-full text-xs  text-white min-w-[20px] text-center">
              0
            </span>
          </span>
        </div>
      </div>
      <Divider />
      <div>
        <span class="flex w-full items-center justify-center col-span-4 font-medium text-white text-base">
          No Offers Found
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
