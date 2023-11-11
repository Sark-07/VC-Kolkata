import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StudyMaterialFetch from './TeacherDashboardComponents/StudyMaterialFetch';
import StudyMaterialEdit from './TeacherDashboardComponents/StudyMaterialEdit';
import StudyMaterialAdd from './TeacherDashboardComponents/StudyMaterialAdd';
import toast from 'react-hot-toast';
import axios from 'axios';
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
  const baseUrl = pathname.split('/')[1]

  const handleStudyMaterialSubmit = async (e) => {
    e.preventDefault();

    try {
      if (semester && course && paper && topic && file) {
        const formData = new FormData();
        formData.append(
          'email',
          JSON.parse(localStorage.getItem('token')).email
        );
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
  const handleStudyMaterialEdit = (e) => {};
  const fetchStudyMaterials = async (e) => {
    e.preventDefault();
    if (semester && course) {
      navigate(
        `/${baseUrl}/study-material/fetch?semester=${semester}&course=${course}`
      );
    } else {
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
        {studyMaterials &&
        pathname == `/teacher-dashboard/study-material/fetch` ? (
          <StudyMaterialFetch 
          navigate={navigate} 
          />
        ) : pathname == '/teacher-dashboard/study-material/edit' ? (
          <StudyMaterialEdit
            setFile={setFile}
            setPaper={setPaper}
            setTopic={setTopic}
            handleStudyMaterialEdit={handleStudyMaterialEdit}
          />
        ) : pathname == '/teacher-dashboard/study-material/add' ? (
          <StudyMaterialAdd
            setFile={setFile}
            setPaper={setPaper}
            setTopic={setTopic}
            handleStudyMaterialSubmit={handleStudyMaterialSubmit}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default StudyMaterial;
