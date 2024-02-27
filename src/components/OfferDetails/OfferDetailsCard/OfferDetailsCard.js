import React from "react";
import Items from "./Items";
import { Tooltip } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const OfferDetailsCard = () => {
  const textHeading = "Offer";
  return (
    <div className="flex-1 p-6 flex flex-col gap-3 text-base text-gray-500">
      <div class="text-[14px] font-[400] text-[#FFFFFF] uppercase mb-4">
        Offer Details
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading={textHeading}
          tooltipText="The amount that offer creator want to sell"
        />
        <span class="flex items-center gap-1 text-gray-200 font-medium justify-end">
          1.7M
          <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
            <img
              src="https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
              class="object-cover rounded-full w-4 h-4"
              alt="Bonk"
            />
          </div>
        </span>
      </div>

      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading="For"
          tooltipText="The amount that offer creator seeks to acquire"
        />
        <span class="flex items-center gap-1 text-gray-200 font-medium justify-end">
          39.4
          <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
            <img
              src="https://assets.coingecko.com/coins/images/325/large/Tether.png"
              class="object-cover rounded-full w-4 h-4"
              alt="Bonk"
            />
          </div>
        </span>
      </div>

      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading="Price / Token"
          tooltipText="Token price per offered amount "
        />
        <span class="flex items-center gap-1 text-gray-200 font-medium justify-end">
          39.4
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items textHeading="Fill Type" check={false} />
        <Tooltip
          placement="top"
          title="Multiple users can contribute to fulfill the offer."
          className="tooltip-text text-end"
        >
          <span class="text-gray-500 text-end">
            <span class="bg-[#D9D9D933] text-[10px] text-[#FFFFFF80] px-1.5 py-1 uppercase w-fit font-semibold rounded">
              partial fill
            </span>
          </span>
        </Tooltip>
      </div>

      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747] ">
        <Items textHeading="Privacy" check={false} />
        <Tooltip
          placement="top"
          title="Everyone can see your offer"
          className="tooltip-text text-end text-[#6135A8] "
        >
          <span class="flex items-center gap-1 font-medium justify-end">
            Public
          </span>
        </Tooltip>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading="Filled Amount"
          tooltipText="Total Amount filled by others."
        />
        <span class="flex items-center gap-1 text-gray-200 font-medium justify-end">
          0
          <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
            <img
              src="https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
              class="object-cover rounded-full w-4 h-4"
              alt="Bonk"
            />
          </div>
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading="Remaining Amount          "
          tooltipText="Unfilled remaining amount."
        />
        <span class="flex items-center gap-1 text-gray-200 font-medium justify-end">
          1,715,029
          <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
            <img
              src="https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
              class="object-cover rounded-full w-4 h-4"
              alt="Bonk"
            />
          </div>
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading="Offer Creator          "
          tooltipText="Offer creator's wallet address"
        />
        <span class="arrowright flex items-center gap-1 text-gray-200 font-medium justify-end">
          <span class="cursor-pointer">2pV...qpL</span>
          <span class="w-4 h-5 flex items-center justify-center">
            <i class="w-[8.39px]">
              <ArrowRightOutlined  color="#FFFFFF80"rotate={-60} />
            </i>
          </span>
        </span>
      </div>

      <div className="grid grid-cols-2 items-center gap-2 py-3  ">
        <Items
          textHeading="Offer Tx"
          tooltipText="Offer creation transaction hash"
        />
        <span class="arrowright flex items-center gap-1 text-[#FFFFFF] font-[16px] justify-end">
          <span class="cursor-pointer capitalize font-semibold">Solscan</span>
          <span class="w-4 h-5 flex items-center justify-center">
            <i class=" w-[8.39px]">
              <ArrowRightOutlined color="#FFFFFF80"  rotate={-60} />
            </i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default OfferDetailsCard;
