import styled from "styled-components";

export const CreateOfferOTCMarketDiv = styled.div`
  .steps-div {
    .ant-steps-item-icon {
      border-color: #ffffff80;
      width: 40px;
      height: 40px;
    }
    .anticon {
      color: black;
      align-items: center;
    }
    .ant-steps-item-tail{
        color: white;
    }

    :where(.css-dev-only-do-not-override-gky3am).ant-steps
      .ant-steps-item-finish
      .ant-steps-item-icon {
      background: #5dec96;
    }
    :where(.css-dev-only-do-not-override-gky3am).ant-steps
      .ant-steps-item-wait
      .ant-steps-item-icon
      > .ant-steps-icon {
      color: #ffffff80;
    }
    :where(.css-dev-only-do-not-override-gky3am).ant-steps
      .ant-steps-item-process
      .ant-steps-item-icon
      > .ant-steps-icon {
      color: black;
    }
  }
`;
