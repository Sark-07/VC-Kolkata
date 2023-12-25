import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PrintContext } from '../../../contexts/PrintContext';

const TeachingPlanFetch = ({ navigate }) => {
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const querySession = new URLSearchParams(search).get('session');
  const [teachigPlan, setTeachingPlan] = useState(null);
  const {setPrintData} = useContext(PrintContext)
  const payload = {
    email: JSON.parse(localStorage.getItem('token')).email,
    semester: querySemester,
    session: querySession,
    course: queryCourse,
  };
  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios.post('http://localhost/vc/fetch/planfetch.php', payload);
      setTeachingPlan(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!teachigPlan) {
      fetchData();
    }
  }, [teachigPlan]);
  console.log(teachigPlan);

  const handlePrint = (index) => {
  navigate('/teacher-dashboard/teaching-plan/print')
  setPrintData(teachigPlan[index])
};
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button
          onClick={() => navigate('/teacher-dashboard/teaching-plan/add')}
        >
          Add New
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th style={{ width: '50px' }}>Sl No</th>
            <th style={{ width: '200px' }}>Paper</th>
            <th style={{ width: '60px' }}>Section</th>
            <th style={{ width: '180px' }}>Unit Name</th>
            <th style={{ width: '80px' }}>View Topic</th>
            <th style={{ width: '150px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachigPlan &&
            teachigPlan.map((items, index) => {
              return (
                <tr key={items.id}>
                  <td>{index + 1}</td>
                  <td>{items.paper}</td>
                  <td>{items.sectionModule}</td>
                  <td>{items.topic}</td>
                  <td>
                    <button onClick={() => handlePrint(index)}>View</button>
                  </td>
                  <td className='actions'>
                    <button style={{ marginInline: '0.5em' }}>Edit</button>
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

export default TeachingPlanFetch;
