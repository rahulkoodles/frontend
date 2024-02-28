import React, { useState } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Menu } from "antd";
import salonaImg from "../../imgs/salona.png";

function DropDown() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuClick = (item) => {
    message.info(`Selected item: ${item.key}`);
    setSelectedItem(item.key); // Update the selected item state

  };

  const items = [
    {
      label: "Ethereum",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Manta",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "Manta",
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: "Starknet",
      key: "4",
      icon: <UserOutlined />,
    },
    {
      label: "Arbitrum",
      key: "5",
      icon: <UserOutlined />,
    },
  ];

  const menu = (
    <Menu onClick={(e) => handleMenuClick(e.item)}>
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      className="h-[40px] !hover:text-white md:!w-[152px] w-[80px] sm:!w-[80px]"
      trigger={["click"]}
    >
      <Button className="text-[#121212] w-[10rem] h-[40px] flex items-center justify-between text-lg">
        <div className="flex gap-2 items-center">
          <img src={salonaImg} alt="" />
          <span className="hidden lg:inline">Solana</span>
        </div>
        <span>
          <DownOutlined />
        </span>
      </Button>
      <Button className="text-[#121212] w-[10rem] h-[40px] flex items-center justify-between text-lg">
        <div className="flex gap-2 items-center">
          <img src={salonaImg} alt="" />
          <span className="hidden lg:inline">Solana</span>
        </div>
        <span>
          <DownOutlined />
        </span>
      </Button>
    </Dropdown>
  );
}

export default DropDown;
