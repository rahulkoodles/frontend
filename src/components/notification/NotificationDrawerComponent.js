// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const NotificationDrawerComponent = createGlobalStyle`
  .ant-drawer .ant-drawer-content {
    position: relative;
    background-color: #10141F; /* Set background color to black */
    background-clip: padding-box;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    pointer-events: auto;
  }
  .anticon svg {
    display: inline-block;
    color: white}

    .ant-drawer .ant-drawer-title{
        color:white;
    }
    .ant-drawer .ant-drawer-header{
        border-bottom: 1px solid white;
    }
    .ant-drawer .ant-drawer-body {
        padding:3px;
    }
`;

export default NotificationDrawerComponent;
