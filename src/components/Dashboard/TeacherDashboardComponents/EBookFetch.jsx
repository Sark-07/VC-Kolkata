import React from 'react';

const EBookFetch = ({navigate, baseUrl}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <div className='e-book' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <button className={`${baseUrl == 'student-dashboard' && 'hide'}`} onClick={() => navigate('/teacher-dashboard/e-books/add')}>
          Add New
        </button>
        <div className="search">
            <input type="search" placeholder='Eg: Computer Science' />
            <button className='search-btn'>Search</button>
        </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl No</th>
            <th>Subject</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Keyword</th>
            <th style={{ width: '112px' }}>View File</th>
            <th style={{ width: '200px' }}>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default EBookFetch;
