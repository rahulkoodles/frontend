import { Modal } from "antd";
import React from "react";

const ModalCreateOffer = ({ isOpen }) => {
  return (
    <div>
      <Modal
        
        open={isOpen}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <p> moadl for crate offers </p>
      </Modal>
    </div>
  );
};

export default ModalCreateOffer;
