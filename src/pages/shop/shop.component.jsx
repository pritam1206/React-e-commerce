import React, { Component } from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection';
import { SHOP_DATA } from '../../data';
export default class shopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...othercollections }) => (
          <PreviewCollection key={id} {...othercollections} />
        ))}
      </div>
    );
  }
}
