import React from 'react';

const UniversityQuestionFetch = ({navigate}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button
          onClick={() => navigate('/teacher-dashboard/university-question/add')}
        >
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl&nbsp;No</th>
            <th>Title</th>
            <th style={{ width: '110p' }}>Question File</th>
            <th style={{ width: '200p' }}>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default UniversityQuestionFetch;
