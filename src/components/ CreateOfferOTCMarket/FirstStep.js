import React, { useState, useContext } from "react";
import salonaImg from "../../imgs/salona.png";
import { Divider } from "antd";
import { FormDataContext } from "./FormDataContext";

import { Button, Checkbox, Form, Input, Radio, Space } from "antd";

const FirstStep = ({ StepsIncreament }) => {
  const { formState, updateFormState, resetFormState } =
    useContext(FormDataContext);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [value, setValue] = useState(null);

  function handleSubmit(values) {
    console.log("Selected Radio Value:", values);
    StepsIncreament();
    updateFormState(values);
  }

  return (
    <>
      <Form
        onFinish={handleSubmit}
        onFinishFailed={(errorInfo) => {
          console.log("Failed:", errorInfo);
        }}
      >
        <div className="bg-[#121212] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
          {/* //****** Stepper*** */}
          <div className="flex pt-6 "></div>

          {/* // *********** Steper Content ********** */}
          <div className="p-6">
            <div>
              <div id="head">
                <div className="flex flex-col  text-start">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-ct-base text-white font-medium">
                      Network
                    </h5>
                    <div className="flex items-center justify-between gap-2 px-3 py-2.5 border-2 border-ct-gray-700 rounded-lg">
                      <span className="flex items-center gap-2 flex-1">
                        <img
                          src={salonaImg}
                          alt=""
                          className="w-5 h-5 rounded"
                        />
                        <span className="flex-1 text-ct-base text-white">
                          Solana
                        </span>
                      </span>
                    </div>
                  </div>

                  <Form.Item
                    name="buyAndSaleRadio"
                    rules={[
                      {
                        required: true,
                        message: "Please Select !",
                      },
                    ]}
                  >
                    <Radio.Group
                      value={value}
                      className="flex flex-col  text-white mt-0"
                      name="radioGroup"
                    >
                      <div className=" cursor-pointer ">
                        <Radio value={0} className=" flex">
                          <span className="mt-4 ">
                            <h5 className="text-ct-base text-white font-medium uppercase mb-0">
                              Buying
                            </h5>
                            <span className="text-ct-sm text-white">
                              You want to buy tokens
                            </span>
                          </span>
                        </Radio>
                      </div>

                      <div className="flex  cursor-pointer">
                        <Radio value={1} className="mb-8">
                          <h5 className="text-ct-base text-white font-medium uppercase mb-0">
                            Selling
                          </h5>
                          <span className="text-ct-sm text-white">
                            You want to sell your tokens
                          </span>
                        </Radio>
                      </div>
                    </Radio.Group>
                  </Form.Item>

                  <div className="grid grid-cols-2 gap-2">
                    <Button className="capitalize rounded-lg p-7 border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94]">
                      {" "}
                      Back
                    </Button>
                    <Button
                      className="capitalize rounded-lg p-7   border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94]"
                      htmlType="submit"
                    >
                      {" "}
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default FirstStep;
