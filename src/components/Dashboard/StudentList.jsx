import React from 'react';
import './Dashboard.module.css/dashboardComponents.css'

const StudentList = () => {
  return (
    <>
      <div className='student-list common'>
        <h1>Student List</h1>
        <form className='student-list-form common-form'>
            <div className="entries">
                <input type="number" placeholder='1'/>
                <button>Go</button>
            </div>
            <div className="search">
            <input type="search" placeholder='Eg: Computer Science' />
            <button className='search-btn'>Search</button>
            </div>
        </form>

        {/* Response */}

        <table>
          <thead>
            <tr>
              <th style={{ width: '45.4px' }}>Sl No</th>
              <th style={{ width: '241.4px' }}>Student Name</th>
              <th style={{ width: '54.4px' }}>Session</th>
              <th style={{ width: '55.4px' }}>Year</th>
              <th style={{ width: '85.4px' }}>Course Type</th>
              <th style={{ width: '165.4px' }}>Course</th>
              <th style={{ width: '34.4px' }}>Option</th>
              <th style={{ width: '34.4px' }}>Option</th>
              <th style={{ width: '88.4px' }}>Student ID</th>
              <th style={{ width: '69.4px' }}>DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className='student-info'>
                <div className="display-picture">
                    <img src="https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="student-DP" />
                </div>
                <div className="name-email">
                    <h3>Deep Chakraborty</h3>
                    <p>deep.chakraborty@hotmail.com</p>
                </div>
              </td>    
              <td>2022-23</td>
              <td>2nd Year</td>
              <td>General</td>
              <td>BA</td>
              <td></td>
              <td></td>
              <td>BAG22M0597</td>
              <td>09-08-2002</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
