import React from "react";
import ProfileImage from "../../imgs/profileImage.jpeg";
import { Button, Progress } from "antd";
import { StyledCardContainer } from "../../styles/stylesCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Card = ({ id, offer }) => {
  return (
    <StyledCardContainer>
      <Link to={`/offerdetails/${id}`}>
        <div className="w-full  h-full  px-[10px]  rounded-[15px]   ">
          <div className=" w-full h-[3rem] flex mt-[17px] ">
            <div className=" w-full h-full flex flex-1 gap-2 items-center">
              <div className="relative w-12 h-12 min-w-[3rem]">
                <img
                  src={ProfileImage}
                  className="object-cover rounded-full w-12 h-12 min-w-[3rem]"
                  alt="image-logo"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                  className="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                  alt="image-logo"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <span className="font-medium text-white cursor-pointer flex items-center gap-1.5 uppercase text-xl">
                  <span className=" flex gap-1">
                    <span>Bonk</span>
                    <span className="text-xs flex">
                      <span className="h-1/2">#1988</span>
                    </span>
                  </span>
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-[#D9D9D933] text-[#FFFFFF80] px-1.5 py-1 uppercase w-fit text-[10px] font-[500] leading-[12.21px] rounded cursor-pointer">
                    {offer.offerType === 0 ? "Partial fill" : "Single fill"}
                  </span>
                </div>
              </div>
            </div>
            <div className="my-ant-progress">
              <Progress
                strokeColor={"#00C896"}
                type="circle"
                percent={60}
                size={50}
                strokeWidth={8}
              />
            </div>
          </div>
          <div className=" mb-248px border-b-[1px] border-[#474747]  ">
            <div className="flex items-center justify-between text-gray-500 text-sm font-medium w-full mt-2">
              <div className="flex-1 flex flex-col gap-1 ">
                <span className="text-[10px] uppercase font-[400]">Offer</span>
                <div className="flex flex-col text-base gap-1">
                  <span className="flex gap-0.5 items-center text-[#FFFFFF]">
                    <span className=" text-[16px] font-[500] font-Helvetica Neue ">
                      5.00M Bonk
                    </span>
                    <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                      <img
                        src="https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I"
                        className="object-cover rounded-full w-4 h-4"
                        alt="Bonk"
                      />
                    </div>
                  </span>
                  <div className="flex  text-[12px] font-[400] flex-nowrap gap-0.5">
                    <span className="text-[#FFFFFF80] text-[12px] font-Helvetica Neue">
                      $0.000015
                    </span>
                    <span className="text-[#FFFFFF80] text-[12px] font-Helvetica Neue">
                      /Token
                    </span>
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right text-gray-600">
                <ArrowRightOutlined />
              </i>
              <div className="flex-1 flex flex-col items-end gap-1 ">
                <div className="flex-1 flex flex-col items-end gap-1 ">
                  <span className="text-[10px] text-[#FFFFFF80]  uppercase font-[400] font-Helvetica Neue ">
                    For
                  </span>
                  <div className="flex flex-col text-base items-end gap-1">
                    <div className="flex gap-0.5 items-center">
                      <span className="text-[16px] font-[400] text-[#6135A8]">
                        75
                      </span>
                      <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                        <img
                          src="https://assets.coingecko.com/coins/images/6319/large/usdc.png"
                          className="object-cover rounded-full w-4 h-4"
                          alt="USDC"
                        />
                      </div>
                    </div>
                    <span className="text-[10px] text-[#FFFFFF80]  uppercase font-[400] font-Helvetica Neue ">
                      $75
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-ant-button  ">
            <div className="flex items-center justify-between w-full mt-[8px]">
              <span className="text-[#FFFFFF80] text-[12px]">4 hours ago</span>

              <Link to="/offerdetails">
                <Button className=" bg-[#D9D9D933] text-[#FFFFFF80] border-none">
                  {offer.tradeType === 0 ? "Buy" : "Sell"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </StyledCardContainer>
  );
};

export default Card;
