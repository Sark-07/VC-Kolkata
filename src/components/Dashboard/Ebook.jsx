import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
const url = 'http://localhost:3000/upload';
const Ebook = () => {
    const navigate = useNavigate();
    const [eResources, setEResources] = useState('')
    const [subject, setSubject] = useState('');
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [keyword, setKeyword] = useState('')
    const [link, setLink] = useState('');
    const [contentType, setContentType] = useState('')
    const [file, setFile] = useState(null);
    const pathname = window.location.pathname;
    const handleEbookSubmit = async (e) => {
      e.preventDefault();
  
      try {
        if (eResources && subject && author && title && keyword && (link || file)) {
          const formData = new FormData();
          if (file){
            formData.append('file', file);
          }else{
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
      <div className={`${
            pathname !== '/teacher-dashboard/e-books' &&
            'hide'
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
            'hide'
          }`}
        >
          <div className='add-material add-new-btn'>
            <button onClick={() => window.history.back()}>Back</button>
          </div>
          <form
            className='add-new-material'
            onSubmit={(e) => handleEbookSubmit(e)}
          >
            <div className='add-new-material-container'>
            <div className='common-fields'>
            <label htmlFor='E-Resources'>
            E-Resources
            </label>
            <select
              name='eResources'
              required=''
              onChange={(e) => setEResources(e.target.value)}
            >
              <option>Select Resouce</option>
              <option value='1'>E-book</option>
              <option value='2'>E-journal</option>
            </select>
          </div>
              <div className='common-fields'>
                <label htmlFor='Subject'>Subject</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className='common-fields'>
                <label htmlFor='Title'>Title</label>
                <input
                  type='text'
                  placeholder='Eg: ISLR'
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className='common-fields'>
                <label htmlFor='Author'>Author</label>
                <input
                  type='text'
                  placeholder='Eg: Ryan Gosling'
                  required
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className='common-fields'>
                <label htmlFor='Keyword'>Keyword</label>
                <input
                  type='text'
                  placeholder='Eg: Statistics'
                  required
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <div className='common-fields'>
              <label htmlFor='Content Type'>
              Content Type
              </label>
              <select
                name='contentType'
                required=''
                onChange={(e) => setContentType(e.target.value)}
              >
                <option value=''>Select Content Type</option>
                <option value='1'>PDF</option>
                <option value='2'>Link</option>
              </select>
              </div>
              <div className={`${(contentType == 1 || contentType == '') && 'hide'} common-fields`}>
            <label htmlFor='Content Link'>
            Content Link
            </label>
            <textarea placeholder='Enter Content Link here.' onChange={(e) => setLink(e.target.value)}/>
            </div>
              <div className={`${(contentType == 2 || contentType == '') && 'hide'} common-fields`}>
                <label htmlFor='Upload File'>Upload File</label>
                <input
                  type='file'
                  onChange={(e) => {
                    setFile(e.target.files[0]), console.log(e.target.files[0]);
                  }}
                />
              </div>
              <button className='add-new-material-btn'>Add Book</button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Ebook;
