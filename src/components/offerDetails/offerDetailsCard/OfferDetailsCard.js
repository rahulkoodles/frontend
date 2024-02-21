import React from "react";
import Items from "./Items";
import { Tooltip } from "antd";

const OfferDetailsCard = () => {
  const textHeading = "Offer";
  return (
    <div className="flex-1 p-6 flex flex-col gap-3 text-base text-gray-500">
      <div class="text-sm font-semibold text-gray-200 uppercase mb-4">
        Offer Details
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading={textHeading}
          tooltipText="The amount that offer creator want to be sell"
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
            <span class="bg-[#D9D9D933] text-[#FFFFFF80] px-1.5 py-1 uppercase w-fit font-semibold rounded">
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
          className="tooltip-text text-end"
        >
          <span class="flex items-center gap-1 text-[#0E76FD] font-medium justify-end">
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
          tooltipText="Offer creator's wallete address"
        />
        <span class="flex items-center gap-1 text-gray-200 font-medium justify-end">
          <span class="cursor-pointer">2pV...qpL</span>
          <span class="w-4 h-5 flex items-center justify-center">
            <i class="fa-regular fa-arrow-up-right text-base text-gray-600"></i>
          </span>
        </span>
      </div>

      <div className="grid grid-cols-2 items-center gap-2 py-3  ">
        <Items
          textHeading="Offer Tx"
          tooltipText="Offer creation transaction hash"
        />
        <span class="flex items-center gap-1 text-ct-gray-200 font-medium justify-end">
          <span class="cursor-pointer capitalize font-semibold">Solscan</span>
          <span class="w-4 h-5 flex items-center justify-center">
            <i class="fa-regular fa-arrow-up-right text-base text-ct-gray-600"></i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default OfferDetailsCard;
