import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/css/CreateTheme.css';

const CreateTheme = () => {
  const [themes, setThemes] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newTheme, setNewTheme] = useState({
    name: '', rating: '', specialty: '', imageUrl: '', contact: '', address: ''
  });
  const [editingTheme, setEditingTheme] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '', rating: '', specialty: '', imageUrl: '', contact: '', address: ''
  });

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/organizers');
        setThemes(response.data);
      } catch (error) {
        console.error('Error fetching themes', error);
      }
    };

    fetchThemes();
  }, []);

  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result.split(',')[1]); // Get Base64 string without data URL prefix
    };
    reader.readAsDataURL(file);
  };

  const addTheme = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/organizers/org', {
        ...newTheme,
        rating: parseFloat(newTheme.rating)
      });
      setThemes([...themes, response.data]);
      setNewTheme({
        name: '', rating: '', specialty: '', imageUrl: '', contact: '', address: ''
      });
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding theme', error);
    }
  };

  const updateTheme = async () => {
    try {
      await axios.put(`http://localhost:8080/api/organizers/${editingTheme.id}`, {
        ...editForm,
        rating: parseFloat(editForm.rating)
      });
      setThemes(themes.map(theme => (theme.id === editingTheme.id ? { ...theme, ...editForm } : theme)));
      setEditingTheme(null);
      setEditForm({
        name: '', rating: '', specialty: '', imageUrl: '', contact: '', address: ''
      });
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating theme', error);
    }
  };

  const deleteTheme = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/organizers/${id}`);
      setThemes(themes.filter(theme => theme.id !== id));
    } catch (error) {
      console.error('Error deleting theme', error);
    }
  };

  return (
    <div className="theme-management">
      <h1>Manage Themes</h1>
      <button onClick={() => setShowAddModal(true)} className="theme-action-button">Add Theme</button>

      {/* Table View */}
      <table className="theme-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Specialty</th>
            <th>Image</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(themes) && themes.map(theme => (
            <tr key={theme.id}>
              <td>{theme.id}</td>
              <td>{theme.name}</td>
              <td>{theme.rating}</td>
              <td>{theme.specialty}</td>
              <td>
                {theme.imageUrl && <img src={`data:image/jpeg;base64,${theme.imageUrl}`} alt={theme.name} className="theme-image" />}
              </td>
              <td>{theme.contact}</td>
              <td>{theme.address}</td>
              <td>
                <button onClick={() => {
                  setEditingTheme(theme);
                  setEditForm({
                    name: theme.name,
                    rating: theme.rating,
                    specialty: theme.specialty,
                    imageUrl: theme.imageUrl,
                    contact: theme.contact,
                    address: theme.address
                  });
                  setShowEditModal(true);
                }} className="theme-edit-button">Edit</button>
                <button onClick={() => deleteTheme(theme.id)} className="theme-delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Theme Modal */}
      {showAddModal && (
        <div className="theme-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="theme-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Add Theme</h2>
            <div className="theme-modal-grid">
              <input
                type="text"
                placeholder="Name"
                value={newTheme.name}
                onChange={(e) => setNewTheme({ ...newTheme, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Rating"
                value={newTheme.rating}
                onChange={(e) => setNewTheme({ ...newTheme, rating: e.target.value })}
              />
              <input
                type="text"
                placeholder="Specialty"
                value={newTheme.specialty}
                onChange={(e) => setNewTheme({ ...newTheme, specialty: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, (base64) => setNewTheme({ ...newTheme, imageUrl: base64 }))}
              />
              <input
                type="text"
                placeholder="Contact"
                value={newTheme.contact}
                onChange={(e) => setNewTheme({ ...newTheme, contact: e.target.value })}
              />
              <input
                type="text"
                placeholder="Address"
                value={newTheme.address}
                onChange={(e) => setNewTheme({ ...newTheme, address: e.target.value })}
              />
            </div>
            <button onClick={addTheme} className="theme-action-button">Add Theme</button>
            <button onClick={() => setShowAddModal(false)} className="theme-close-modal-button">Close</button>
          </div>
        </div>
      )}

      {/* Edit Theme Modal */}
      {showEditModal && editingTheme && (
        <div className="theme-modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="theme-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Edit Theme</h2>
            <div className="theme-modal-grid">
              <input
                type="text"
                placeholder="Name"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Rating"
                value={editForm.rating}
                onChange={(e) => setEditForm({ ...editForm, rating: e.target.value })}
              />
              <input
                type="text"
                placeholder="Specialty"
                value={editForm.specialty}
                onChange={(e) => setEditForm({ ...editForm, specialty: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, (base64) => setEditForm({ ...editForm, imageUrl: base64 }))}
              />
              <input
                type="text"
                placeholder="Contact"
                value={editForm.contact}
                onChange={(e) => setEditForm({ ...editForm, contact: e.target.value })}
              />
              <input
                type="text"
                placeholder="Address"
                value={editForm.address}
                onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
              />
            </div>
            <button onClick={updateTheme} className="theme-action-button">Update Theme</button>
            <button onClick={() => setShowEditModal(false)} className="theme-close-modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTheme;
