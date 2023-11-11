import React from 'react';
import { Link } from 'react-router-dom';

const StudentStudyMaterialFetch = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{width: '58px'}}>Sl No</th>
            <th>Teacher Name</th>
            <th>Date</th>
            <th>Paper Name</th>
            <th>Topic Name</th>
            <th style={{width: '110px'}}>View File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Samiran Panda</td>
            <td>17-09-2022</td>
            <td>Programming using Python (DSE-B2)</td>
            <td>Python Loop</td>
            <td>
              <Link to={'https://www.eshikshak.behalacollege.in/uploads/instructional_material/1663387485_LearnPythonV2.pdf'} target='_blank'>Click</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentStudyMaterialFetch;
