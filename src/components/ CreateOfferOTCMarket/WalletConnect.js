import { Divider } from 'antd';
import WalletImg from '../../imgs/AllWalletImg.png';
import ConnectButton from '../ConnectButton/ConnectButton';

const WalletConnect = () => {
  return (
    <div className="flex justify-center items-center w-full h-[86vh]">
      <div className="mx-auto max-md:w-[18rem] md:w-[44.125rem] h-[60vh] bg-[#121212] p-3 rounded-[15px]">
        <div className="mt-2">
          <div className="flex justify-center items-center">
            <span className="text-3xl text-white">Wallet Connect</span>
          </div>
          <Divider className="mt-5 bg-gray-700" />
        </div>
        <div className=" w-full  h-[40vh]">
          <div className=" h-full  mt-10">
            <div className="h-full flex justify-between ">
              <div className=" w-[32vh] m-0 p-0">
                <div className="flex flex-col text-white px-2 h-full">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis porro, minus voluptate ab expedita quisquam!
                    Necessitatibus nulla veniam iusto culpa eum
                  </p>
                </div>
              </div>
              <Divider
                className="createOffeDeivder bg-white m-0"
                style={{ width: '1px' }}
              />
              <div>
                <div className="text-white px-2 flex flex-col items-center gap-4">
                  <img src={WalletImg} alt="" className="w-[20rem] " />
                  <ConnectButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
