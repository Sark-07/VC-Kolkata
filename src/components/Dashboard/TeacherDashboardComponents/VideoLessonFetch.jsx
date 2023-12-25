import React, { useEffect, useState } from 'react';
import useFetchPost from '../../../Hooks/useFetchPost';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const VideoLessonFetch = ({ navigate }) => {
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const [video, setVideo] = useState(null);
  const payload = {
    email: JSON.parse(localStorage.getItem('token')).email,
    semester: querySemester,
    course: queryCourse,
  };
  // const { data: {data} } = useFetchPost(
  //   'http://localhost/vc/fetch/videofetch.php',
  //   payload
  // );
  const fetchData = async () => {
    try {
      const {
        data: {data}
      } = await axios.post('http://localhost/vc/fetch/videofetch.php', payload);
      setVideo(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!video) {
      fetchData();
    }
  }, [video]);

  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => navigate('/teacher-dashboard/video-lesson/add')}>
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '58px' }}>Sl&nbsp;No</th>
            <th>Topic Name</th>
            <th style={{ width: '110px' }}>Embed Video Link</th>
            <th style={{ width: '200px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {video &&
            video.map((items, index) => {
              return (
                <tr key={items.id}>
                  <td>{index + 1}</td>
                  <td>{items.topic}</td>
                  <td><Link to={items.link}>Click</Link></td>
                  <td className='actions'>
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

export default VideoLessonFetch;
