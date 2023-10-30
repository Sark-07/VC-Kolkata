import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
const url = 'http://localhost:3000/upload';
const Ebook = () => {
    const navigate = useNavigate();
    const [semester, setSemester] = useState('');
    const [course, setCourse] = useState('');
    const [session, setSession] = useState('');
    const [topic, setTopic] = useState('');
    const [date, setDate] = useState('');
    const [file, setFile] = useState(null);
    const pathname = window.location.pathname;
    const search = useLocation().search;
    const querySemester = new URLSearchParams(search).get('semester');
    const queryCourse = new URLSearchParams(search).get('course');
    const querySession = new URLSearchParams(search).get('session');
    const [ppt, setPPt] = useState(null);
  
  return (
    <div className='common ebook'>
      <h1>Ebook</h1>
      <div className={`${
            pathname !== '/teacher-dashboard/e-books' &&
            'hide-add-new-material'
          }`}>
      <div className='add-material add-new-btn'>
        <button onClick={() => navigate('/teacher-dashboard/e-books/add')}>
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{width: '58px'}}>Sl No</th>
            <th>Subject</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Keyword</th>
            <th style={{width: '112px'}}>View File</th>
            <th style={{width: '200px'}}>Action</th>
          </tr>
        </thead>
      </table>
      </div>
      <div
          className={`${
            pathname !== '/teacher-dashboard/e-books/add' &&
            'hide-add-new-material'
          }`}
        >
          <div className='add-material add-new-btn'>
            <button onClick={() => window.history.back()}>Back</button>
          </div>
          <form
            className='add-new-material'
            onSubmit={(e) => handlePPTSubmit(e)}
          >
            <div className='add-new-material-container'>
              <div className='common-fields'>
                <label htmlFor='Topic Name'>Topic Name</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  required
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className='common-fields'>
                <label htmlFor='Upload File'>Upload File</label>
                <input
                  type='file'
                  onChange={(e) => {
                    setFile(e.target.files[0]), console.log(e.target.files[0]);
                  }}
                />
              </div>
              <button className='add-new-material-btn'>Add Document</button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Ebook;
