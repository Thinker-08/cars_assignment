import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home'


function App() {
  return (
    <div className="App" style={{backgroundColor:"#EDF0F6"}}>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
