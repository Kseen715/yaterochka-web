import './App.css';
import './Header.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />



      <div class="content">
        <img
          width={800}
          src='/public/imgs/cat.png'
          // src='https://assets.stickpng.com/images/58b061138a4b5bbbc8492951.png'
          alt='cat'
          class='cat'
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;

