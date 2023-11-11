import React from 'react';

const PPTClassFetch = ({navigate}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => navigate('/teacher-dashboard/ppt-class/add')}>
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl No</th>
            <th>Unit Name</th>
            <th style={{ width: '110p' }}>PPT File</th>
            <th style={{ width: '200p' }}>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default PPTClassFetch;
