import React from 'react';

const CollegeExamFetch = ({navigate}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => navigate('/teacher-dashboard/college-exam/add')}>
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl No</th>
            <th>Paper</th>
            <th>Full Mark</th>
            <th>Time of Exam</th>
            <th>View/Print Question</th>
            <th style={{ width: '110px' }}>View File</th>
            <th>Publish Status</th>
            <th style={{ width: '200px' }}>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CollegeExamFetch;
