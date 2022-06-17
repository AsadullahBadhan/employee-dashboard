import React from 'react';
import './Summary.css'

const Summary = (props) => {
  const totalEmployee = props.employees;
  const paidEmployee = props.employee;
  const totalPaid = paidEmployee.length;
  let balance = totalEmployee.reduce((total, employee) => employee.salary + total, 0);
  const totalAmount = paidEmployee.reduce((total, employee) => employee.salary + total, 0);
  balance = balance - totalAmount;
  console.log(totalEmployee)

  return (
    <div className='summary'>
      <div className='summary-card'>
        <h5>Salary Paid</h5>
        <h4>{totalPaid}/{totalEmployee.length}</h4>
      </div>
      <div className='summary-card'>
        <h5>Total Amount Paid</h5>
        <h4>${totalAmount.toLocaleString('en-US')}</h4>
      </div>
      <div className='summary-card'>
        <h5>Balance</h5>
        <h4>${balance.toLocaleString('en-US')}</h4>
      </div>
    </div>
  );
};

export default Summary;