import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import EbookAdd from './TeacherDashboardComponents/EbookAdd';
import EBookFetch from './TeacherDashboardComponents/EBookFetch';
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
  const baseUrl = pathname.split('/')[1];

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
      {pathname == '/teacher-dashboard/e-books' || pathname == '/student-dashboard/e-books' ? (
        <EBookFetch navigate={navigate} baseUrl={baseUrl}/>
      ) : pathname == '/teacher-dashboard/e-books/add' ? (
        <EbookAdd
          setAuthor={setAuthor}
          setContentType={setContentType}
          contentType={contentType}
          setEResources={setEResources}
          setFile={setFile}
          setKeyword={setKeyword}
          setLink={setLink}
          setTitle={setTitle}
          setSubject={setSubject}
          handleEbookSubmit={handleEbookSubmit}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Ebook;
