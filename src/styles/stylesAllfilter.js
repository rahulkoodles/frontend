import styled from "styled-components";

export const StyledAllfilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  .filter-btn {
    border-radius: 6px;
    .ant-radio-group {
      .ant-radio-button {
        &:hover {
          color: greenyellow;
        }
      }
    }

    .ant-radio-button-wrapper {
      background: #121212;
      border: 1px solid #d9d9d933;
      color: #ffffff66;
    }
    /* .ant-radio-button-wrapper:nth-child(1) {
      &:hover {
        color: #5dec96;
      }
    }
    .ant-radio-button-wrapper:nth-child(2) {
      &:hover {
        color: red;
      }
    }
    .ant-radio-button-wrapper:nth-child(4) {
      &:hover {
        color: orange;
      }
    } */
    .ant-radio-button-wrapper-checked:not(
        .ant-radio-button-wrapper-disabled
      ):nth-child(1) {
      color: #5dec96;
      background: #000000;
      border-radius: 4px;
      background-color: #000000;
    }
    .ant-radio-button-wrapper-checked:not(
        .ant-radio-button-wrapper-disabled
      ):nth-child(2) {
      color: red;
      background: #000000;
      /* border-color: #5dec96; */
      border-radius: 4px;
    }

    .ant-radio-button-wrapper-checked:not(
        .ant-radio-button-wrapper-disabled
      ):nth-child(3) {
      color: #5fa3f6;
      background: #000000;
      /* border-color: #5dec96; */
      border-radius: 4px;
    }

    .ant-radio-button-wrapper-checked:not(
        .ant-radio-button-wrapper-disabled
      ):nth-child(4) {
      color: #f6743e;
      background: #000000;
      /* border-color: #5dec96; */
      border-radius: 4px;
    }
  }
  .search-filter {
    border: 1px solid #d9d9d933;
    border-radius: 4px;
    .ant-input-outlined {
      background: #121212;
      border-color: gray;
      border: none;
    }
    .ant-input-group-addon {
      color: gray;
      border: none;
    }

    Input {
      color: white;
      &::placeholder {
        color: #ffffff40;
      }
    }
  }
  .drawer-class {
    .ant-btn {
      border: 1px solid #d9d9d933;
      background-color: #121212;
      &:hover {
        background: #121212;
      }
      outline: none;
    }
    .ant-drawer-content {
      background: #0e1420;
    }
  }

  .price-filter {
    .ant-select-selector {
      background: #121212;
      border: 1px solid #d9d9d933;
    }

    .ant-select-item-option-selected {
      background-color: gray !important;
    }
  }
`;
