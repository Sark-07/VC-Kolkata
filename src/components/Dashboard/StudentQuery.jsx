import React from 'react';
import QueryList from './StudentDashboardComponents/QueryList';

const StudentQuery = () => {
  const pathname = window.location.pathname;

  return (
    <>
      <div className='common qtudent-query'>
        <h1>Student Query</h1>
        <br />
        {pathname == '/teacher-dashboard/student-query' ? (
          <table>
            <thead>
              <tr>
                <th style={{ width: '58px' }}>Sl&nbsp;No</th>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Course Type</th>
                <th>Query Date</th>
                <th style={{ width: '200px' }}>View</th>
                <th style={{ width: '200px' }}>Reply</th>
              </tr>
            </thead>
          </table>
        ) : (
          <QueryList />
        )}
      </div>
    </>
  );
};

export default StudentQuery;
