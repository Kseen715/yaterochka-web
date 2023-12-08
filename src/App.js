import logo from './logo.svg';
import './App.css';
import './Header.css';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <Header />



      <div class="content">
        <img
          width={800}
          src='https://assets.stickpng.com/images/58b061138a4b5bbbc8492951.png'
          alt='cat'
          class='cat'
        />
      </div>
    </div>
  );
}

export default App;

