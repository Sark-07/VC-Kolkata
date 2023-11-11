import React from 'react';

const VideoLessonFetch = ({navigate}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => navigate('/teacher-dashboard/video-lesson/add')}>
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl&nbsp;No</th>
            <th>Topic Name</th>
            <th style={{ width: '110px' }}>Embed Video Link</th>
            <th style={{ width: '200px' }}>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default VideoLessonFetch;
