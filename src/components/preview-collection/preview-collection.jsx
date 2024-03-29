import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = (props) => {
  const { title, items } = props;
  console.log(props);
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase() || ''}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
