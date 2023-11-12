import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StudyMaterialFetch from './TeacherDashboardComponents/StudyMaterialFetch';
import StudyMaterialEdit from './TeacherDashboardComponents/StudyMaterialEdit';
import StudyMaterialAdd from './TeacherDashboardComponents/StudyMaterialAdd';
import toast from 'react-hot-toast';
import axios from 'axios';
import StudentStudyMaterialFetch from './StudentDashboardComponents/StudentStudyMaterialFetch';
const url = 'http://localhost:3000/upload';

const StudyMaterialFetchForm = ({
  fetchStudyMaterials,
  setCourse,
  setSemester,
  setDepartment,
  baseUrl,
}) => {
  return (
    <form
      className='teaching-plan-form common-form'
      onSubmit={(e) => fetchStudyMaterials(e)}
    >
      <div className='semester'>
        <label htmlFor='Semester'>
          Semester<sup>*</sup>
        </label>
        <select
          name='semester'
          required
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value=''>Select Semester</option>
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
          required
          onChange={(e) => setCourse(e.target.value)}
        >
          <option defaultValue='Select Course Type'>Select Course Type</option>
          <option value='General'>General</option>
          <option value='Honours'>Honours</option>
          <option value='PG'>PG</option>
          <option value='Add On course'>Add On course</option>
          <option value='Yoga materials'>Yoga materials</option>
        </select>
      </div>
      <div className={`${baseUrl == 'teacher-dashboard' && 'hide'} department`}>
        <label htmlFor='Department'>
          Department<sup>*</sup>
        </label>
        <select
          name='department'
          requiredd
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value=''>Select Department </option>
          <option value='1'>Bengali</option>
          <option value='2'>Botany</option>
          <option value='3'>Chemistry</option>
          <option value='4'>Computer Science</option>
          <option value='5'>Defence Studies</option>
          <option value='6'>Economics</option>
          <option value='7'>Education</option>
          <option value='8'>Electronics</option>
          <option value='9'>English</option>
          <option value='10'>Food And Nutrition</option>
          <option value='11'>Geography</option>
          <option value='12'>History</option>
          <option value='13'>Journalism and Mass Communication</option>
          <option value='22'>Librarian</option>
          <option value='14'>Mathematics</option>
          <option value='26'>PG</option>
          <option value='15'>Philosophy</option>
          <option value='24'>Photography (Add On course)</option>
          <option value='21'>Physical Education</option>
          <option value='16'>Physics</option>
          <option value='17'>Political Science</option>
          <option value='18'>Sanskrit</option>
          <option value='19'>Statistics</option>
          <option value='25'>Yoga materials (Add On course)</option>
          <option value='20'>Zoology</option>
        </select>
      </div>
      <button className='form-submit'>Submit</button>
    </form>
  );
};

const StudyMaterial = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [paper, setPaper] = useState('');
  const [topic, setTopic] = useState('');
  const [file, setFile] = useState(null);
  const [studyMaterials, setStudyMaterials] = useState(null);
  const pathname = window.location.pathname;
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const queryDepartment = new URLSearchParams(search).get('department');
  const baseUrl = pathname.split('/')[1];

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
    if (baseUrl == 'teacher-dashboard' && semester && course) {
      navigate(
        `/${baseUrl}/study-material/fetch?semester=${semester}&course=${course}`
      );
    } else if (
      baseUrl == 'student-dashboard' &&
      department &&
      semester &&
      course
    ) {
      navigate(
        `/${baseUrl}/study-material/fetch?semester=${semester}&course=${course}&department=${department}`
      );
    } else {
      toast.error('Please fill up all fields.');
    }
  };

  useEffect(() => {
    if (baseUrl == 'teacher-dashboard' && querySemester && queryCourse) {
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
    } else if (
      baseUrl == 'student-dashboard' &&
      queryDepartment &&
      querySemester &&
      queryCourse
    ) {
      fetch('http://localhost:3000/fetch1')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data), setStudyMaterials(data);
        });
    }
  }, [querySemester, queryCourse, queryDepartment]);

  return (
    <>
      <div className='study-material common'>
        <h1>Study Material</h1>

        {pathname == '/teacher-dashboard/study-material' ||
        pathname == '/student-dashboard/study-material' ? (
          <StudyMaterialFetchForm
            setCourse={setCourse}
            setDepartment={setDepartment}
            setSemester={setSemester}
            baseUrl={baseUrl}
            fetchStudyMaterials={fetchStudyMaterials}
          />
        ) : studyMaterials &&
          pathname == `/teacher-dashboard/study-material/fetch` ? (
          <StudyMaterialFetch navigate={navigate} />
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
        ) : studyMaterials && pathname == '/student-dashboard/study-material/fetch' ? (
          <StudentStudyMaterialFetch />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default StudyMaterial;
