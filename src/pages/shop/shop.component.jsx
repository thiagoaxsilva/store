import React from 'react';
import { Route } from 'react-router-dom';

import ShopOverview from '../../components/shop-overview/shop-overview.component';
import CollectionPage from '../collection/collection.component';



import './shop.styles.scss';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={ShopOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default Shop;
