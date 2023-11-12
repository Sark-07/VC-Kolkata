import React from 'react';
import { Link } from 'react-router-dom';

const StudentUniversityQuestionFetch = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl No</th>
            <th>Teacher Name</th>
            <th>Session</th>
            <th>Title</th>
            <th style={{ width: '110px' }}>View Question</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ujjal Kumar Sur</td>
            <td>2015-16</td>
            <td>Quantum mechanics</td>
            <td>
              <Link to='https://www.eshikshak.behalacollege.in/uploads/university_question/20200424043106197342.pdf'
                class='btn btn-info btn-xs'
                target='_blank'>Click</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentUniversityQuestionFetch;
