import React, { useEffect, useState } from 'react';
import './Employees.css';
import employeeData from '../../data/employeeData.json'

const Employees = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    setEmployee(employeeData)
  }, [])

  console.log(employee)
  return (
    <div className='employee'>

    </div>
  );
};

export default Employees;