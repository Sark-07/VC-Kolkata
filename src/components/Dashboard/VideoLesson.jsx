import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import VideoLessonAdd from './TeacherDashboardComponents/VideoLessonAdd';
import VideoLessonFetch from './TeacherDashboardComponents/VideoLessonFetch';
import StudentVideoLessonFetch from './StudentDashboardComponents/StudentVideoLessonFetch';
const url = 'http://localhost:3000/upload';

const VideoLessonFetchForm = ({
  baseUrl,
  setCourse,
  setDepartment,
  setSemester,
  fetchVideo,
}) => {
  return (
    <form
      className='video-lesson-form common-form'
      onSubmit={(e) => fetchVideo(e)}
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

const VideoLesson = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [department, setDepartment] = useState('');
  const [topic, setTopic] = useState('');
  const [fileLink, setFileLink] = useState('');
  const pathname = window.location.pathname;
  const baseUrl = pathname.split('/')[1];

  const handleVideosubmitSubmit = async (e) => {
    e.preventDefault();

    try {
      if (semester && course && topic && fileLink) {
        const payload = {
          semester: semester,
          course: course,
          topic: topic,
          fileLink: fileLink,
          date: new Date().toLocaleDateString('de-DE'),
        };

        const { data } = await axios.post(url, payload);
        toast.success(data.message);
      } else {
        toast.error('Please fill up all fields.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideo = async (e) => {
    e.preventDefault();
      if (baseUrl == 'teacher-dashboard' && semester && course) {
        navigate(
          `/${baseUrl}/video-lesson/fetch?semester=${semester}&course=${course}`
        );
      } else if (
        baseUrl == 'student-dashboard' &&
        semester &&
        course &&
        department
      ) {
        navigate(
          `/${baseUrl}/video-lesson/fetch?semester=${semester}&course=${course}&department=${department}`
        );
      } else {
        toast.error('Please fill up all fields.');
      }
  };

  // useEffect(() => {
  //   if (baseUrl == 'teacher-dashboard' && querySemester && queryCourse) {
  //     // try {
  //     //   const payload = {
  //     //     email: JSON.parse(localStorage.getItem('token')).email,
  //     //     semester: querySemester,
  //     //     course: queryCourse,
  //     //   };

  //     //   console.log(payload);
  //     //   fetch('http://localhost/vc/fetch/videofetch.php', {
  //     //     Method: 'POST',
  //     //     Headers: {
  //     //       'Content-Type': 'application/json',
  //     //     },
  //     //     Body: JSON.stringify(payload),
  //     //   })
  //     //     .then((res) => {
  //     //       return res.json();
  //     //     })
  //     //     .then((data) => {
  //     //       console.log(data), setVideo(data);
  //     //     });
  //     // } catch (error) {
  //     //   console.log(error);
  //     // }
  //   } else if (
  //     baseUrl == 'student-dashboard' &&
  //     querySemester &&
  //     queryCourse &&
  //     queryDepartment
  //   ) {
  //     fetch('http://localhost:3000/fetch1')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data), setVideo(data);
  //       });
  //   }
  // }, [querySemester, queryCourse, queryDepartment]);

  return (
    <>
      <div className='video-lesson common'>
        <h1>Video Lesson</h1>
        {pathname == '/teacher-dashboard/video-lesson' ||
        pathname == '/student-dashboard/video-lesson' ? (
          <VideoLessonFetchForm
            setCourse={setCourse}
            setDepartment={setDepartment}
            setSemester={setSemester}
            baseUrl={baseUrl}
            fetchVideo={fetchVideo}
          />
        ) : pathname == '/teacher-dashboard/video-lesson/fetch' ? (
          <VideoLessonFetch navigate={navigate} />
        ) : pathname == '/teacher-dashboard/video-lesson/add' ? (
          <VideoLessonAdd
            setFileLink={setFileLink}
            setTopic={setTopic}
            handleVideosubmitSubmit={handleVideosubmitSubmit}
          />
        ) : pathname == '/student-dashboard/video-lesson/fetch' ? (
          <StudentVideoLessonFetch />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default VideoLesson;
