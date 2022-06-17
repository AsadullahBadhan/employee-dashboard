import React from 'react';
import './Employees.css';

const Employees = (props) => {
  const { name, image, position, salary, email } = props.employee;
  console.log(props.employee)

  return (
    <div className='employee'>
      <div className="profile">
        <img src={image} alt={name} />
        <h3>{name}s</h3>
      </div>
      <h4 className='position'>{position}</h4>
      <button className='payBtn'>Pay</button>
    </div>
  );
};

export default Employees;