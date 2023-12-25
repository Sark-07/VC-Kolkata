import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { downloadPdf } from '../../../utils/downloadFile';

const PPTClassFetch = ({ navigate }) => {
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const querySession = new URLSearchParams(search).get('session');
  const queryDepartment = new URLSearchParams(search).get('department');
  const [ppt, setPPt] = useState(null);
  
  const fetchData = async () => {
    try {
        const payload = {
          email: JSON.parse(localStorage.getItem('token')).email,
          semester: querySemester,
          course: queryCourse,
          session: querySession,
          department: '',
        };
      console.log(payload);
      const {
        data: { data },
      } = await axios.post('http://localhost/vc/fetch/pptfetch.php', payload);
      setPPt(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!ppt) {
      fetchData();
    }
  }, [ppt]);
  console.log(ppt);
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => navigate('/teacher-dashboard/ppt-class/add')}>
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl No</th>
            <th>Topic Name</th>
            <th style={{ width: '110p' }}>PPT File</th>
            <th style={{ width: '200p' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {ppt &&
            ppt.map((items, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{items.topic}</td>
                  <td>
                    <span
                      style={{
                        color: '#646cff',
                        cursor: 'pointer',
                        fontWeight: '600',
                      }}
                      onClick={() => downloadPdf(items.ppt)}
                    >
                      Click
                    </span>
                  </td>
                  <td>
                    <button style={{ marginRight: '0.5em' }}>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PPTClassFetch;
