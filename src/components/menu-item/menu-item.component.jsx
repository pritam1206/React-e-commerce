import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';
/**
 *
 * @param {*} props
 * @returns jsx
 */
const MenuItemComponent = (props) => {
  let navigate = useNavigate();
  const { title, subtitle, imageUrl, size, linkUrl } = props;
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItemComponent;
