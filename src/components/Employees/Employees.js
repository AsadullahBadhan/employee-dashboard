import React from 'react';
import './Employees.css';

const Employees = (props) => {
  const { name, image, position, salary, email, phone } = props.employees;

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
      <h4 className='salary'>${salary}</h4>
      <button className='pay-btn' onClick={(e) => {
        props.handlePayment(props.employees);
        e.currentTarget.disabled = true;
      }
      }>+ Pay</button>
    </div >
  );
};

export default Employees;