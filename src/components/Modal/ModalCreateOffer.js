import { WalletFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React from "react";

const ModalCreateOffer = ({ isOpen, closeModal }) => {
  return (
    <div>
      <Modal
        width={500}
        open={isOpen}
        onCancel={closeModal}
        footer={null}
        className=""
      >
        <di className="flex flex-nowrap justify-around">
          <div className=" ">
            <span className=" text-[20px] text-white ">
              connect your wallet
            </span>
          </div>
          <div>
            <Button className=" bg-green-500 h-10">
              <WalletFilled />
              <span>Connect</span>
            </Button>
          </div>
        </di>
      </Modal>
    </div>
  );
};

export default ModalCreateOffer;
