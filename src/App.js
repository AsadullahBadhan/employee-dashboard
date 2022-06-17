import { useEffect, useState } from 'react';
import './App.css';
import Employees from './components/Employees/Employees';
import Sidebar from './components/sidebar/Sidebar';
import logo from './images/logo.png';
import employeeData from './data/employeeData.json'

function App() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    setEmployee(employeeData)
  }, [])

  return (
    <div className='app'>
      <header>
        <h1>Salary management</h1>
        <img src={logo} alt="" />
      </header>
      <Sidebar></Sidebar>
      <div className="employee-container">
        {
          employee.map(employee => <Employees employee={employee}></Employees>)
        }
      </div>
    </div>
  );
}

export default App;