import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectCollections } from '../../redux/shop/shop.selectors';

import './shop-overview.styles.scss';

const ShopOverview = ({ collections }) => (
  <div>
    {collections.map(({ id, ...collections }) => (
      <CollectionPreview key={id} collections={collections} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopOverview);
