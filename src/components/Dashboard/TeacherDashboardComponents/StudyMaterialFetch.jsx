import React from 'react';

const StudyMaterialFetch = ({navigate}) => {
  return (
    <div>
      <div className={`add-study-material add-new-btn `}>
        <button
          onClick={() =>
            navigate('/teacher-dashboard/study-material/add')
          }
        >
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl&nbsp;No</th>
            <th>Date</th>
            <th>Paper Name</th>
            <th>Topic Name</th>
            <th>View File</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>28-11-2021</td>
            <td>CMS-A-CC-5-11-TH [Database Management system (DBMS)]</td>
            <td>Introduction [Date: 22.11.2021]</td>
            <td>
              <a href='https://www.eshikshak.behalacollege.in/uploads/instructional_material/20211128041637676221.pdf'>
                Click
              </a>
            </td>
            <td className='actions'>
              <button
                style={{ marginInline: '0.5em' }}
                onClick={() =>
                  navigate(`/teacher-dashboard/study-material/edit`)
                }
              >
                Edit
              </button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudyMaterialFetch;
