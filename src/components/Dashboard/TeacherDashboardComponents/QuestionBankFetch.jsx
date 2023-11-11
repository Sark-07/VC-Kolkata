import React from 'react';

const QuestionBankFetch = ({navigate}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button
          onClick={() => navigate('/teacher-dashboard/question-bank/add')}
        >
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '60px' }}>Sl No</th>
            <th>Paper</th>
            <th>Unit Name</th>
            <th style={{ width: '150px' }}>Question File</th>
            <th style={{ width: '200px' }}>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default QuestionBankFetch;
