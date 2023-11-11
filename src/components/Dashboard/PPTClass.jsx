import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import PPTClassAdd from './TeacherDashboardComponents/PPTClassAdd';
import PPTClassFetch from './TeacherDashboardComponents/PPTClassFetch';
const url = 'http://localhost:3000/upload';

const PPTClass = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [session, setSession] = useState('');
  const [topic, setTopic] = useState('');
  const [file, setFile] = useState(null);
  const pathname = window.location.pathname;
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const querySession = new URLSearchParams(search).get('session');
  const [ppt, setPPt] = useState(null);

  const handlePPTSubmit = async (e) => {
    e.preventDefault();

    try {
      if (semester && course && session && topic && file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('semester', semester);
        formData.append('session', session);
        formData.append('course', course);
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

  const fetchPPT = async (e) => {
    e.preventDefault();
    if (semester && course && session) {
      navigate(
        `/teacher-dashboard/ppt-class/fetch?semester=${semester}&course=${course}&session=${session}`
      );
    } else {
      toast.error('Please fill up all fields.');
    }
  };

  useEffect(() => {
    if (querySemester && queryCourse && querySession) {
      fetch('http://localhost:3000/fetch')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data), setPPt(data);
        });
    }
  }, [querySemester, queryCourse, querySession]);

  return (
    <>
      <div className='PPT-class common'>
        <h1>PPT Class</h1>
        <form
          className='PPT-class-form common-form'
          onSubmit={(e) => fetchPPT(e)}
        >
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
        {ppt && pathname == '/teacher-dashboard/ppt-class/fetch' ? (
          <PPTClassFetch navigate={navigate} />
        ) : pathname == '/teacher-dashboard/ppt-class/add' ? (
          <PPTClassAdd
            setFile={setFile}
            setTopic={setTopic}
            handlePPTSubmit={handlePPTSubmit}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default PPTClass;
