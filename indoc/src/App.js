// import logo from './logo.svg';
import brand from './brand.svg'
import './App.css';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App-heading">
      <div className="navbar-heading">
      <img src={brand} alt="logo" className="brand-img" />
      <div className="navbar-heading-name">
        <h1 className="navbar-heading-text">Healthy Me</h1>
      </div>
      <Nav/>
      </div>
    </div>
  );
}

export default App;
