import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { downloadPdf } from '../../../utils/downloadFile';
import axios from 'axios';
const UniversityQuestionFetch = ({navigate}) => {
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const querySession = new URLSearchParams(search).get('session');
  const queryDepartment = new URLSearchParams(search).get('department');
  const [univQuestion, setUnivQuestion] = useState(null);

  const fetchData = async () => {
    try {
        const payload = {
          email: JSON.parse(localStorage.getItem('token')).email,
          semester: querySemester,
          course: queryCourse,
          session: querySession,
          department: queryDepartment,
        };
      console.log(payload);
      const {
        data: { data }
      } = await axios.post('http://localhost/vc/fetch/uniquesfetch.php', payload);
      setUnivQuestion(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!univQuestion) {
      fetchData();
    }
  }, [univQuestion]);
  // console.log(univQuestion);

  return (
    <div>
      <div className='add-material add-new-btn'>
        <button
          onClick={() => navigate('/teacher-dashboard/university-question/add')}
        >
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl No</th>
            <th>Title</th>
            <th style={{ width: '110px' }}>Question File</th>
            <th style={{ width: '200px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {univQuestion &&
            univQuestion.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{items.title}</td>
                  <td>
                    <span
                      style={{
                        color: '#646cff',
                        cursor: 'pointer',
                        fontWeight: '600',
                      }}
                      onClick={() => downloadPdf(items.file)}
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

export default UniversityQuestionFetch;
