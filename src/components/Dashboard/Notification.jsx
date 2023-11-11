import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import NotificationAdd from './TeacherDashboardComponents/NotificationAdd';
import NotificationFetch from './TeacherDashboardComponents/NotificationFetch';
const url = 'http://localhost:3000/upload';
const Notification = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [notification, setNotification] = useState(null)
  const [file, setFile] = useState(null);
  const pathname = window.location.pathname;
  const search = useLocation().search;
  const querySession = new URLSearchParams(search).get('session');

  const handleNotificationSubmit = async (e) => {
    e.preventDefault();

    try {
      if (semester && course && session && subject && file && date) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('semester', semester);
        formData.append('session', session);
        formData.append('course', course);
        formData.append('subject', subject);
        formData.append('date', date);
        console.log(date);

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



  const fetchNotification = async (e) => {
    e.preventDefault();
    if (session) {
      navigate(
        `/teacher-dashboard/notification/fetch?session=${session}`
      );
    }else {
      toast.error('Please fill up all fields.');
    }
  };

  useEffect(() => {
    if (querySession) {
      fetch('http://localhost:3000/fetch')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data), setNotification(data);
        });
    }
  }, [querySession]);


  return (
    <div className='common notification'>
        <h1>Notification</h1>
        <form className='notification-form common-form' onSubmit={(e) => fetchNotification(e)}>
        <div className='session'>
            <label htmlFor='Session'>
              Session
            </label>
            <select name='session' required onChange={(e) => setSession(e.target.value)}>
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
          <button className='form-submit'>Submit</button>
        </form> 
        {notification && pathname == '/teacher-dashboard/notification/fetch' ? (
          <NotificationFetch navigate={navigate}/>
        ) : pathname == '/teacher-dashboard/notification/add' ? (
          <NotificationAdd setCourse={setCourse} setDate={setDate} setFile={setFile} setSemester={setSemester} setSubject={setSubject} handleNotificationSubmit={handleNotificationSubmit}/>
        ) :(
          <></>
        )}

             
    </div>
  )
}

export default Notification