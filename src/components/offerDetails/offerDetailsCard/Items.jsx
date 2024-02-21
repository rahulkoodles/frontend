import { InfoCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";

const Items = ({
  textHeading = "Offer",
  tooltipText = "text is not define ",
  check=true
}) => {
  return (
    <span class="flex items-center gap-1.5">
      {textHeading}
      {check && (
        <Tooltip
          className=" mt-0.5 text-[#fffffff80] text-[16px] w-3 h-3 cursor-pointer"
          placement="top"
          title={tooltipText}
        >
          <InfoCircleFilled />
        </Tooltip>
      )}
    </span>
  );
};

export default Items;
