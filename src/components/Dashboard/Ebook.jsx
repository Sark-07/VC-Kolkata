import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import EbookAdd from './TeacherDashboardComponents/EbookAdd';
const url = 'http://localhost:3000/upload';
const Ebook = () => {
  const navigate = useNavigate();
  const [eResources, setEResources] = useState('');
  const [subject, setSubject] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [keyword, setKeyword] = useState('');
  const [link, setLink] = useState('');
  const [contentType, setContentType] = useState('');
  const [file, setFile] = useState(null);
  const pathname = window.location.pathname;
  const handleEbookSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        eResources &&
        subject &&
        author &&
        title &&
        keyword &&
        (link || file)
      ) {
        const formData = new FormData();
        if (file) {
          formData.append('file', file);
        } else {
          formData.append('link', link);
        }
        formData.append('eResources', eResources);
        formData.append('subject', subject);
        formData.append('author', author);
        formData.append('title', title);
        formData.append('keyword', keyword);
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

  return (
    <div className='common ebook'>
      <h1>Ebook</h1>
      <div className={`${pathname !== '/teacher-dashboard/e-books' && 'hide'}`}>
        <div className='add-material add-new-btn'>
          <button onClick={() => navigate('/teacher-dashboard/e-books/add')}>
            Add New
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ width: '58px' }}>Sl No</th>
              <th>Subject</th>
              <th>Title</th>
              <th>Author Name</th>
              <th>Keyword</th>
              <th style={{ width: '112px' }}>View File</th>
              <th style={{ width: '200px' }}>Action</th>
            </tr>
          </thead>
        </table>
      </div>
      {pathname !== '/teacher-dashboard/e-books/add' ? (
        <EbookAdd
          setAuthor={setAuthor}
          setContentType={setContentType}
          setEResources={setEResources}
          setFile={setFile}
          setKeyword={setKeyword}
          setLink={setLink}
          setTitle={setTitle}
          handleEbookSubmit={handleEbookSubmit}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Ebook;
