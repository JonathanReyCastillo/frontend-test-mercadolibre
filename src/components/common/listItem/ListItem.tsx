import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { currencyFormat } from '../../../actions/items/itemsActions';
import {
  ListItemHRStyled,
  ListItemInfoPriceStyled,
  ListItemInfoTitleStyled,
  ListItemPictureStyled,
} from '../../styled/common/listItem/ListItemStyled';
import ImgShipping from './../../../assets/ic_shipping.png';

const ListItem = (props: any) => {
  let navigate = useNavigate();

  const onClickItem = () => {
    navigate(`/items/${props.item.id}`);
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-12 col-sm-2 col-md-2 col-lg-2">
          <Link to={`/items/${props.item.id}`}>
            <ListItemPictureStyled src={props.item.picture} alt="Item" />
          </Link>
        </div>
        <div className="col-12 col-sm-7 col-md-7 col-lg-7">
          <div className="d-flex">
            <div>
              <ListItemInfoPriceStyled>
                {currencyFormat(props.item.price.amount, props.item.price.decimals)}{' '}
                {props.item.free_shipping ? <img src={ImgShipping} alt="shipping" /> : ''}
              </ListItemInfoPriceStyled>
              <ListItemInfoTitleStyled onClick={onClickItem}>{props.item.title}</ListItemInfoTitleStyled>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 col-md-3 col-lg-3"></div>
      </div>
      {props?.lastItemId !== props.item.id ? <ListItemHRStyled /> : ''}
    </div>
  );
};

export default ListItem;
