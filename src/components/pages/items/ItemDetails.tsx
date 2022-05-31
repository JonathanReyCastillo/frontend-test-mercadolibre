import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import * as itemsActions from '../../../actions/items/itemsActions';
import { currencyFormat } from '../../../actions/items/itemsActions';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import {
  ItemDetailsButtonShopStyled,
  ItemDetailsInfoConditionStyled,
  ItemDetailsInfoDescriptionStyled,
  ItemDetailsInfoDescriptionTitleStyled,
  ItemDetailsInfoPriceStyled,
  ItemDetailsInfoTitleStyled,
  ItemDetailsPictureStyled,
  ItemDetailsWrapper,
} from '../../styled/pages/ItemDetailsStyled';

const ItemDetails = (props: any) => {
  const location = useLocation();

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const [item, setItem] = useState(null);

  const initData = useCallback(async () => {
    const id = location.pathname.split('/')[2];
    const data = await itemsActions.itemDetails(id);
    setItem(data);
    setBreadcrumbs(data.categories);
  }, []);

  useLayoutEffect(() => {
    initData();
  }, [initData, location]);

  return (
    <div className="container">
      {item != null ? (
        <>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <ItemDetailsWrapper>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                  <div className="text-center">
                    <ItemDetailsPictureStyled src={item.picture} alt="Product" />
                  </div>
                  <ItemDetailsInfoDescriptionTitleStyled>Descripcion del Producto</ItemDetailsInfoDescriptionTitleStyled>
                  <ItemDetailsInfoDescriptionStyled>{item.description}</ItemDetailsInfoDescriptionStyled>
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4 d-none d-sm-block">
                  <ItemDetailsInfoConditionStyled>
                    {item.condition === 'new' ? 'Nuevo' : 'Usado'}
                    {item.sold_quantity !== 0 ? ` - ${item.sold_quantity} vendidos` : ''}
                  </ItemDetailsInfoConditionStyled>
                  <ItemDetailsInfoTitleStyled>{item.title}</ItemDetailsInfoTitleStyled>
                  <ItemDetailsInfoPriceStyled> {currencyFormat(item.price.amount, item.price.decimals)}</ItemDetailsInfoPriceStyled>
                  <ItemDetailsButtonShopStyled type="button" className="btn btn-primary btn-block">
                    Comprar
                  </ItemDetailsButtonShopStyled>
                </div>
              </div>
            </div>
          </ItemDetailsWrapper>
        </>
      ) : (
        <div className="text-center pt-5">
          <BeatLoader size={25} />
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
