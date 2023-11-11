import React from 'react';
import { Link } from 'react-router-dom';

const StudentQuestionBankFetch = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{width: '58px'}}>Sl No</th>
            <th>Teacher Name</th>
            <th>Paper</th>
            <th>Unit Name</th>
            <th style={{width: '110px'}}>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Samiran Panda</td>
            <td>Programming using Python (DSE-B2)</td>
            <td>Python Loop</td>
            <td>
              <Link
                to={
                  'https://www.eshikshak.behalacollege.in/uploads/instructional_material/1663387485_LearnPythonV2.pdf'
                }
                target='_blank'
              >
                Click
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentQuestionBankFetch;
