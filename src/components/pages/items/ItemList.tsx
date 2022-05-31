import React, { useCallback, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as itemsActions from '../../../actions/items/itemsActions';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import List from '../../common/list/List';

const ItemList = (props: any) => {
  const location = useLocation();

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const [items, setItems] = useState([]);

  const initData = useCallback(async (textSearch: string) => {
    const data = await itemsActions.itemsList(textSearch + '');
    setItems(data.items);
    setBreadcrumbs(data.categories);
  }, []);

  useLayoutEffect(() => {
    initData(location.search.split('=')[1]);
  }, [initData, location]);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <List breadcrumbs={breadcrumbs} items={items} lastItemId={items[items.length - 1]?.id} />
    </>
  );
};

const mapDispatchToProps = { ...itemsActions };

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
