import React from 'react';
import Items from './Items';
import { Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { truncateAddress } from '../../utils';

const OfferDetailsCard = ({ offerDetails }) => {
  return (
    <div className="flex-1 p-6 flex flex-col gap-3 text-base text-gray-500">
      <div className="text-[14px] font-[400] text-[#FFFFFF] uppercase mb-4">
        Offer Details
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading="Offer"
          tooltipText="The amount that offer creator want to sell"
        />
        <span className="flex items-center gap-1 text-gray-200 font-medium justify-end">
          {offerDetails.baseTokenAmount} {offerDetails.baseTokenSymbol}
          <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
            <img
              src="https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
              className="object-cover rounded-full w-4 h-4"
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
        <span className="flex items-center gap-1 text-gray-200 font-medium justify-end">
          {offerDetails.quoteTokenAmount} {offerDetails.quoteTokenSymbol}
          <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
            <img
              src="https://assets.coingecko.com/coins/images/325/large/Tether.png"
              className="object-cover rounded-full w-4 h-4"
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
        <span className="flex items-center gap-1 text-gray-200 font-medium justify-end">
          {offerDetails.pricePerToken}
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items textHeading="Fill Type" check={false} />
        <Tooltip
          placement="top"
          title="Multiple users can contribute to fulfill the offer."
          className="tooltip-text text-end"
        >
          <span className="text-gray-500 text-end">
            <span className="bg-[#D9D9D933] text-[10px] text-[#FFFFFF80] px-1.5 py-1 uppercase w-fit font-semibold rounded">
              {offerDetails.fillType}
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
          <span className="flex items-center gap-1 font-medium justify-end">
            Public
          </span>
        </Tooltip>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading="Filled Amount"
          tooltipText="Total Amount filled by others."
        />
        <span className="flex items-center gap-1 text-gray-200 font-medium justify-end">
          {offerDetails.filledAmount} {offerDetails.baseTokenSymbol}
          <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
            <img
              src="https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
              className="object-cover rounded-full w-4 h-4"
              alt="Bonk"
            />
          </div>
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3 border-b-2 border-[#474747]">
        <Items
          textHeading="Remaining Amount"
          tooltipText="Unfilled remaining amount."
        />
        <span className="flex items-center gap-1 text-gray-200 font-medium justify-end">
          {offerDetails.remainingAmount} {offerDetails.baseTokenSymbol}
          <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
            <img
              src="https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
              className="object-cover rounded-full w-4 h-4"
              alt="Bonk"
            />
          </div>
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-2 py-3">
        <Items
          textHeading="Offer Creator"
          tooltipText="Offer creator's wallet address"
        />
        <span className="arrowright flex items-center gap-1 text-gray-200 font-medium justify-end">
          <span className="cursor-pointer">{truncateAddress(offerDetails.offerCreator, 3)}</span>
          <span className="w-4 h-5 flex items-center justify-center">
            <i className="w-[8.39px]">
              <ArrowRightOutlined color="#FFFFFF80" rotate={-60} />
            </i>
          </span>
        </span>
      </div>

      {/* <div className="grid grid-cols-2 items-center gap-2 py-3  ">
        <Items
          textHeading="Offer Tx"
          tooltipText="Offer creation transaction hash"
        />
        <span className="arrowright flex items-center gap-1 text-[#FFFFFF] font-[16px] justify-end">
          <span className="cursor-pointer capitalize font-semibold">
            Etherscan
          </span>
          <span className="w-4 h-5 flex items-center justify-center">
            <i className=" w-[8.39px]">
              <ArrowRightOutlined color="#FFFFFF80" rotate={-60} />
            </i>
          </span>
        </span>
      </div> */}
    </div>
  );
};

export default OfferDetailsCard;
