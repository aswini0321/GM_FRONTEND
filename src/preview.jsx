import React, { useState } from 'react';
import './preview.css';
import { useNavigate } from 'react-router-dom';

const Preview = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleDownload = (category) => {
    const url = `https://gm-backend-4.onrender.com/export/${category}`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `category_${category.toUpperCase()}_data.xlsx`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    setSuccessMessage(`✅ Category ${category.toUpperCase()} data downloaded successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="preview-container">
      {/* Success Message at Top */}
      {successMessage && (
        <div className="download-message-top">
          {successMessage}
        </div>
      )}

      {/* Back Button */}
      <div className="top-left">
        <button className="back-home-btn" onClick={handleBack}>
          ⬅
        </button>
      </div>

      {/* Heading */}
      <h1 className="preview-heading">Download Data Category Wise!</h1>
      <p className="preview-description">
        Welcome Admin....! Choose a category. Just a click away to download data!
      </p>

      {/* Cards */}
      <div className="preview-cards">
        <div className="preview-card" onClick={() => handleDownload('a')}>
          <div className="card-content">
            <div className="icon">🏠</div>
            <h2>Category A</h2>
            <p>Owned/Vested properties, Layout information</p>
          </div>
        </div>

        <div className="preview-card" onClick={() => handleDownload('b')}>
          <div className="card-content">
            <div className="icon">🎁</div>
            <h2>Category B</h2>
            <p>Gifted/Donated properties with ownership details</p>
          </div>
        </div>

        <div className="preview-card" onClick={() => handleDownload('c')}>
          <div className="card-content">
            <div className="icon">📜</div>
            <h2>Category C</h2>
            <p>Vested under APPR Act 1994</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;



























// import React from 'react';
// import './preview.css';
// import { useNavigate } from 'react-router-dom';

// const Preview = () => {
//   const handleDownload = (category) => {
//     const url = `http://localhost:4000/export/${category}`;
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', `category_${category.toUpperCase()}_data.xlsx`);
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//   };

//   const navigate = useNavigate();
//   const handleBack = () => {
//     navigate("/"); 
//   };

//   return (
//     <div className="preview-container">
//       {/* Back Button */}
//       <div className="top-left">
//         <button className="back-home-btn" onClick={handleBack}>
//           ⬅
//         </button>
//       </div>

//       {/* Heading */}
//       <h1 className="preview-heading">Download Data Category Wise!</h1>
//       <p className="preview-description">
//         Welcome Admin....!Choose a category.Just a click away to download data!
//       </p>

//       {/* Cards */}
//       <div className="preview-cards">
//         <div className="preview-card" onClick={() => handleDownload('a')}>
//           <div className="card-content">
//             <div className="icon">🏠</div>
//             <h2>Category A</h2>
//             <p>Owned/Vested properties, Layout information</p>
//           </div>
//         </div>
        
//         <div className="preview-card" onClick={() => handleDownload('b')}>
//           <div className="card-content">
//             <div className="icon">🎁</div>
//             <h2>Category B</h2>
//             <p>Gifted/Donated properties with ownership details</p>
//           </div>
//         </div>
        
//         <div className="preview-card" onClick={() => handleDownload('c')}>
//           <div className="card-content">
//             <div className="icon">📜</div>
//             <h2>Category C</h2>
//             <p>Vested under APPR Act 1994</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preview;














