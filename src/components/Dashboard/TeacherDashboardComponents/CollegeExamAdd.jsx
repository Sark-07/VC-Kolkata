import React from 'react';

const CollegeExamAdd = ({
  setFile,
  setFullMarks,
  setPaper,
  setTimeOfExam,
  handleCollegeExamSubmit,
}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
      <form
        className='add-new-material'
        onSubmit={(e) => handleCollegeExamSubmit(e)}
      >
        <div className='add-new-material-container'>
          <div className='common-fields'>
            <label htmlFor='Paper Name'>Paper Name</label>
            <input
              type='text'
              placeholder='Eg: DBMS'
              required
              onChange={(e) => setPaper(e.target.value)}
            />
          </div>
          <div className='common-fields'>
            <label htmlFor='Time Of Exam'>Time Of Exam</label>
            <input
              type='text'
              required
              onChange={(e) => setTimeOfExam(e.target.value)}
            />
          </div>

          <div className='common-fields'>
            <label htmlFor='Full Marks'>Full Marks</label>
            <input
              type='text'
              required
              onChange={(e) => setFullMarks(e.target.value)}
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

export default CollegeExamAdd;
