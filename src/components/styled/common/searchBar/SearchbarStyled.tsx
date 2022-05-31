import styled from "styled-components";
import { PrimaryColor } from "../../GlobalStyles";

export const SearchBarStyled = styled.div`
  nav {
    background: ${PrimaryColor};
    .container{
        padding-left: 0px;
        padding-right: 0px;
    }
    a {
      cursor: pointer;
    }
  }
`

export const ButtonSearch = styled.button`
  border: none;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 1px
`
