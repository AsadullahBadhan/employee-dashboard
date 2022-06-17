import { useEffect, useState } from 'react';
import './App.css';
import Employees from './components/Employees/Employees';
import Sidebar from './components/sidebar/Sidebar';
import logo from './images/logo.png';
import employeeData from './data/employeeData.json'
import Summary from './components/Summary/Summary';

function App() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    setEmployees(employeeData)
  }, []);

  const handlePayment = currentEmployee => {
    const newEmployee = [...employee, currentEmployee];
    setEmployee(newEmployee);
  }

  return (
    <div className='app'>
      <header>
        <h1>Salary management</h1>
        <img src={logo} alt="" />
      </header>
      <Sidebar></Sidebar>
      <div className="employee-container">
        <Summary employee={employee} employees={employees}></Summary>
        {
          employees.map(employees => <Employees employees={employees} handlePayment={handlePayment}></Employees>)
        }
      </div>
    </div>
  );
}

export default App;