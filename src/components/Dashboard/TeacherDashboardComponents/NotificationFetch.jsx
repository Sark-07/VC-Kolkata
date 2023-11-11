import React from 'react';

const NotificationFetch = ({navigate}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => navigate('/teacher-dashboard/notification/add')}>
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl No</th>
            <th>Year</th>
            <th>Course Type</th>
            <th>Date</th>
            <th>Subject</th>
            <th style={{ width: '112px' }}>View File</th>
            <th style={{ width: '200px' }}>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default NotificationFetch;
