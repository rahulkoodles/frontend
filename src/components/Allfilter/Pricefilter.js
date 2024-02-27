import { Select } from "antd";
import React from "react";

const Pricefilter = () => {
  return (
    <div className="price-filter">
      <Select color="#FFFFFF40" className=" "
        defaultValue="price"
        style={{ width: 200 ,background:""}}
        options={[
          {
            options: [
              { label: "Created", value: "created" },
              { label: "Price", value: "price" },
              { label: "Collateral", value: "collateral" },
            ],
          },
          {
            label: "Engineer",
            options: [{ label: "yiminghe", value: "Yiminghe" }],
          },
        ]}
      />
    </div>
  );
};

export default Pricefilter;
