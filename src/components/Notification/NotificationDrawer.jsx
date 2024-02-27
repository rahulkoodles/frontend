import React, { useState } from "react";
import { Button, Drawer } from "antd";
function NotificationDrawer({open , onClose}) {
//   const [open, setOpen] = useState(false);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

  return (
    <>
      <Drawer
       title="Basic Drawer" 
       onClose={onClose}
       visible={open}
       width={420}
       >
        <div className="overflow-y-auto pt-4">
          <a className="flex flex-col px-1 gap-4 mb-4 cursor-pointer bg-[#0E1420]" href="">
            <div className="flex flex-col">
              <div className="flex gap-3 w-full hover:bg-[#252525]">
                <div className="relative w-12 h-12 min-w-[48px]">
                  <img
                    src="https://pbs.twimg.com/profile_images/1739993119150505984/tP0Lcgwp_400x400.jpg"
                    class="object-cover rounded-full w-12 h-12 min-w-[48px]"
                    alt="image-logo"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                    class="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                    alt="image-logo"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1  pb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-ct-base text-ct-gray-200 cursor-pointer uppercase flex items-center gap-1.5">
                      <span class="flex gap-1">
                        <span className="text-white">Kamino</span>
                        <span class="text-ct-xs flex">
                          <span class="h-1/2 text-white">#16663</span>
                        </span>
                      </span>
                    </span>
                  </div>

                  <span class="text-white">
                    User{" "}
                    <span class="text-white font-medium">GYf...cE7</span>{" "}
                    just <span class="text-success font-medium">bought</span>{" "}
                    <span class="text-white">1 Runestone</span> for{" "}
                    <span class="text-white">5.5 SOL</span>
                  </span>

                  <div class="flex items-center gap-1 text-ct-sm text-white">
                    <span>a few seconds ago</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="4"
                      fill="none"
                    >
                      <circle cx="1.5" cy="2" r="1.5" fill="#414651"></circle>
                    </svg>
                    <div class="cursor-pointer">
                      Solscan<i class="fa-light fa-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>


          <a className="flex flex-col px-1 gap-4 mb-4 cursor-pointer bg-[#0E1420]" href="">
            <div className="flex flex-col">
              <div className="flex gap-3 w-full">
                <div className="relative w-12 h-12 min-w-[48px]">
                  <img
                    src="https://pbs.twimg.com/profile_images/1739993119150505984/tP0Lcgwp_400x400.jpg"
                    class="object-cover rounded-full w-12 h-12 min-w-[48px]"
                    alt="image-logo"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                    class="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                    alt="image-logo"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1  pb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-ct-base text-ct-gray-200 cursor-pointer uppercase flex items-center gap-1.5">
                      <span class="flex gap-1">
                        <span className="text-white">Kamino</span>
                        <span class="text-ct-xs flex">
                          <span class="h-1/2 text-white">#16663</span>
                        </span>
                      </span>
                    </span>
                  </div>

                  <span class="text-white">
                    User{" "}
                    <span class="text-white font-medium">GYf...cE7</span>{" "}
                    just <span class="text-success font-medium">bought</span>{" "}
                    <span class="text-white">1 Runestone</span> for{" "}
                    <span class="text-white">5.5 SOL</span>
                  </span>

                  <div class="flex items-center gap-1 text-ct-sm text-white">
                    <span>a few seconds ago</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="4"
                      fill="none"
                    >
                      <circle cx="1.5" cy="2" r="1.5" fill="#414651"></circle>
                    </svg>
                    <div class="cursor-pointer">
                      Solscan<i class="fa-light fa-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>


          <a className="flex flex-col px-1 gap-4 mb-4 cursor-pointer bg-[#0E1420]" href="">
            <div className="flex flex-col">
              <div className="flex gap-3 w-full">
                <div className="relative w-12 h-12 min-w-[48px]">
                  <img
                    src="https://pbs.twimg.com/profile_images/1739993119150505984/tP0Lcgwp_400x400.jpg"
                    class="object-cover rounded-full w-12 h-12 min-w-[48px]"
                    alt="image-logo"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                    class="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                    alt="image-logo"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1  pb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-ct-base text-ct-gray-200 cursor-pointer uppercase flex items-center gap-1.5">
                      <span class="flex gap-1">
                        <span className="text-white">Kamino</span>
                        <span class="text-ct-xs flex">
                          <span class="h-1/2 text-white">#16663</span>
                        </span>
                      </span>
                    </span>
                  </div>

                  <span class="text-white">
                    User{" "}
                    <span class="text-white font-medium">GYf...cE7</span>{" "}
                    just <span class="text-success font-medium">bought</span>{" "}
                    <span class="text-white">1 Runestone</span> for{" "}
                    <span class="text-white">5.5 SOL</span>
                  </span>

                  <div class="flex items-center gap-1 text-ct-sm text-white">
                    <span>a few seconds ago</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="4"
                      fill="none"
                    >
                      <circle cx="1.5" cy="2" r="1.5" fill="#414651"></circle>
                    </svg>
                    <div class="cursor-pointer">
                      Solscan<i class="fa-light fa-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a className="flex flex-col px-1 gap-4 mb-4 cursor-pointer bg-[#0E1420]" href="">
            <div className="flex flex-col">
              <div className="flex gap-3 w-full">
                <div className="relative w-12 h-12 min-w-[48px]">
                  <img
                    src="https://pbs.twimg.com/profile_images/1739993119150505984/tP0Lcgwp_400x400.jpg"
                    class="object-cover rounded-full w-12 h-12 min-w-[48px]"
                    alt="image-logo"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                    class="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                    alt="image-logo"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1  pb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-ct-base text-ct-gray-200 cursor-pointer uppercase flex items-center gap-1.5">
                      <span class="flex gap-1">
                        <span className="text-white">Kamino</span>
                        <span class="text-ct-xs flex">
                          <span class="h-1/2 text-white">#16663</span>
                        </span>
                      </span>
                    </span>
                  </div>

                  <span class="text-white">
                    User{" "}
                    <span class="text-white font-medium">GYf...cE7</span>{" "}
                    just <span class="text-success font-medium">bought</span>{" "}
                    <span class="text-white">1 Runestone</span> for{" "}
                    <span class="text-white">5.5 SOL</span>
                  </span>

                  <div class="flex items-center gap-1 text-ct-sm text-white">
                    <span>a few seconds ago</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="4"
                      fill="none"
                    >
                      <circle cx="1.5" cy="2" r="1.5" fill="#414651"></circle>
                    </svg>
                    <div class="cursor-pointer">
                      Solscan<i class="fa-light fa-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>


          <a className="flex flex-col px-1 gap-4 mb-4 cursor-pointer bg-[#0E1420]" href="">
            <div className="flex flex-col">
              <div className="flex gap-3 w-full">
                <div className="relative w-12 h-12 min-w-[48px]">
                  <img
                    src="https://pbs.twimg.com/profile_images/1739993119150505984/tP0Lcgwp_400x400.jpg"
                    class="object-cover rounded-full w-12 h-12 min-w-[48px]"
                    alt="image-logo"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                    class="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                    alt="image-logo"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1  pb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-ct-base text-ct-gray-200 cursor-pointer uppercase flex items-center gap-1.5">
                      <span class="flex gap-1">
                        <span className="text-white">Kamino</span>
                        <span class="text-ct-xs flex">
                          <span class="h-1/2 text-white">#16663</span>
                        </span>
                      </span>
                    </span>
                  </div>

                  <span class="text-white">
                    User{" "}
                    <span class="text-white font-medium">GYf...cE7</span>{" "}
                    just <span class="text-success font-medium">bought</span>{" "}
                    <span class="text-white">1 Runestone</span> for{" "}
                    <span class="text-white">5.5 SOL</span>
                  </span>

                  <div class="flex items-center gap-1 text-ct-sm text-white">
                    <span>a few seconds ago</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="4"
                      fill="none"
                    >
                      <circle cx="1.5" cy="2" r="1.5" fill="#414651"></circle>
                    </svg>
                    <div class="cursor-pointer">
                      Solscan<i class="fa-light fa-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a className="flex flex-col px-1 gap-4 mb-4 cursor-pointer bg-[#0E1420]" href="">
            <div className="flex flex-col">
              <div className="flex gap-3 w-full">
                <div className="relative w-12 h-12 min-w-[48px]">
                  <img
                    src="https://pbs.twimg.com/profile_images/1739993119150505984/tP0Lcgwp_400x400.jpg"
                    class="object-cover rounded-full w-12 h-12 min-w-[48px]"
                    alt="image-logo"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                    class="absolute bottom-0.5 left-0.5 object-cover rounded bg-black w-4 h-4 min-w-[1rem]"
                    alt="image-logo"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1  pb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-ct-base text-ct-gray-200 cursor-pointer uppercase flex items-center gap-1.5">
                      <span class="flex gap-1">
                        <span className="text-white">Kamino</span>
                        <span class="text-ct-xs flex">
                          <span class="h-1/2 text-white">#16663</span>
                        </span>
                      </span>
                    </span>
                  </div>

                  <span class="text-white">
                    User{" "}
                    <span class="text-white font-medium">GYf...cE7</span>{" "}
                    just <span class="text-success font-medium">bought</span>{" "}
                    <span class="text-white">1 Runestone</span> for{" "}
                    <span class="text-white">5.5 SOL</span>
                  </span>

                  <div class="flex items-center gap-1 text-ct-sm text-white">
                    <span>a few seconds ago</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="4"
                      fill="none"
                    >
                      <circle cx="1.5" cy="2" r="1.5" fill="#414651"></circle>
                    </svg>
                    <div class="cursor-pointer">
                      Solscan<i class="fa-light fa-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Drawer>
    </>
  );
}

export default NotificationDrawer;
