import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepagecomponent from './pages/homepage/Homepage.component';
import ShopPageComponent from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import SingInSignUpComponent from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth } from './firebase/firebase.utils';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscriberFromAuth = null;
  componentDidMount() {
    this.unsubscriberFromAuth = auth.onAuthStateChanged((user) => {
      console.log(user);
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscriberFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<Homepagecomponent />} />
          <Route path='/shop' element={<ShopPageComponent />} />
          <Route path='/signin' element={<SingInSignUpComponent />} />
        </Routes>
      </div>
    );
  }
}

export default App;
