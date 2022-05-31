import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/layout/Layout';
import NotFound from '../components/common/notFound/NotFound';
import Home from '../components/pages/home/Home';
import ItemDetails from '../components/pages/items/ItemDetails';
import ItemList from '../components/pages/items/ItemList';

const App = (props: any) => {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/items/:id" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = ({}: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
