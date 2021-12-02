import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.styles.scss';
import { ReactComponent as LOGO } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
export default function headerComponent({ currentUser }) {
  return (
    <div className='header'>
      <Link to='/'>
        <LOGO className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/'>
          SHOP
        </Link>
        <Link className='option' to='/'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
