import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExamplePage.css'; 

const ExamplePage = () => {
  const navigate = useNavigate();

  const logoutbutton = () => {
    navigate('/login');
  };

  return (
    <div className="example-container">
      
      <button onClick={logoutbutton}>Logout</button>

      <div className="grid-example">
        <div className="grid-item">html </div>
        <div className="grid-item">css </div>
        <div className="grid-item">javascript </div>
        <div className="grid-item">php </div>
      </div>

      <h2>Simple Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ajay</td>
            <td>30</td>
          </tr>
          <tr>
            <td>2</td>
            <td>selva</td>
            <td>25</td>
          </tr>
          <tr>
            <td>3</td>
            <td>naveen</td>
            <td>35</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExamplePage;



