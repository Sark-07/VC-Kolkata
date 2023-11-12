import React from 'react';
import { Link } from 'react-router-dom';

const StudentNotificationFetch = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{width: '58px'}}>Sl No</th>
            <th>Teacher Name</th>
            <th>Date</th>
            <th>Subject</th>
            <th style={{width: '110px'}}>View File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Samiran Panda</td>
            <td>11.11.11</td>
            <td>Python</td>
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

export default StudentNotificationFetch;
