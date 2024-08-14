import React from 'react';
import '../Assets/css/Settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="setting-option">
        <h3>Account Settings</h3>
        <button className="action-btn">Change Password</button>
        <button className="action-btn">Privacy Settings</button>
      </div>
      <div className="setting-option">
        <h3>Notification Settings</h3>
        <button className="action-btn">Email Notifications</button>
        <button className="action-btn">SMS Notifications</button>
      </div>
    </div>
  );
};

export default Settings;
