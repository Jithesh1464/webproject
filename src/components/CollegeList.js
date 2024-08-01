// src/components/CollegeList.js
import React from 'react';
import './CollegeList.css';

const CollegeList = ({ colleges }) => {
    return (
      <div className="college-list-container">
        <h2>Eligible Colleges</h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>College Name</th>
              <th>NIRF RANK</th>
              <th>PROBABILITY</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{college.name}</td>
                <td>{college.nirfRank}</td>
                <td>{"50"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default CollegeList;
