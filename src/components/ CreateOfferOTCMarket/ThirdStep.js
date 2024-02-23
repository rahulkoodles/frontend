import React from "react";

function ThirdStep(props) {
  return (
    <>
      <div className="bg-[#121212] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
        {/* //****** Stepper*** */}
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
                            class="object-cover rounded-full w-12 h-12 min-w-[48px]"
                            alt="image-logo"
                          />
                          <img
                            src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                            class="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                            alt="image-logo"
                          ></img>
                        </div>
                      </div>

                      <span className="font-medium text-ct-xl text-ct-gray-200 uppercase">
                        JLP
                      </span>
                    </div>

                    <div className="flex flex-col border border-ct-white-900 text-ct-base text-ct-gray-500 rounded-lg  ">
                      <div className="divide-y divide-ct-white-900">
                        <span class="flex items-center justify-between px-4 py-3">
                          <span class="text-white">Offer Type</span>
                          <span
                            id="tooltip-buy-undefined"
                            class="bg-success/10 text-success px-1.5 py-1 uppercase w-fit text-ct-xs font-semibold rounded cursor-default text-green-400"
                          >
                            buying
                          </span>
                        </span>
                        <span class="flex items-center justify-between px-4 py-3">
                          <span class="flex items-center gap-1.5">
                            <span class="text-white">Want to buy</span>
                            <i
                              id="total-amount"
                              class="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                            ></i>
                          </span>
                          <span class="text-ct-gray-200 flex gap-1 items-center font-medium text-gray-400">
                            1
                            <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                              <img
                                src="https://static.jup.ag/jlp/icon.png"
                                class="object-cover rounded-full w-4 h-4"
                                alt="JLP"
                              />
                            </div>
                          </span>
                        </span>
                        <span class="flex items-center justify-between px-4 py-3">
                          <span class="flex items-center gap-1.5">
                            <span class="text-white">For</span>
                            <i
                              id="for"
                              class="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                            ></i>
                          </span>
                          <span class="text-ct-gray-200 flex gap-1 items-center font-medium text-gray-400">
                            2
                            <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                              <img
                                src="https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                                class="object-cover rounded-full w-4 h-4"
                                alt="USDC"
                              />
                            </div>
                          </span>
                        </span>
                        <span class="flex items-center justify-between px-4 py-3">
                          <span class="flex items-center gap-1.5">
                            <span class="text-white">Price / Token</span>
                            <i
                              id="price"
                              class="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                            ></i>
                          </span>
                          <span class="text-ct-gray-200 font-medium text-gray-400">
                            $2
                          </span>
                        </span>
                        <span class="flex items-center justify-between px-4 py-3">
                          <span class="text-white">Fill Type</span>
                          <span id="fill-type" class="cursor-pointer">
                            <span
                              id="tooltip-partial-undefined"
                              class="bg-ct-gray-700 text-ct-gray-500 px-1.5 py-1 uppercase w-fit text-ct-xs font-semibold rounded cursor-default text-gray-400"
                            >
                              partial fill
                            </span>
                          </span>
                        </span>
                        <span class="flex items-center justify-between px-4 py-3">
                          <span class="flex items-center gap-1.5">
                            <span class="text-white">Listing Fee (0.1%)</span>
                            <i
                              id="listing-fee"
                              class="fa-regular fa-circle-info w-3 h-3 cursor-pointer text-ct-xs text-ct-gray-600"
                            ></i>
                          </span>
                          <span class="text-ct-gray-200 flex gap-1 items-center font-medium text-gray-400">
                            0.002
                            <div class="flex items-center justify-center relative w-5 h-5 min-w-[20px]">
                              <img
                                src="https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694"
                                class="object-cover rounded-full w-4 h-4"
                                alt="USDC"
                              />
                            </div>
                          </span>
                        </span>
                        <span class="flex items-center justify-between px-4 py-3">
                          <span class="text-white">Privacy</span>
                          <span id="privacy" class="cursor-pointer">
                            <span class="text-ct-base font-medium text-info text-gray-400">
                              Public
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdStep;
