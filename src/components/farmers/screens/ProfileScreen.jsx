import React from 'react';
import { Edit, Key, Globe, HelpCircle, LogOut } from 'lucide-react';

const ProfileScreen = () => (
    <div className="screen">
        <header className="screen-header"><h1>My Profile</h1></header>
        <div className="profile-info">
            <div className="profile-avatar">[Photo]</div>
            <h2>Rajesh Kumar</h2>
            <p>ID: FARM-12345</p>
        </div>
        <div className="screen-body list-view">
            <button className="list-button">
                <Edit size={20} />
                <span>Edit Farm Details</span>
            </button>
            <button className="list-button">
                <Key size={20} />
                <span>Manage UPI ID / PIN</span>
            </button>
            <button className="list-button">
                <Globe size={20} />
                <span>Change Language</span>
            </button>
            <button className="list-button">
                <HelpCircle size={20} />
                <span>Help & Support</span>
            </button>
            <button className="list-button logout">
                <LogOut size={20} />
                <span>Logout</span>
            </button>
        </div>
    </div>
);

export default ProfileScreen;