import React from 'react';
import './homepage.style.scss';
export default function Homepagecomponent() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='contents'>
            <h1 className='title'>HATS</h1>
            <span className='subtitle'>SHOWP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='contents'>
            <h1 className='title'>Jackets</h1>
            <span className='subtitle'>Hats</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='contents'>
            <h1 className='title'>Shoes</h1>
            <span className='subtitle'>SHOWP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='contents'>
            <h1 className='title'>WOMENS</h1>
            <span className='subtitle'>SHOWP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='contents'>
            <h1 className='title'>MEN'S</h1>
            <span className='subtitle'>SHOWP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
