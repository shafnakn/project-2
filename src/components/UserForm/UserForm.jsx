import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    avatar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    // Default avatar if none provided
    const userRole = formData.role || 'Member';
    const newUser = {
      ...formData,
      id: Date.now(),
      role: userRole,
      avatar: formData.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`
    };
    
    onAddUser(newUser);
    setFormData({ name: '', email: '', role: '', avatar: '' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <h2>Create Connection</h2>
        <p className="subtitle">Add a new person to your contact list</p>
        
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            required
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            required
          />
        </div>

        <div className="input-group">
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Developer, Designer"
          />
        </div>

        <div className="input-group">
          <label>Avatar URL (Optional)</label>
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Paste image link here"
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default UserForm;
