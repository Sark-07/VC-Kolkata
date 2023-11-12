import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import CollegeExamAdd from './TeacherDashboardComponents/CollegeExamAdd';
import CollegeExamFetch from './TeacherDashboardComponents/collegeExamFetch';
import StudentCollegeExamFetch from './StudentDashboardComponents/StudentCollegeExamFetch';
const url = 'http://localhost:3000/upload';

const CollegeExamFetchForm = ({
  fetchCollegeExamList,
  setSemester,
  setCourse,
  setSession,
  setDepartment,
  baseUrl,
}) => {
  return (
    <form className='common-form' onSubmit={(e) => fetchCollegeExamList(e)}>
      <div className='session'>
        <label htmlFor='Session'>
          Session<sup>*</sup>
        </label>
        <select
          name='session'
          required
          onChange={(e) => setSession(e.target.value)}
        >
          <option value=''>Select Session</option>
          <option value='2014-15'>2014-15</option>
          <option value='2015-16'>2015-16</option>
          <option value='2016-17'>2016-17</option>
          <option value='2017-18'>2017-18</option>
          <option value='2018-19'>2018-19</option>
          <option value='2019-20'>2019-20</option>
          <option value='2020-21'>2020-21</option>
          <option value='2021-22'>2021-22</option>
          <option value='2022-23'>2022-23</option>
          <option value='2023-24'>2023-24</option>
          <option value='2024-25'>2024-25</option>
          <option value='2025-26'>2025-26</option>
          <option value='2026-27'>2026-27</option>
          <option value='2027-28'>2027-28</option>
          <option value='2028-29'>2028-29</option>
          <option value='2029-30'>2029-30</option>
          <option value='2030-31'>2030-31</option>
          <option value='2031-32'>2031-32</option>
          <option value='2032-33'>2032-33</option>
          <option value='2033-34'>2033-34</option>
          <option value='2034-35'>2034-35</option>
          <option value='2035-36'>2035-36</option>
          <option value='2036-37'>2036-37</option>
          <option value='2037-38'>2037-38</option>
          <option value='2038-39'>2038-39</option>
          <option value='2039-40'>2039-40</option>
          <option value='2040-41'>2040-41</option>
          <option value='2041-42'>2041-42</option>
          <option value='2042-43'>2042-43</option>
          <option value='2043-44'>2043-44</option>
          <option value='2044-45'>2044-45</option>
          <option value='2045-46'>2045-46</option>
          <option value='2046-47'>2046-47</option>
          <option value='2047-48'>2047-48</option>
          <option value='2048-49'>2048-49</option>
          <option value='2049-50'>2049-50</option>
        </select>
      </div>
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
      <button className='form-submit'>Submit</button>
    </form>
  );
};

const CollegeExam = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [session, setSession] = useState('');
  const [department, setDepartment] = useState('');
  const [timeOfExam, setTimeOfExam] = useState('');
  const [fullMarks, setFullMarks] = useState('');
  const [paper, setPaper] = useState('');
  const [file, setFile] = useState(null);
  const pathname = window.location.pathname;
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const querySession = new URLSearchParams(search).get('session');
  const queryDepartment = new URLSearchParams(search).get('department');
  const [collegeExamList, setCollegeExamList] = useState(null);
  const baseUrl = pathname.split('/')[1];

  const handleCollegeExamSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        semester &&
        course &&
        session &&
        paper &&
        fullMarks &&
        file &&
        timeOfExam
      ) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('semester', semester);
        formData.append('session', session);
        formData.append('course', course);
        formData.append('fullMarks', fullMarks);
        formData.append('timeOfExam', timeOfExam);
        formData.append('paper', paper);
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

  const fetchCollegeExamList = async (e) => {
    e.preventDefault();
    if (baseUrl == 'teacher-dashboard' && semester && course && session) {
      navigate(
        `/${baseUrl}/college-exam/fetch?semester=${semester}&course=${course}&session=${session}`
      );
    } else if (
      baseUrl == 'student-dashboard' &&
      department &&
      semester &&
      course &&
      session
    ) {
      navigate(
        `/${baseUrl}/college-exam/fetch?semester=${semester}&session=${session}&course=${course}&department=${department}`
      );
    } else {
      toast.error('Please fill up all fields.');
    }
  };

  useEffect(() => {
    if (baseUrl == 'teacher-dashboard' && querySemester && queryCourse && querySession) {
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
          console.log(data), setCollegeExamList(data);
        });
    } else if (
      baseUrl == 'student-dashboard' &&
      queryDepartment &&
      querySemester &&
      queryCourse &&
      querySession
    ) {
      fetch('http://localhost:3000/fetch1')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data), setCollegeExamList(data);
        });
    }
  }, [querySemester, queryCourse, queryDepartment, querySession]);
  return (
    <>
      <div className='common college-exam'>
        <h1>College Exam</h1>
        {pathname == '/student-dashboard/college-exam' ||
        pathname == '/teacher-dashboard/college-exam' ? (
          <CollegeExamFetchForm
            setCourse={setCourse}
            setSemester={setSemester}
            setSession={setSession}
            setDepartment={setDepartment}
            fetchCollegeExamList={fetchCollegeExamList}
            baseUrl={baseUrl}
          />
        ) : collegeExamList &&
          pathname == '/teacher-dashboard/college-exam/fetch' ? (
          <CollegeExamFetch navigate={navigate} />
        ) : pathname == '/teacher-dashboard/college-exam/add' ? (
          <CollegeExamAdd
            setFile={setFile}
            setFullMarks={setFullMarks}
            setPaper={setPaper}
            setTimeOfExam={setTimeOfExam}
            handleCollegeExamSubmit={handleCollegeExamSubmit}
          />
        ) : collegeExamList && pathname == '/student-dashboard/college-exam/fetch' ? (
          <StudentCollegeExamFetch/>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CollegeExam;
