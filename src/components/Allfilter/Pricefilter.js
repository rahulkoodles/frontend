import { Select } from "antd";
import React from "react";

const Pricefilter = () => {
  return (
    <div className="price-filter">
      <Select
        className=" "
        defaultValue="price"
        style={{ width: 200, background: "" }}
        getPopupContainer={(trigger) => trigger.parentElement}
        options={[
          {
            options: [
              { label: "Created", value: "created" },
              { label: "Price", value: "price" },
              { label: "Collateral", value: "collateral" },
            ],
          },
          {
            options: [
              { label: "Sort Ascending", value: "ascending" },
              { label: "Sort Descending", value: "descending" },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Pricefilter;
