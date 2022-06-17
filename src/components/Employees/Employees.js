import React from 'react';
import './Employees.css';

const Employees = (props) => {
  const { name } = props.employee;
  console.log(name)

  return (
    <div className='employee'>
      <h3>{name}</h3>
    </div>
  );
};

export default Employees;