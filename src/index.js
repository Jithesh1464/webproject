import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CollegeList from './components/CollegeList';
import axios from 'axios';


const Index = () => {
  const [colleges, setColleges] = useState([]);

    useEffect(() => {
      const form = document.getElementById('rankForm');
  
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        const collegeType = document.getElementById('college').value;
        const branch = document.getElementById('branch').value;
        const category = document.getElementById('category').value;
        const rank = document.getElementById('rank').value;
  
        try {
          const response = await axios.get('http://127.0.0.1:8080/colleges/search', {
            params: { collegeType, branch, category, rank }
          });
          setColleges(response.data);
        } catch (error) {
          console.error('Error fetching colleges:', error);
        }
      };
  
      form.addEventListener('submit', handleFormSubmit);
  
      return () => {
        form.removeEventListener('submit', handleFormSubmit);
      };
    }, []);
  
    return (
      <div>
        <CollegeList colleges={colleges} />
      </div>
    );
};

export default Index;
document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.querySelector(".sidebar");
  const btnCollapse = document.getElementById("btn-collapse");

  btnCollapse.addEventListener("click", function() {
    sidebar.classList.toggle("sidebar-collapsed");
  });
});

