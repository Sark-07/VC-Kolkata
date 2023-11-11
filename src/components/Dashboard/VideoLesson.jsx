import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import VideoLessonAdd from './TeacherDashboardComponents/VideoLessonAdd';
import VideoLessonFetch from './TeacherDashboardComponents/VideoLessonFetch';
const url = 'http://localhost:3000/upload';

const VideoLesson = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [session, setSession] = useState('');
  const [topic, setTopic] = useState('');
  const [fileLink, setFileLink] = useState('');
  const pathname = window.location.pathname;
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  // const querySession = new URLSearchParams(search).get('session');
  const [video, setVideo] = useState(null);

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
    if (semester && course) {
      navigate(
        `/teacher-dashboard/video-lesson/fetch?semester=${semester}&course=${course}`
      );
    } else {
      toast.error('Please fill up all fields.');
    }
  };

  useEffect(() => {
    if (querySemester && queryCourse) {
      fetch('http://localhost:3000/fetch')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data), setVideo(data);
        });
    }
  }, [querySemester, queryCourse]);

  return (
    <>
      <div className='video-lesson common'>
        <h1>Video Lesson</h1>
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
        {video && pathname == '/teacher-dashboard/video-lesson/fetch' ? (
          <VideoLessonFetch navigate={navigate} />
        ) : pathname == '/teacher-dashboard/video-lesson/add' ? (
          <VideoLessonAdd
            setFileLink={setFileLink}
            setTopic={setTopic}
            handleVideosubmitSubmit={handleVideosubmitSubmit}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default VideoLesson;
