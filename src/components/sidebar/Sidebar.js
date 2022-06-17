import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <nav>
        <div className="manager">
          <img src='https://i.postimg.cc/6QzHMqds/male4.jpg' alt="manager" />
          <h3 className="name">Asadullah Badhan</h3>
          <p className='position'><small>Manager</small></p>
        </div>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/employees">Employees</a></li>
          <li><a href="/earnings">Earrnings</a></li>
          <li><a href="/salaries">Salaries</a></li>
          <li><a href="/allowances">Allowances</a></li>
          <li><a href="/payments">Payments</a></li>
        </ul>

        <a className='log-out' href="/log-out">LOG OUT</a>
      </nav>
    </div>
  );
};

export default Sidebar;