import React from 'react';

const VideoLessonAdd = ({setFileLink, setTopic, handleVideosubmitSubmit}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
      <form
        className='add-new-material'
        onSubmit={(e) => handleVideosubmitSubmit(e)}
      >
        <div className='add-new-material-container'>
          <div className='common-fields'>
            <label htmlFor='Topic Name'>Topic Name</label>
            <input
              type='text'
              placeholder='Eg: DBMS'
              required
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className='common-fields'>
            <label htmlFor='Video Link'>Video Link</label>
            <input
              type='text'
              required
              placeholder='Enter file link'
              onChange={(e) => setFileLink(e.target.value)}
            />
          </div>
          <button className='add-new-material-btn'>Add Video</button>
        </div>
      </form>
    </div>
  );
};

export default VideoLessonAdd;
