import React from 'react';
import './styles.css';

const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id} className="user-item">
        <div><strong>ID:</strong> {user.id}</div>
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email:</strong> {user.email}</div>
        <div><strong>Gender:</strong> {user.gender}</div>
        <div><strong>Status:</strong> {user.status}</div>
      </li>
    ))}
  </ul>
);

export default UserList;
