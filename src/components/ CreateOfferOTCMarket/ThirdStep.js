import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Tooltip } from 'antd';
import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext';
import Escrow9MMContract from '../../web3/contracts/Escrow9MM';
import useSigner from '../../hooks/useSigner';
import Erc20Contract from '../../web3/contracts/Erc20';
import { ethers } from 'ethers';

function ThirdStep({ StepsIncreament, StepsDecreament }) {
  const { formState, updateFormState, resetFormState } =
    useContext(FormDataContext);

  const { signer } = useSigner();

  console.log('formstate', formState);

  async function handleSubmit() {
    const {
      BaseToken: baseToken,
      inputFirst: baseAmount,
      QutoeToken: quoteToken,
      inputSecond: quoteAmount,
      FillType: fillType,
      buyAndSaleRadio: tradeType,
    } = formState;
    // StepsIncreament();
    // updateFormState(values);

    // initialize contract
    const baseTokenContract = new Erc20Contract(baseToken, signer);
    const quoteTokenContract = new Erc20Contract(quoteToken, signer);
    const escrow9mmContract = new Escrow9MMContract(signer);

    const baseTokenDecimals = await baseTokenContract.decimals();
    const quoteTokenDecimals = await quoteTokenContract.decimals();

    let approveAmount = ethers.utils.parseUnits(
      quoteAmount,
      quoteTokenDecimals
    );
    approveAmount = approveAmount.add(approveAmount.div(1000));

    const approveTx = await quoteTokenContract.approve(
      escrow9mmContract.contract.address,
      approveAmount
    );
    await approveTx.wait();

    const createOfferTx = await escrow9mmContract.createOffer(
      baseToken,
      ethers.utils.parseUnits(baseAmount, baseTokenDecimals),
      quoteToken,
      ethers.utils.parseUnits(quoteAmount, quoteTokenDecimals),
      fillType,
      tradeType
    );
    await createOfferTx.wait();
  }

  return (
    <>
      <Form
        onFinish={handleSubmit}
        onFinishFailed={(errorInfo) => {
          console.log('Failed:', errorInfo);
        }}
      >
        <div className="bg-[#121212] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
        <Divider className="bg-gray-700 m-1"/>
          <div className="flex px-6 ">
            <div className="p-6">
              <div>
                <div className="thirdHead w-[405px]">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <div className=" w-12 h-12">
                          <div className="relative w-12 h-12 min-w-[48px]">
                            <img
                              src="https://static.jup.ag/jlp/icon.png"
                              className="object-cover rounded-full w-12 h-12 min-w-[48px]"
                              alt="image-logo"
                            />
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                              className="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                              alt="image-logo"
                            ></img>
                          </div>
                        </div>

                        <span className="font-medium text-[16px] text-white uppercase">
                          JLP
                        </span>
                      </div>

                      <div className="flex flex-col border border-[#FFFFFF33] text-[14px] leading-[19.09px] rounded-lg font-[400] ">
                        <div className="divide-y divide-[#FFFFFF33]">
                          <span className="flex items-center justify-between px-4 py-3">
                            <span className="text-[rgb(128,128,128)] ">
                              Offer Type
                            </span>

                            <span
                              id="tooltip-buy-undefined"
                              className="bg-success/10 text-success px-1.5 py-1 uppercase w-fit text-[8px]font-semibold rounded cursor-default text-green-400"
                            >
                              Buying
                            </span>
                          </span>
                          <span className="flex items-center justify-between px-4 py-3">
                            <span className="flex items-center gap-1.5">
                              <div className="text-[rgb(128,128,128)] flex items-center gap-2">
                                <span>Want to buy</span>
                                <span>
                                  <Tooltip
                                    placement="top"
                                    title="Total token you want to buy. "
                                    className=" w-3 h-3 cursor-pointer"
                                  >
                                    <InfoCircleOutlined />
                                  </Tooltip>
                                </span>
                              </div>

                              <i
                                id="total-amount"
                                className="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                              ></i>
                            </span>
                            <span className="text-ct-gray-200 flex gap-1 items-center font-medium text-white">
                              1
                              <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                                <img
                                  src="https://static.jup.ag/jlp/icon.png"
                                  className="object-cover rounded-full w-4 h-4"
                                  alt="JLP"
                                />
                              </div>
                            </span>
                          </span>
                          <span className="flex items-center justify-between px-4 py-3">
                            <span className="flex items-center gap-1.5">
                              <div className="text-[rgb(128,128,128)] flex items-center gap-2">
                                <span>For</span>
                                <span>
                                  <Tooltip
                                    placement="top"
                                    title="The amount you are paying. "
                                    className=" w-3 h-3 cursor-pointer"
                                  >
                                    <InfoCircleOutlined />
                                  </Tooltip>
                                </span>
                              </div>
                              <i
                                id="for"
                                className="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                              ></i>
                            </span>
                            <span className="text-ct-gray-200 flex gap-1 items-center font-medium text-white">
                              2
                              <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                                <img
                                  src="https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                                  className="object-cover rounded-full w-4 h-4"
                                  alt="USDC"
                                />
                              </div>
                            </span>
                          </span>
                          <span className="flex items-center justify-between px-4 py-3">
                            <span className="flex items-center gap-1.5">
                              <div className="text-[rgb(128,128,128)] flex items-center gap-2">
                                <span>Price / Token</span>
                                <span>
                                  <Tooltip
                                    placement="top"
                                    title="Token price per offered amount. "
                                    className=" w-3 h-3 cursor-pointer"
                                  >
                                    <InfoCircleOutlined />
                                  </Tooltip>
                                </span>
                              </div>
                              <i
                                id="price"
                                className="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                              ></i>
                            </span>
                            <span className="text-ct-gray-200 font-medium text-white">
                              $2
                            </span>
                          </span>
                          <span className="flex items-center justify-between px-4 py-3">
                            <span className="text-[#808080]">Fill Type</span>
                            <span id="fill-type" className="cursor-pointer">
                              <span
                                id="tooltip-partial-undefined"
                                className="bg-[#2F2F2F] text-[#ffffff80] px-1.5 py-1 uppercase w-fit text-[10px] font-semibold rounded cursor-default "
                              >
                                partial fill
                              </span>
                            </span>
                          </span>
                          <span className="flex items-center justify-between px-4 py-3">
                            <span className="flex items-center gap-1.5">
                              <div className="text-[rgb(128,128,128)] flex items-center gap-2">
                                <span>Listing Fee (0.1%)</span>
                                <span>
                                  <Tooltip
                                    placement="top"
                                    title="The platform fee for listing offer. "
                                    className=" w-3 h-3 cursor-pointer"
                                  >
                                    <InfoCircleOutlined />
                                  </Tooltip>
                                </span>
                              </div>
                              <i
                                id="listing-fee"
                                className="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-white"
                              ></i>
                            </span>
                            <span className="text-ct-gray-200 flex gap-1 items-center font-medium text-white">
                              0.002
                              <div className="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                                <img
                                  src="https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                                  className="object-cover rounded-full w-4 h-4"
                                  alt="USDC"
                                />
                              </div>
                            </span>
                          </span>
                          <span className="flex items-center justify-between px-4 py-3">
                            <span className="text-[#808080]">Privacy</span>
                            <span id="privacy" className="cursor-pointer">
                              <span className="text-ct-base font-medium text-info text-[#437FEC]">
                                Public
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button
                        className="capitalize  text-black rounded-lg p-7 border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94]"
                        onClick={StepsDecreament}
                      >
                        Back
                      </Button>
                      <Button
                        className="capitalize rounded-lg p-7  text-black   border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94]"
                        htmlType="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ThirdStep;
