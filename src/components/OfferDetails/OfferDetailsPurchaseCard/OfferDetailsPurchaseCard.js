import { Progress, Tooltip } from "antd";
import React from "react";

import ProfileImage from "../../../imgs/profileImage.jpeg";
import { StyledPurchaseCardDiv } from "../../../styles/styelsOfferdetails";
import {
  ArrowRightOutlined,
  InfoCircleFilled,
  InfoCircleOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import ConnectButton from "../../ConnectButton/ConnectButton";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { useSelector } from "react-redux";

const OfferDetailsPurchaseCard = () => {
  const { address } = useWeb3ModalAccount();
  const walletAddressRedux = useSelector((state) => state.auth.walletAddress);

  console.log('Address-------', address);
  console.log('Redux--------', walletAddressRedux);

  return (
    <StyledPurchaseCardDiv>
      <div className="flex flex-col h-full gap-4 px-4 py-6 border-b border-[#474747] text-gray-500">
        <div className=" w-full h-full flex  ">
          <div className=" w-full h-full flex flex-1 gap-2 items-center">
            <div className="relative w-12 h-12 min-w-[3rem]">
              <img
                src={ProfileImage}
                className="object-cover rounded-full w-12 h-full min-w-[3rem]"
                alt="image-logo"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                className="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                alt="image-logo"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <span className="font-medium text-gray-200 cursor-pointer flex items-center gap-1.5 uppercase text-xl">
                <span className=" flex gap-1">
                  <span>Bonk</span>
                  <span className="text-xs flex">
                    <span className="h-1/2">#1988</span>
                  </span>
                </span>
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#D9D9D933] text-[#FFFFFF80] px-1.5 py-1 uppercase w-fit text-xs font-semibold rounded cursor-pointer">
                  CA:DeZx...B263{" "}
                  <ArrowRightOutlined color="#FFFFFF80" rotate={-60} />
                </span>
              </div>
            </div>
          </div>
          <div className="my-ant-progress">
            <Progress
              strokeColor={"#50CE85"}
              type="circle"
              percent={60}
              size={50}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 h-full pb-10 text-sm text-gray-500 flex flex-col gap-4">
        <div class="text-[14px] font-semibold text-gray-200 uppercase">
          Your action
        </div>
        <div className="rounded-lg p-4 flex flex-col gap-3 bg-[#1B1B1B]">
          <span class="flex items-center gap-1.5 uppercase font-semibold">
            <span class="uppercase">
              <span class=" px-1.5 py-1 uppercase w-fit text-md font-semibold rounded cursor-default bg-[#00C89647] text-[#5dec96]">
                buying
              </span>
            </span>
            <Tooltip
              placement="top"
              title="The amount of token you want to buy "
              className="mt-0.5 text-gray-600 text-xs w-3 h-3 cursor-pointer"
            >
              <InfoCircleOutlined />
            </Tooltip>
          </span>
          <div className=" flex flex-nowrap justify-between">
            <div>
              <input
                type="text"
                inputmode="decimal"
                class="text-gray-200 text-xl w-full bg-transparent focus:outline-0 placeholder:text-white-500"
                placeholder="Enter amount"
                pattern="[0-9.,]*"
                value="4,9900,00"
              />
            </div>
            <img
              src={ProfileImage}
              class="object-cover rounded-full w-[26px] h-[26px]"
              alt="Bonk"
            />
          </div>
          <div className=" flex w-full gap-2 items-center">
            <input
              id="range"
              className=" flex-1 w-full accent-[#5dec96] border-transparent  cursor-pointer outline-none"
              type="range"
              name="fillAmount"
              step="1"
              max="4999900"
              value="4999"
            />
            <div className="border border-gray-700 p-[3px] rounded flex items-center text-center text-xs text-[#5dec96] font-semibold">
              <span class="w-10">100%</span>
            </div>
            <span class=" font-semibold cursor-pointer border border-gray-700 py-[3px] px-[5px] rounded text-xs text-[#5dec96]">
              MAX
            </span>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-[#1B1B1B] flex flex-col gap-3">
          <span className="flex items-center gap-1.5 uppercase font-semibold">
            Pay Amount
            <Tooltip
              placement="top"
              title="The amount of you are paying for seller "
              className="mt-0.5 text-gray-600 text-xs w-3 h-3 cursor-pointer"
            >
              <InfoCircleOutlined />
            </Tooltip>
          </span>
          <div className="flex justify-between gap-2 items-start">
            <span class="flex flex-col flex-1">
              <span class="text-lg text-white ">99.8</span>
              <span>$99.8</span>
            </span>
            <div class="flex items-center justify-center relative w-8 h-8 min-w-[32px]">
              <img
                src="https://assets.coingecko.com/coins/images/6319/large/usdc.png"
                class="object-cover rounded-full w-[26px] h-[26px]"
                alt="USDC"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 w-full h-[48px] rounded-lg text-base text-black font-medium text-start bg-CustomGreenColor">
         
          <ConnectButton />
          
        </div>

        <div class=" text-sm flex items-center p-2 gap-1 rounded-md bg-[#363539]">
          <InfoCircleOutlined />
          <div class="text-info text-[#d6cdcd]">
            <span>Platform fee (0.1%): 0.1199 USDC. </span>
            <a
              class="cursor-pointer underline"
              target="_blank"
              href="https://docs.whales.market/otc-markets/platform-fee"
            >
              More Info
            </a>
          </div>
        </div>
      </div>
    </StyledPurchaseCardDiv>
  );
};

export default OfferDetailsPurchaseCard;
