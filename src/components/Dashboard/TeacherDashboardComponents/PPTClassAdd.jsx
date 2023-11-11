import React from 'react';

const PPTClassAdd = ({ setFile, setTopic, handlePPTSubmit }) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
      <form className='add-new-material' onSubmit={(e) => handlePPTSubmit(e)}>
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
            <label htmlFor='Upload File'>Upload File</label>
            <input
              type='file'
              onChange={(e) => {
                setFile(e.target.files[0]), console.log(e.target.files[0]);
              }}
            />
          </div>
          <button className='add-new-material-btn'>Add Document</button>
        </div>
      </form>
    </div>
  );
};

export default PPTClassAdd;
