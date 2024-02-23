import { Modal } from "antd";
import React from "react";

const ModalCreateOffer = ({ isOpen,closeModal }) => {
  return (
    <div>
      <Modal
        
        open={isOpen}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
        onCancel={closeModal}
      >
        <p> moadl for crate offers </p>
      </Modal>
    </div>
  );
};

export default ModalCreateOffer;
