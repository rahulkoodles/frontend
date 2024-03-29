import { FilterOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";

const DrawerFilter = () => {
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(!open);
  };
  return (
    <div className="drawer-class ">
      <Button className=" bg-inherit hover:bg-transparent" onClick={showDefaultDrawer}>
        <FilterOutlined size={30} className=" text-gray-300" />
      </Button>
      <Drawer
        title={`${378} Drawer`}
        placement="right"
        size={378}
        onClose={onClose}
        open={open}
        
        extra={
          <Space  className="">
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      ></Drawer>
    </div>
  );
};

export default DrawerFilter;
