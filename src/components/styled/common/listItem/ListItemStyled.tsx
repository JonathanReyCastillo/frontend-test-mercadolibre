import styled from 'styled-components';
import { PrimaryGray } from '../../GlobalStyles';

export const ListItemPictureStyled = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 4px;
  margin: 16px;
`;

export const ListItemInfoPriceStyled = styled.div`
  font-size: 24px;
  margin-bottom: 32px;
  margin-top: 16px;
`;

export const ListItemInfoTitleStyled = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

export const ListItemHRStyled = styled.hr`
  margin-left: 16px;
  margin-right: 16px;
  color: ${PrimaryGray};
`;
