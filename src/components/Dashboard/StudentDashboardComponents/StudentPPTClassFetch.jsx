import React from 'react';
import { Link } from 'react-router-dom';

const StudentPPTClassFetch = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{width: '58px'}}>Sl No</th>
            <th>Teacher Name</th>
            <th>Unit Name</th>
            <th style={{width: '122px'}}>View File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Samiran Panda</td>
            <td>Regex</td>
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

export default StudentPPTClassFetch;
