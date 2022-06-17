import './App.css';
import Employees from './components/Employees/Employees';
import Sidebar from './components/sidebar/Sidebar';
import logo from './images/logo.png'

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Salary management</h1>
        <img src={logo} alt="" />
      </header>
      <Sidebar></Sidebar>
      <Employees></Employees>
    </div>
  );
}

export default App;