import React from 'react';
import SearchBar from '../searchBar/Searchbar';

const Layout = (props: any) => {
  const { children } = props;

  return (
    <>
      <SearchBar></SearchBar>
      {children}
    </>
  );
};

export default Layout;
