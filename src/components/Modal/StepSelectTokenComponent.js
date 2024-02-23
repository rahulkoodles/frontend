// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const SelectTokenStyleComponent = createGlobalStyle`
  .ant-modal .ant-modal-content {
    position: relative;
    background-color: #10141F; /* Set background color to black */
    background-clip: padding-box;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    pointer-events: auto;
    padding: 20px 24px;
  }
  .anticon svg {
    display: inline-block;
    color: white}

.ant-radio-button-wrapper{
  background-color: #10141F; 
}
    `
;

export default SelectTokenStyleComponent;