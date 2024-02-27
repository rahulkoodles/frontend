import { Switch } from "antd";
import React from "react";
import { StyeledOrderHistory } from "../../../styles/styelsOfferdetails";

const OrderHistory = () => {
  return (
    <StyeledOrderHistory>
      <div className="w-full col-span-12 order-3 p-6 bg-[#121212] rounded-lg">
        <div className="flex justify-between items-center">
          <div class="mb-4 text-sm font-semibold text-white uppercase">
            Orders History
          </div>
          <div className="order-switch ">
            <label class="font-light select-none cursor-pointer text-[#FFFFFF66] mr-4 text-sm">
              Only me
            </label>
            <Switch />
          </div>
        </div>
        <div className="whitespace-nowrap overflow-auto">
          <table className="w-full table-auto text-left text-xs ">
            <thead>
              <tr class="border-b border-gray-800 text-xs font-semibold text-[#FFFFFF66] uppercase">
                <th class="border-none bg-transparent py-3">
                  <span class="">Time</span>
                </th>
                <th class="border-none text-right bg-transparent py-3 px-2">
                  <span class="">filled Amount</span>
                </th>
                <th class="border-none text-right bg-transparent py-3 px-2">
                  <span class="">PAID amount </span>
                </th>
                <th class="border-none text-right bg-transparent py-3 px-2">
                  <span class="">TX. Hash</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800 text-base text-[#FFFFFF66]">
                <td className="py-3">
                  <div className="">
                    <div className="inline-flex items-center whitespace-nowrap">
                      <span>a day ago</span>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <span className="flex items-center gap-1 justify-end">
                    <span>100</span>
                    <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                      <img
                        src="https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
                        className="object-cover rounded-full w-4 h-4"
                        alt="Bonk"
                      />
                    </div>
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="flex items-center gap-1 justify-end">
                    0.0024{" "}
                    <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                      <img
                        src="https://assets.coingecko.com/coins/images/6319/large/usdc.png"
                        className="object-cover rounded-full w-4 h-4"
                        alt="USDC"
                      />
                    </div>
                  </span>
                </td>
                <td className="text-right px-2">
                  <span className="cursor-pointer">
                    5evY...bFKt
                    <i className=" text-gray-500 self-center"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StyeledOrderHistory>
  );
};

export default OrderHistory;
