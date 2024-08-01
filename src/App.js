import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import CollegeList from './components/CollegeList';
import Page0 from './pageoJS';
import Index from './index';

// function App() {
//   const [colleges, setColleges] = useState([]);

//   useEffect(() => {
//     const form = document.getElementById('rankForm');

//     const handleFormSubmit = async (event) => {
//       event.preventDefault();
//       const collegeType = document.getElementById('college').value;
//       const branch = document.getElementById('branch').value;
//       const category = document.getElementById('category').value;
//       const rank = document.getElementById('rank').value;

//       try {
//         const response = await axios.get('http://127.0.0.1:8080/colleges/search', {
//           params: { collegeType, branch, category, rank }
//         });
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };

//     form.addEventListener('submit', handleFormSubmit);

//     return () => {
//       form.removeEventListener('submit', handleFormSubmit);
//     };
//   }, []);

//   return (
//     <div>
//       <CollegeList colleges={colleges} />
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My React App</h1>
        </header>
        <Routes>
          <Route path="/home" element={<Page0 />} />
          <Route path="/another" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;