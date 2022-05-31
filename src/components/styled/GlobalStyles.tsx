import { createGlobalStyle } from 'styled-components';

export const PrimaryColor = '#FFE600';
export const PrimaryGray = '#999999';
export const SecondaryGray = '#333333';
export const PrimaryBackgroundColor = '#EEEEEE';
export const SecondaryBackgroundColor = '#FFFFFF';
export const PrimaryBlue = '#3483FA';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${PrimaryBackgroundColor};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  textarea:focus,
  textarea.form-control:focus,
  input.form-control:focus,
  input[type=text]:focus,
  [contenteditable].form-control:focus {
    border-color: rgba(0, 0, 0, 0);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 0, 0, 0);
    outline: 0 none;
  }

  .form-control {
    border: 1px solid #0000;
  }
`;
