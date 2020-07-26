import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss';

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collections }) => (
          <CollectionPreview key={id} collections={collections} />
        ))}
      </div>
    );
  }
}

export default Shop;
