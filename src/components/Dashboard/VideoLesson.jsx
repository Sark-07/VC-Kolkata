import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
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
          date: new Date().toLocaleDateString('de-DE')
        }

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
    }else {
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
    <div className="video-lesson common">
        <h1>Video Lesson</h1>
        <form className='video-lesson-form common-form' onSubmit={(e) => fetchVideo(e)}>
          <div className="semester">
            <label htmlFor="Semester">Semester<sup>*</sup></label>
            <select name="semester" required="" onChange={(e) => setSemester(e.target.value)}>
              <option >Select Semester</option>
              <option value="1">1st Sem</option>
              <option value="2">2nd Sem</option>
              <option value="3">3rd Sem</option>
              <option value="4">4th Sem</option>
              <option value="5">5th Sem</option>
              <option value="6">6th Sem</option>
          </select>
                </div>
                <div className="course-type">
                    <label htmlFor="Course Type">Course Type<sup>*</sup></label>
                <select name="course" required="" onChange={(e) => setCourse(e.target.value)}>
                    <option defaultValue='Select Course Type'>Select Course Type</option>
                    <option value="General">General</option>
                    <option value="Honours">Honours</option>
                    <option value="PG">PG</option>
                    <option value="Add On course">Add On course</option>
                    <option value="Yoga materials">Yoga materials</option>
                </select>
                </div>
          <button className='form-submit'>Submit</button>
        </form>    
        {video && pathname == '/teacher-dashboard/video-lesson/fetch' ? (
          <div>
            <div className='add-material add-new-btn'>
              <button
                onClick={() => navigate('/teacher-dashboard/video-lesson/add')}
              >
                Add New
              </button>
            </div>
            <table>
                <thead>
                    <tr>
                      <th style={{width: '58px'}}>Sl&nbsp;No</th>
                      <th>Topic Name</th>
                      <th style={{width: '110px'}}>Embed Video Link</th>
                      <th style={{width: '200px'}}>Action</th>
                    </tr>
                </thead>
              </table>
          </div>
        ) : (
          <></>
        )} 
        <div
          className={`${
            pathname !== '/teacher-dashboard/video-lesson/add' &&
            'hide-add-new-material'
          }`}
        >
          <div className='add-material add-new-btn'>
            <button onClick={() => window.history.back()}>Back</button>
          </div>
          <form
            className='add-new-material'
            onSubmit={(e) => handleVideosubmitSubmit(e)}
          >
            <div className='add-new-material-container'>
              <div className='new-material-topic-name'>
                <label htmlFor='Topic Name'>Topic Name</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  required
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className='new-material-video-link'>
                <label htmlFor='Video Link'>Video Link</label>
                <input
                  type='text'
                  required
                  placeholder='Enter file link'
                  onChange={(e) => setFileLink(e.target.value)}
                />
              </div>
              <button className='add-new-material-btn'>Add Video</button>
            </div>
          </form>
        </div>   
    </div>
    </>
  )
}

export default VideoLesson