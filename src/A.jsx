import React, { useState } from 'react';
import axios from 'axios';  // Import axios
import { useNavigate } from 'react-router-dom';  
import './A.css';

const AForm = () => {
  const [mandal, setMandal] = useState('');
  const [gramPanchayat, setGramPanchayat] = useState('');
  const [possession, setPossession] = useState('');
  const [ownedDetailsVisible, setOwnedDetailsVisible] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    surveyNo: '',
    extent: '',
    boundaries: '',
    ownershipDetails: '',
    layoutNo: '',
    encroachment: '',
    action: '',
    beforePhoto: '',
    afterPhoto: '',
    remarks: ''
  });

  const mandals = [
    'ADDATEEGALA-R', 'ANANTHAGIRI-R', 'ARAKU VALLEY-R', 'CHINTAPALLI-R', 'CHINTOOR-R',
    'DEVIPATNAM-R', 'DUMBRIGUDA-R', 'G.K VEEDHI-R', 'G.MADUGULA-R', 'GANGAVARAM AGENCY-R',
    'HUKUMPETA-R', 'KOYYURU-R', 'KUNAVARAM-R', 'MAREDUMILLI-R', 'MUNCHINGAPUTTU-R',
    'NELLIPAKA-R', 'PADERU-R', 'PEDABAYALU-R', 'RAJAVOMMANGI-R', 'RAMPACHODAVARAM-R',
    'VARARAMACHANDRAPURAM-R', 'Y.RAMAVARAM-R'
  ];

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");  // navigate back to home
  };

  const handlePossessionChange = (e) => {
    const value = e.target.value;
    setPossession(value);
    setOwnedDetailsVisible(value.toLowerCase() === 'owned');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      mandal,
      gramPanchayat,
      propertyDetails: {
        description: formData.description,
        surveyNo: formData.surveyNo,
        extent: formData.extent,
        boundaries: formData.boundaries
      },
      possessionDetails: {
        type: possession,
        ownershipDetails: formData.ownershipDetails,
        layoutNo: formData.layoutNo
      },
      encroachmentDetails: {
        identified: formData.encroachment,
        actionTaken: formData.action
      },
      photos: {
        beforePhoto: formData.beforePhoto,
        afterPhoto: formData.afterPhoto
      },
      remarks: formData.remarks
    };

    try {
      const response = await axios.post('https://gm-backend-4.onrender.com/category-a', payload);
      alert(response.data.message);
    } catch (err) {
      console.error(err);
      alert('Error submitting the form');
    }
  };

  return (
    <div className="form">
      <div className="top-left">
        <button className="back-home-btn" onClick={handleBack}>
          ⬅
        </button>
      </div>
      <h1>Properties Identified in the Gram Panchayat</h1>
      <h3>As per G.O.Ms.No.188, Dt: 21.07.2011-Category A</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="mandal">Name of the Mandal</label>
            <select
              id="mandal"
              name="mandal"
              value={mandal}
              onChange={(e) => setMandal(e.target.value)}
              required
            >
              <option value="">Select Mandal</option>
              {mandals.map((mandalName) => (
                <option key={mandalName} value={mandalName}>
                  {mandalName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="gram-panchayat">Name of the Gram Panchayat</label>
            <input
              type="text"
              id="gram-panchayat"
              name="gram-panchayat"
              value={gramPanchayat}
              onChange={(e) => setGramPanchayat(e.target.value)}
              required
            />
          </div>

          {/* Property Details */}
          <h3>Property Details</h3>
          <div className="form-group">
            <label htmlFor="description">Description of Property under Category - A</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
          </div>

          {/* Other Form Inputs */}
          <div className="form-group">
            <label htmlFor="survey-no">Survey No.</label>
            <input
              type="text"
              id="survey-no"
              name="surveyNo"
              value={formData.surveyNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="extent">Extent</label>
            <input
              type="text"
              id="extent"
              name="extent"
              value={formData.extent}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="boundaries">Boundaries</label>
            <textarea
              id="boundaries"
              name="boundaries"
              value={formData.boundaries}
              onChange={handleChange}
              required
            />
          </div>

          {/* Possession Details */}
          <h3>Details of Possession</h3>
          <div className="form-group">
            <label htmlFor="possession">Possession (Owned / Gifted / Vested / Others)</label>
            <select
              id="possession"
              name="possession"
              value={possession}
              onChange={handlePossessionChange}
              required
            >
              <option value="">Select</option>
              <option value="Owned">Owned</option>
              <option value="Gifted">Gifted</option>
              <option value="Vested">Vested</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {ownedDetailsVisible && (
            <>
              <h3>If Owned - Details of Ownership</h3>
              <div className="form-group">
                <label htmlFor="ownership">How it was owned by the Panchayat</label>
                <input
                  type="text"
                  id="ownership"
                  name="ownershipDetails"
                  value={formData.ownershipDetails}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="layout">If through Layout, Layout No.</label>
                <input
                  type="text"
                  id="layout"
                  name="layoutNo"
                  value={formData.layoutNo}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* Encroachment Details */}
          <h3>Encroachments Identified</h3>
          <div className="form-group">
            <label htmlFor="encroachment">Encroachments Identified (if any)</label>
            <textarea
              id="encroachment"
              name="encroachment"
              value={formData.encroachment}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="action">Action taken for eviction of encroachment</label>
            <textarea
              id="action"
              name="action"
              value={formData.action}
              onChange={handleChange}
            />
          </div>

          {/* Before/After Photos */}
          <h3>Before/After Photos</h3>
          <div className="form-group">
            <label htmlFor="before-photo">Before Photo</label>
            <input
              type="file"
              id="before-photo"
              name="beforePhoto"
              onChange={(e) => setFormData({ ...formData, beforePhoto: e.target.files[0] })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="after-photo">After Photo</label>
            <input
              type="file"
              id="after-photo"
              name="afterPhoto"
              onChange={(e) => setFormData({ ...formData, afterPhoto: e.target.files[0] })}
            />
          </div>

          {/* Remarks */}
          <h3>Remarks</h3>
          <div className="form-group">
            <label htmlFor="remarks">Remarks</label>
            <textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AForm;







































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';  
// import './A.css';

// const AForm = () => {
//   const [mandal, setMandal] = useState('');
//   const [gramPanchayat, setGramPanchayat] = useState('');
//   const [possession, setPossession] = useState('');
//   const [ownedDetailsVisible, setOwnedDetailsVisible] = useState(false);

//   const mandals = [
//     'ADDATEEGALA-R', 'ANANTHAGIRI-R', 'ARAKU VALLEY-R', 'CHINTAPALLI-R', 'CHINTOOR-R',
//     'DEVIPATNAM-R', 'DUMBRIGUDA-R', 'G.K VEEDHI-R', 'G.MADUGULA-R', 'GANGAVARAM AGENCY-R',
//     'HUKUMPETA-R', 'KOYYURU-R', 'KUNAVARAM-R', 'MAREDUMILLI-R', 'MUNCHINGAPUTTU-R',
//     'NELLIPAKA-R', 'PADERU-R', 'PEDABAYALU-R', 'RAJAVOMMANGI-R', 'RAMPACHODAVARAM-R',
//     'VARARAMACHANDRAPURAM-R', 'Y.RAMAVARAM-R'
//   ];

//   const handlePossessionChange = (e) => {
//     const value = e.target.value;
//     setPossession(value);
//     setOwnedDetailsVisible(value.toLowerCase() === 'owned');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Form Submitted');
//   };
//   const navigate = useNavigate();
//   const handleBack = () => {
//     navigate("/");
//   };

//   return (
//     <div className="form">
//       <div className="top-left">
//         <button className="back-home-btn" onClick={() => navigate("/")}>
//           ⬅
//         </button>

//       </div>
//       <h1>Properties Identified in the Gram Panchayat</h1>
//       <h3>As per G.O.Ms.No.188, Dt: 21.07.2011-Category A</h3>
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="mandal">Name of the Mandal</label>
//             <select
//               id="mandal"
//               name="mandal"
//               value={mandal}
//               onChange={(e) => setMandal(e.target.value)}
//               required
//             >
//               <option value="">Select Mandal</option>
//               {mandals.map((mandalName) => (
//                 <option key={mandalName} value={mandalName}>
//                   {mandalName}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="gram-panchayat">Name of the Gram Panchayat</label>
//             <input
//               type="text"
//               id="gram-panchayat"
//               name="gram-panchayat"
//               value={gramPanchayat}
//               onChange={(e) => setGramPanchayat(e.target.value)}
//               required
//             />
//           </div>

//           <h3>Property Details</h3>
//           <div className="form-group">
//             <label htmlFor="description">Description of Property under Category - A</label>
//             <textarea id="description" name="description" required></textarea>
//           </div>

//           <div className="form-group">
//             <label htmlFor="survey-no">Survey No.</label>
//             <input type="text" id="survey-no" name="survey-no" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="extent">Extent</label>
//             <input type="text" id="extent" name="extent" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="boundaries">Boundaries</label>
//             <textarea id="boundaries" name="boundaries" required></textarea>
//           </div>

//           <h3>Details of Possession</h3>
//           <div className="form-group">
//             <label htmlFor="possession">Possession (Owned / Gifted / Vested / Others)</label>
//             <select
//               id="possession"
//               name="possession"
//               value={possession}
//               onChange={handlePossessionChange}
//               required
//             >
//               <option value="">Select</option>
//               <option value="Owned">Owned</option>
//               <option value="Gifted">Gifted</option>
//               <option value="Vested">Vested</option>
//               <option value="Others">Others</option>
//             </select>
//           </div>

//           {ownedDetailsVisible && (
//             <>
//               <h3>If Owned - Details of Ownership</h3>
//               <div className="form-group">
//                 <label htmlFor="ownership">How it was owned by the Panchayat</label>
//                 <input type="text" id="ownership" name="ownership" />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="layout">If through Layout, Layout No.</label>
//                 <input type="text" id="layout" name="layout" />
//               </div>
//             </>
//           )}

//           <h3>Encroachments Identified</h3>
//           <div className="form-group">
//             <label htmlFor="encroachment">Encroachments Identified (if any)</label>
//             <textarea id="encroachment" name="encroachment"></textarea>
//           </div>

//           <div className="form-group">
//             <label htmlFor="action">Action taken for eviction of encroachment</label>
//             <textarea id="action" name="action"></textarea>
//           </div>

//           <h3>Before/After Photos</h3>
//           <div className="form-group">
//             <label htmlFor="before-photo">Before Photo (Latitude, Longitude)</label>
//             <input type="file" id="before-photo" name="before-photo" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="after-photo">After Photo (Latitude, Longitude)</label>
//             <input type="file" id="after-photo" name="after-photo" />
//           </div>

//           <h3>Remarks</h3>
//           <div className="form-group">
//             <label htmlFor="remarks">Remarks</label>
//             <textarea id="remarks" name="remarks"></textarea>
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AForm;
