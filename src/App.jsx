import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers(prevUsers => [newUser, ...prevUsers]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <div className="logo-icon"></div>
          <h1>Connect<span>Hub</span></h1>
        </div>
        <nav>
          <button className="nav-link active">Directory</button>
          <button className="nav-link">Analytics</button>
          <button className="nav-link">Settings</button>
        </nav>
      </header>

      <main className="main-content">
        <div className="layout-grid">
          <UserForm onAddUser={handleAddUser} />
          <UserList users={users} onDeleteUser={handleDeleteUser} />
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 ConnectHub. Premium Contact Management.</p>
      </footer>
    </div>
  );
}

export default App;
