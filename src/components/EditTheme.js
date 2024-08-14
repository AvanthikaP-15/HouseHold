import React, { useState } from 'react';
import '../Assets/css/EditTheme.css';

const initialThemes = [
  {
    id: 1,
    title: 'Cleaning Services',
    subtitle: 'Spotless and Shiny',
    description: 'Professional cleaning services to keep your home immaculate.',
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Plumbing Services',
    subtitle: 'Reliable and Efficient',
    description: 'Expert plumbing services for all your household needs.',
    image: 'https://media.istockphoto.com/id/659517058/photo/installing-a-shower-faucet.jpg?s=2048x2048&w=is&k=20&c=TJ_dZ0RAPsF89U4Z6PtLM5jQN6sZq-2RDq4mN1HzPT8=',
  },
  {
    id: 3,
    title: 'Electrical Services',
    subtitle: 'Safe and Secure',
    description: 'Qualified electricians for safe and reliable electrical work.',
    image: 'https://media.istockphoto.com/id/1061085528/photo/power-saving-concept-asia-man-changing-compact-fluorescent-bulbs-with-new-led-light-bulb.jpg?s=2048x2048&w=is&k=20&c=M_UIU6VmX20xpT2m37_3RYp709cKHe6O9LmJuCtrW5U=',
  },
];

const EditTheme = () => {
  const [themes, setThemes] = useState(initialThemes);

  const handleEdit = (id) => {
    // Implement your edit logic here
    alert(`Edit theme with id ${id}`);
  };

  const handleDelete = (id) => {
    // Implement your delete logic here
    const updatedThemes = themes.filter(theme => theme.id !== id);
    setThemes(updatedThemes);
    alert(`Deleted theme with id ${id}`);
  };

  return (
    <div className="edit-theme">
      <h1>Edit Household Service Themes</h1>
      <div className="themes-container">
        {themes.map(theme => (
          <div key={theme.id} className="theme-card">
            <img src={theme.image} alt={theme.title} className="theme-image" />
            <h2>{theme.title}</h2>
            <p>{theme.subtitle}</p>
            <p>{theme.description}</p>
            <button onClick={() => handleEdit(theme.id)}>Edit</button>
            <button onClick={() => handleDelete(theme.id)} className="delete">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditTheme;
