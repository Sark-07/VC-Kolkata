import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { downloadPdf } from '../../../utils/downloadFile';

const QuestionBankFetch = ({ navigate }) => {
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const queryDepartment = new URLSearchParams(search).get('department');
  const [questionBank, setQuestionBank] = useState(null);
  const payload = {
    email: JSON.parse(localStorage.getItem('token')).email,
    semester: querySemester,
    course: queryCourse,
    department: queryDepartment,
  };
  // const { data: {data} } = useFetchPost(
  //   'http://localhost/vc/fetch/videofetch.php',
  //   payload
  // );
  const fetchData = async () => {
    try {
      console.log(payload);
      const {
        data: { data },
      } = await axios.post(
        'http://localhost/vc/fetch/questionfetch.php',
        payload
      );
      setQuestionBank(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!questionBank) {
      fetchData();
    }
  }, []);
  console.log(questionBank);

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
            <th>Topic Name</th>
            <th style={{ width: '150px' }}>Question File</th>
            <th style={{ width: '200px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {questionBank &&
            questionBank.map((items, index) => {
              return (
                <tr key={items.id}>
                  <td>{index + 1}</td>
                  <td>{items.paper}</td>
                  <td>{items.topic}</td>
                  <td>
                    <span style={{color: '#646cff', cursor: 'pointer', fontWeight: '600'}} onClick={() => downloadPdf(items.question)}>Click</span>
                  </td>
                  <td>
                    <button style={{marginRight: '0.5em'}}>Edit</button>
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

export default QuestionBankFetch;
