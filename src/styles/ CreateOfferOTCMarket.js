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
    /* .ant-steps-item-tail{
        color: red;
    } */

    :where(.css-dev-only-do-not-override-gky3am).ant-steps
      .ant-steps-item-finish
      .ant-steps-item-icon {
      background: #5dec96;
    }
    :where(.css-dev-only-do-not-override-gky3am).ant-steps
      .ant-steps-item-wait
      .ant-steps-item-icon
      > .ant-steps-icon {
      color: yellowgreen;
    }
    :where(.css-dev-only-do-not-override-gky3am).ant-steps
      .ant-steps-item-process
      .ant-steps-item-icon
      > .ant-steps-icon {
      color: black;
    }
    .ant-steps .ant-steps-item-finish .ant-steps-item-icon {
      background: #5dec96;
    }
    .ant-steps .ant-steps-item-wait .ant-steps-item-icon {
      background: #3a3a3a;
    }
    .anticon svg {
      color: #3a3a3a;
    }
    .ant-steps .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
      color: #ffffff80;
    }

    .ant-steps
      .ant-steps-item-process
      > .ant-steps-item-container
      > .ant-steps-item-tail::after {
      background-color: #ffffff33;
    }
    .ant-steps
      .ant-steps-item-wait
      > .ant-steps-item-container
      > .ant-steps-item-tail::after {
      background-color: #ffffff33;
    }
    .ant-steps .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
      color: black;
    }
  }
`;
