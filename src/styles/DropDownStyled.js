import { createGlobalStyle } from "styled-components";

export const DropDownStyled = createGlobalStyle`
   .ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
         background: transparent;
     }

    .ant-select:hover .ant-select-arrow:not(:last-child){
        opacity:1
     }

     .ant-select-selection-item{
        background: transparent;
     }
`;
