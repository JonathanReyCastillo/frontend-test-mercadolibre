import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { ListWrapper } from '../../styled/common/list/ListStyled';
import ListItem from '../listItem/ListItem';

const List = (props: any) => {
  return (
    <div className="container">
      {props?.items?.length < 1 ? (
        <div className="text-center pt-5">
          <BeatLoader size={25} />
        </div>
      ) : (
        <ListWrapper>
          {props?.items.map((item: any) => {
            return <ListItem key={item.id} item={item} lastItemId={props.lastItemId}></ListItem>;
          })}
        </ListWrapper>
      )}
    </div>
  );
};

export default List;
