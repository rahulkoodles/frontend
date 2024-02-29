import { useState } from 'react';
import { ConfigProvider, Steps } from 'antd';
import { CreateOfferOTCMarketDiv } from '../../styles/ CreateOfferOTCMarket';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import CreateOfferStepperStyledComponent from '../../styles/CreateOfferStepperStyledComponent';

import WalletConnect from './WalletConnect';
import useSigner from '../../hooks/useSigner';

const stepsInfo = [
  {
    description: 'Network & Type',
  },
  {
    description: 'Detail Settings',
  },
  {
    description: 'Review & Create',
  },
];

const CreateOfferOTCMarket = () => {
  const [formState, setFormState] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const { isConnected } = useSigner();

  const handleFirstStepSubmit = (values) => {
    setFormState({ ...formState, ...values });
    setActiveStep(1);
  };

  const handleSecondStepSubmit = (values) => {
    setFormState({ ...formState, ...values });
    setActiveStep(2);
  };

  const handleThirdStepSubmit = (values) => {
    setFormState({ ...formState, ...values });
  };

  const renderStepComponent = () => {
    switch (activeStep) {
      case 0:
        return <FirstStep onSubmit={handleFirstStepSubmit} />;
      case 1:
        return (
          <SecondStep formState={formState} onSubmit={handleSecondStepSubmit} />
        );
      case 2:
        return (
          <ThirdStep formState={formState} onSubmit={handleThirdStepSubmit} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full  flex justify-center items-center rounded-md">
      {isConnected ? (
        <ConfigProvider
          theme={{
            components: {
              Steps: {
                colorPrimary: '#5dec96',
                colorText: '#FFFFFF66',
                colorBorderBg: '#5dec96',
                colorTextDescription: '#FFFFFF80',
                iconSize: 40,
                titleLineHeight: 60,
                defaultHoverColor: '#5dec96',
              },
            },
          }}
        >
          <CreateOfferOTCMarketDiv>
            <div className="w-[500px]">
              <div className="bg-[#121212] rounded-xl ">
                <div className="steps-div w-full flex p-4 ">
                  <Steps
                    labelPlacement="vertical"
                    className="text-[#FFFFFF80]"
                    current={activeStep}
                    items={stepsInfo}
                  />
                </div>
                <div>{renderStepComponent()}</div>
              </div>
            </div>
          </CreateOfferOTCMarketDiv>
        </ConfigProvider>
      ) : (
        <WalletConnect />
      )}
      <CreateOfferStepperStyledComponent />
    </div>
  );
};

export default CreateOfferOTCMarket;
