import React from 'react';
import { Link } from 'react-router-dom';

const StudentTeachingPlanFetch = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl No</th>
            <th>Teacher Name</th>
            <th>Paper</th>
            <th>Section / Module</th>
            <th>Unit Name</th>
            <th style={{ width: '110px' }}>Print</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Amitav Biswas</td>
            <td>Database Management system (DBMS) (CMS-A-CC-5-11-TH)</td>
            <td>CC-11</td>
            <td>Database Management system (DBMS)</td>
            <td>
              <Link
                to='https://www.eshikshak.behalacollege.in/teaching-plan-print/eyJpdiI6Imw2aTZxU25zQ1gvcUxsMjZZbU1Jcnc9PSIsInZhbHVlIjoiQU8ramh3aFBuZTA2MW11dFFzSW1udz09IiwibWFjIjoiMWQ5MTI5ZDFkMTVlY2MzZWM0ODEwNzVmOWY4ZmFlNzYxMTY5ZmQzZjU3YjVkOTQ4NzY2YTFhY2E3OWRiZmZiOSIsInRhZyI6IiJ9'
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

export default StudentTeachingPlanFetch;
