import React from 'react';
import './Employees.css';

const Employees = (props) => {
  const { name, image, position, salary, email, phone } = props.employee;
  console.log(props.employee)

  return (
    <div className='employee'>
      <div className="profile">
        <img src={image} alt={name} />
        <h3>{name}s</h3>
      </div>
      <div className="more-info">
        <p>{email}</p>
        <p>{phone}</p>
        <p>{position}</p>
      </div>
      <h4 className='salary'>{salary}</h4>
      <button className='pay-btn'>Pay</button>
    </div>
  );
};

export default Employees;