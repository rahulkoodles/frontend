import { Select } from "antd";
import React from "react";

const Pricefilter = () => {
  return (
    <div className="price-filter">
      <Select className=" bg-transparent"
        defaultValue="lucy"
        style={{ width: 200 }}
        options={[
          {
            label: "Manager",
            options: [
              { label: "Jack", value: "jack" },
              { label: "Lucy", value: "lucy" },
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
