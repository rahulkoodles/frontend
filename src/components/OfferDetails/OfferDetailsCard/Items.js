import { InfoCircleFilled, InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";

const Items = ({
  textHeading = "Offer",
  tooltipText = "text is not define ",
  check=true
}) => {
  return (
    <span className="flex items-center gap-1.5 text-[#FFFFFF80] ">
      {textHeading}
      {check && (
        <Tooltip
          className=" mt-0.5 text-[] text-[16px] w-3 h-3 cursor-pointer "
          placement="top"
          title={tooltipText}
        >
          {/* <InfoCircleFilled/> */}
          <InfoCircleOutlined/>
        </Tooltip>
      )}
    </span>
  );
};

export default Items;
