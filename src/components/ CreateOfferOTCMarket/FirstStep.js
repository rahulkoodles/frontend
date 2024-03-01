import React, { useState, useContext } from "react";
import salonaImg from "../../imgs/salona.png";
import { Divider } from "antd";
import { FormDataContext } from "./FormDataContext";

import { Button, Checkbox, Form, Input, Radio, Space } from "antd";
import DropDown from "../DropDown/DropDown";

const FirstStep = ({ StepsIncreament }) => {
  const { formState, updateFormState, resetFormState } =
    useContext(FormDataContext);

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const [value, setValue] = useState(null);

  function handleSubmit(values) {
    StepsIncreament();
    updateFormState(values);
  }

  return (
    <>
      <Form onFinish={handleSubmit} onFinishFailed={(errorInfo) => {}}>
        <div className="bg-[#121212] rounded-lg w-full max-w-[552px]  shadow-xl transition-all">
          {/* //****** Stepper*** */}
          <Divider className="bg-gray-700 m-1" />

          {/* // *********** Steper Content ********** */}
          <div className="p-6">
            <div>
              <div id="head">
                <div className="flex flex-col  text-start">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-ct-base text-white font-medium">
                      Network
                    </h5>
                    <Form.Item>


                      <div className="flex items-center justify-between py-2.5 rounded-lg">
                        <DropDown />
                      </div>
                    </Form.Item>
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
                    <Button className="capitalize rounded-lg p-7 border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94] text-black">
                      {" "}
                      Back
                    </Button>
                    <Button
                      className="capitalize rounded-lg p-7   border border-black text-ct-gray-950 text-xl font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#87EE94] !hover:bg-[#87EE94] text-black"
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
