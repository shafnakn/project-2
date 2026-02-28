import React from 'react';
import './UserCard.css';

const UserCard = ({ user, onDelete }) => {
    return (
        <div className="user-card">
            <div className="card-header">
                <img src={user.avatar} alt={user.name} className="user-avatar" />
                <button className="delete-btn" onClick={() => onDelete(user.id)} title="Remove contact">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div className="card-body">
                <h3>{user.name}</h3>
                <p className="user-role">{user.role}</p>
                <div className="user-info">
                    <div className="info-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>{user.email}</span>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="action-btn">View Profile</button>
            </div>
        </div>
    );
};

export default UserCard;
