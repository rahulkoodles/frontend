// import React from 'react';
// import metaMaskImg from "../../imgs/metamask-icon.png";
// import WalletConnectImg from "../../imgs/WalletLogo.png";


// function WalletModal(props) {

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const showModal = () => {
//       setIsModalOpen(true);
//     };
//     const handleCancel = () => {
//       setIsModalOpen(false);
//     };
  
//     return (
//         <>
//           <Modal
//         open={isModalOpen}
//         onCancel={handleCancel}
//         style={{ width: "20px" }}
//         width={450}
//         className="modalStyle"
//         footer={null}
//         closeIcon={null}
//       >
//         <div className="w-full flex justify-between">
//               <div>
//                 <span className="text-white text-xl">Wallet Connect</span>
//               </div>
//               <div>
//               <span className=" text-white bg-red-100flex justify-center items-center bg-[#1A1F2E] px-3 py-2 rounded-full cursor-pointer"
//               onClick={()=>setIsModalOpen(false)}
//               ><span className="text-lg">X</span></span>
//               </div>


//         </div>
//         <div className=" flex flex-col gap-6 mt-10">
//           <div className="w-full  flex justify-center">
//             <p className="font-semibold text-2xl text-white">
//               {" "}
//               Hello Connect Your wallet
//             </p>
//           </div>

//           <button
//             className={` rounded-lg text-black px-4 h-full flex items-center hover:bg-[#1A1F2E]`}
//             // onClick={connectMetaMaskWallet}
//           >
//             <div className=" flex gap-4 text-white w-full items-center !hover:bg-red-100">
//               <span>
//                 <img src={metaMaskImg} alt="" className=" w-10 h-10" />
//               </span>
//               <span className="text-xl ml-2 text-center font-semibold">
//                 Meta Mask
//               </span>
//             </div>
//           </button>

//           {/* // Line between both constract */}
          
//           <div className="flex items-center">
//             <hr className="flex-grow border-t border-white mx-1" />
//             <span className="text-white font-bold ">Or</span>
//             <hr className="flex-grow border-t border-white mx-1" />
//           </div>

//           {/* //*************** Wallect Connect********************** */}

//           <button
//             className={` rounded-lg text-black px-4 h-full flex items-center hover:bg-[#1A1F2E]`}
//             onClick={address ? handleDisconnectWallet : handleConnectWallet}
//           >
//             <div className=" flex gap-4 text-white w-full items-center ">
//               <span>
//                 <img
//                   src={WalletConnectImg}
//                   alt=""
//                   className="object-cover w-10 h-10"
//                 />
//               </span>
//               <span className="text-xl ml-2 text-center font-semibold">
//                 Wallet Connect
//               </span>
//             </div>
//           </button>
//         </div>
//       </Modal>
//         </>
//     );
// }

// export default WalletModal;