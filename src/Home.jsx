// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; 

// export default function Home() {
//   const navigate = useNavigate();

//   const handleClick = (category) => {
//     navigate(`/form/${category}`);  // Corrected: Template literal with backticks
//   };

//   const handlePreview = () => {
//     navigate('/preview'); // Navigate to the preview page
//   };

//   const categories = [
//     {
//       category: 'A',
//       title: 'Category A',
//       description: 'Owned/Vested properties, Layout information',
//       icon: '🏠',
//     },
//     {
//       category: 'B',
//       title: 'Category B',
//       description: 'Gifted/Donated properties with ownership details',
//       icon: '🎁',
//     },
//     {
//       category: 'C',
//       title: 'Category C',
//       description: 'Vested under APPR Act 1994',
//       icon: '📜',
//     },
//   ];

//   return (
//     <div className="home-container">
//       <div className="header">
//         <h1 className="main-heading">Properties Identified in the Gram Panchayat</h1>
//         <p className="description">
//           As per G.O.Ms.No.188, Dt: 21.07.2011, please select the category to enter property details
//         </p>
//       </div>

//       {/* "Preview Data" Button in the top-right corner */}
//       <button onClick={handlePreview} className="preview-button">
//         Preview Data
//       </button>

//       <div className="categories-grid">
//         {categories.map(({ category, title, description, icon }) => (
//           <div
//             key={category}
//             onClick={() => handleClick(category)}
//             className={`category-card category-${category}`}  // Corrected: Template literal for className
//           >
//             <div className="icon">{icon}</div>
//             <h2 className="category-title">{title}</h2>
//             <p className="category-description">{description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (category) => {
    navigate(`/form/${category}`);
  };

  const handlePreview = () => {
    setShowLogin(true);
    setErrorMessage('');
  };

  const handleLogin = () => {
    if (username === 'grampanchayat' && password === 'admin@123') {
      navigate('/preview');
    } else {
      setErrorMessage('Only admin can view the data. Wrong username or password.');
    }
  };

  const categories = [
    {
      category: 'A',
      title: 'Category A',
      description: 'Owned properties of the Gram Panchayat,Vested lands under its control Layout and survey-related information  ',
      icon: '🏠',
    },
    {
      category: 'B',
      title: 'Category B',
      description: 'Properties gifted or donated to the Gram Panchayat  Includes details of donors and ownership documents  Used for public purposes or community benefit  ',
      icon: '🎁',
    },
    {
      category: 'C',
      title: 'Category C',
      description: 'Vested under the APPR Act, 1994  Recognized as Gram Panchayat assets  Used for public benefit and governance  ',
      icon: '📜',
    },
  ];

  return (
    <div className="home-container">

      <div className="header">

      <div className="gp-logo-container">
    <img
      src="https://1.bp.blogspot.com/-irQqX3tc1p4/XTJhCNHyMuI/AAAAAAAACAw/LMXFVFRV9T0KAlBqG3575Yzrw1eGAnvTACLcBGAs/w1200-h630-p-k-no-nu/IMG_20190720_055335.jpg"
      alt="Gram Panchayat Logo"
      className="gp-logo"
    />
    </div>
        <h1 className="main-heading">Properties Identified in the Gram Panchayat</h1>
        <p className="description">
          As per G.O.Ms.No.188, Dt: 21.07.2011, please select the category to enter property details
        </p>
        <button onClick={handlePreview} className="preview-button">
          Preview Data
        </button>
      </div>

      {/* Login Section */}
      {showLogin && (
        <div className="login-box">
          <h2>welcome admin</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}
            <div className="info-extension">
  <div className="info-image">
    <img
      src="https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/08/panchaat.jpg"
      alt="Gram Panchayat Illustration"
    />
  </div>
</div>

      <div className="categories-grid">
        {categories.map(({ category, title, description, icon }) => (
          <div
            key={category}
            onClick={() => handleClick(category)}
            className={`category-card category-${category}`}
          >
            <div className="icon">{icon}</div>
            <h2 className="category-title">{title}</h2>
            <p className="category-description">{description}</p>
          </div>
        ))}
      </div>
      

<footer className="footer">
  <p>&copy; {new Date().getFullYear()} Gram Panchayat Property Portal. All rights reserved.</p>
</footer>



    </div>
    
  );
}


