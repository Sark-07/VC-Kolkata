import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const url = 'http://localhost:3000/upload';
const StudyMaterial = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [paper, setPaper] = useState('');
  const [topic, setTopic] = useState('');
  const [file, setFile] = useState(null);
  const [studyMaterials, setStudyMaterials] = useState(null);
  const pathname = window.location.pathname;
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');

  const handleStudyMaterialSubmit = async (e) => {
    e.preventDefault();

    try {
      if (semester && course && paper && topic && file) {
        const formData = new FormData();
        formData.append('email', JSON.parse(localStorage.getItem('token')).email)
        formData.append('file', file);
        formData.append('semester', semester);
        formData.append('course', course);
        formData.append('paper', paper);
        formData.append('topic', topic);
        formData.append('date', new Date().toLocaleDateString('de-DE'));

        const { data } = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success(data.message);
      } else {
        toast.error('Please fill up all fields.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStudyMaterials = async (e) => {
    e.preventDefault();
    if (semester && course) {
      navigate(
        `/teacher-dashboard/study-material/fetch?semester=${semester}&course=${course}`
      );
    }else {
      toast.error('Please fill up all fields.');
    }
  };

  useEffect(() => {
    if (querySemester && queryCourse) {

      // try {

      //   const payload = {
      //     email: JSON.parse(localStorage.getItem('token')).email,
      //     semester: querySemester,
      //     course: queryCourse
      //   }  
      //     //  const {data} = axios.post(url, payload)   
        
      // } catch (error) {

      //   console.log(error);
        
      // }
      fetch('http://localhost:3000/fetch')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data), setStudyMaterials(data);
        });
    }
  }, [querySemester, queryCourse]);

  return (
    <>
      <div className='study-material common'>
        <h1>Study Material</h1>
        <form
          className='study-material-form common-form'
          onSubmit={(e) => fetchStudyMaterials(e)}
        >
          <div className='semester'>
            <label htmlFor='Semester'>
              Semester<sup>*</sup>
            </label>
            <select
              name='semester'
              required=''
              onChange={(e) => setSemester(e.target.value)}
            >
              <option>Select Semester</option>
              <option value='1'>1st Sem</option>
              <option value='2'>2nd Sem</option>
              <option value='3'>3rd Sem</option>
              <option value='4'>4th Sem</option>
              <option value='5'>5th Sem</option>
              <option value='6'>6th Sem</option>
            </select>
          </div>
          <div className='course-type'>
            <label htmlFor='Course Type'>
              Course Type<sup>*</sup>
            </label>
            <select
              name='course'
              required=''
              onChange={(e) => setCourse(e.target.value)}
            >
              <option defaultValue='Select Course Type'>
                Select Course Type
              </option>
              <option value='General'>General</option>
              <option value='Honours'>Honours</option>
              <option value='PG'>PG</option>
              <option value='Add On course'>Add On course</option>
              <option value='Yoga materials'>Yoga materials</option>
            </select>
          </div>
          <button className='form-submit'>Submit</button>
        </form>
        {studyMaterials ? (
          <>
            <div
              className={`${
                pathname != '/teacher-dashboard/study-material/fetch' &&
                'hide-add-new-material'
              }`}
            >
              <div className={`add-study-material add-new-btn `}>
                <button
                  onClick={() =>
                    navigate('/teacher-dashboard/study-material/add-material')
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
                    <td>
                      CMS-A-CC-5-11-TH [Database Management system (DBMS)]
                    </td>
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
          </>
        ) : (
          <></>
        )}
        <div className={`${
              pathname != '/teacher-dashboard/study-material/edit' &&
              'hide-add-new-material'
            }`}>
          <div
            className={`add-material add-new-btn`}
          >
            <button
              onClick={() =>
                window.history.back()
              }
            >
             Back
            </button>
          </div>
          <form
            className={`add-new-material`}
            onSubmit={(e) => handleStudyMaterialSubmit(e)}
          >
            <div className='add-new-material-container'>
              <div className='new-material-paper-name'>
                <label htmlFor='Paper Name'>Paper Name</label>
                <input
                  type='text'
                  placeholder='Eg: Advance DBMS'
                  required
                  onChange={(e) => setPaper(e.target.value)}
                />
              </div>
              <div className='new-material-topic-name'>
                <label htmlFor='Topic Name'>Topic Name</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  required
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className='new-material-upload'>
                <label htmlFor='Upload File'>Upload File</label>
                <input
                  type='file'
                  onChange={(e) => {
                    setFile(e.target.files[0]), console.log(e.target.files[0]);
                  }}
                />
              </div>
              <button className='add-new-material-btn'>Submit</button>
            </div>
          </form>
        </div>
        <div
          className={`${
            pathname !== '/teacher-dashboard/study-material/add-material' &&
            'hide-add-new-material'
          }`}
        >
          <div className='add-material add-new-btn'>
            <button
              onClick={() =>
                window.history.back()
              }
            >
              Back
            </button>
          </div>
          <form
            className='add-new-material'
            onSubmit={(e) => handleStudyMaterialSubmit(e)}
          >
            <div className='add-new-material-container'>
              <div className='new-material-paper-name'>
                <label htmlFor='Paper Name'>Paper Name</label>
                <input
                  type='text'
                  placeholder='Eg: Advance DBMS'
                  required
                  onChange={(e) => setPaper(e.target.value)}
                />
              </div>
              <div className='new-material-topic-name'>
                <label htmlFor='Topic Name'>Topic Name</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  required
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className='new-material-upload'>
                <label htmlFor='Upload File'>Upload File</label>
                <input
                  type='file'
                  onChange={(e) => {
                    setFile(e.target.files[0]), console.log(e.target.files[0]);
                  }}
                />
              </div>
              <button className='add-new-material-btn'>Add Material</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudyMaterial;
