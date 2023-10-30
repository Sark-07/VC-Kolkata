import React from 'react';

const StudentQuery = () => {
  return (
    <>
      <div className='common qtudent-query'>
        <h1>Student Query</h1>
        <br />
        <table>
          <thead>
            <tr>
              <th style={{width: "58px"}}>Sl&nbsp;No</th>
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Course Type</th>
              <th>Query Date</th>
              <th style={{width: "200px"}}>View</th>
              <th style={{width: "200px"}}>Reply</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default StudentQuery;
