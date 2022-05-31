import styled from 'styled-components';
import { PrimaryBlue, SecondaryBackgroundColor } from '../GlobalStyles';

export const ItemDetailsPictureStyled = styled.img`
  width: 680px;
  height: 680px;
`;

export const ItemDetailsWrapper = styled.div`
  background-color: ${SecondaryBackgroundColor};
  margin-bottom: 16px;
`;

export const ItemDetailsInfoConditionStyled = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const ItemDetailsInfoTitleStyled = styled.div`
  font-size: 24px;
  margin-bottom: 32px;
`;

export const ItemDetailsInfoPriceStyled = styled.div`
  font-size: 46px;
  margin-bottom: 32px;
`;

export const ItemDetailsButtonShopStyled = styled.button`
  width: calc(100% - 32px);
  background-color: ${PrimaryBlue};
  border-color: ${PrimaryBlue};
`;

export const ItemDetailsInfoDescriptionTitleStyled = styled.div`
  font-size: 28px;
  margin-bottom: 32px;
  margin-left: 32px;
`;

export const ItemDetailsInfoDescriptionStyled = styled.div`
  font-size: 16px;
  margin-bottom: 32px;
  margin-left: 32px;
`;
