import styled from 'styled-components';
import { PrimaryGray } from '../../GlobalStyles';

export const BreadcrumbStyled = styled.div`
  .breadcrumb {
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    color: ${PrimaryGray};
    .breadcrumb-item {
      font-size: 14px;
      padding-top: 16px;
      padding-bottom: 16px;
    }
    .breadcrumb-item + .breadcrumb-item::before {
      color: ${PrimaryGray};
      content: '>';
    }
    .breadcrumb-item:last-child {
      font-weight: bold;
    }
  }
`;
