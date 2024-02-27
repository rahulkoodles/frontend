// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const CreateOfferStepperStyledComponent = createGlobalStyle`
.ant-radio-wrapper span.ant-radio+* {
    padding-inline-start: 13px;
    padding-inline-end: 8px;

    margin-top:1.5rem;
}
.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    border-color: #3165ad;
    background-color: #000000;
}


.ant-radio-wrapper .ant-radio-inner::after {
    background-color: #48cd6e;
}

:where(.css-dev-only-do-not-override-2dyxi7).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: black;
    border-color: black;
    background: #87EE94;
}

:where(.css-dev-only-do-not-override-1xg9z9n).ant-input-outlined:focus, :where(.css-dev-only-do-not-override-1xg9z9n).ant-input-outlined:focus-within {
    border-color: black; 
    box-shadow: none; 
    outline: 0;
     background-color: transparent; 
}

.ant-input-outlined:hover {
    border-color: black;
    background-color: transparent;
}
.ant-input:placeholder-shown {
    text-overflow: ellipsis;
    font-size: 22px;
}
    `;
export default CreateOfferStepperStyledComponent;
