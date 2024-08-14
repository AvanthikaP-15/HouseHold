import React, { useState } from 'react';
import '../Assets/css/EditProfile.css';
import defaultProfilePic from '../Assets/Images/women1.jpg';

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Add functionality to save changes (e.g., send data to a server)
    setMessage('Profile updated successfully!');
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <div className="profile-pic-section">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <input
            type="file"
            id="profile-pic-upload"
            className="upload-btn"
            onChange={handleFileChange}
            accept="image/*"
          />
          <label htmlFor="profile-pic-upload" className="upload-btn">
            Change Picture
          </label>
        </div>
      </div>
      <div className="form-section">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          name="bio"
          placeholder="Tell us about yourself"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        <button className="save-btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
      {message && <p className="confirmation-message">{message}</p>}
    </div>
  );
};

export default EditProfile;
