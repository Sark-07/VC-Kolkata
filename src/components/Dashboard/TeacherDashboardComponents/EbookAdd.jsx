import React from 'react';

const EbookAdd = ({
  setAuthor,
  setContentType,
  setEResources,
  setFile,
  setLink,
  setKeyword,
  setTitle,
  handleEbookSubmit,
  contentType
}) => {
  return (
    <div>
      <div className='add-material add-new-btn'>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
      <form className='add-new-material' onSubmit={(e) => handleEbookSubmit(e)}>
        <div className='add-new-material-container'>
          <div className='common-fields'>
            <label htmlFor='E-Resources'>E-Resources</label>
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
            <label htmlFor='Content Type'>Content Type</label>
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
          <div
            className={`${
              (contentType == 1 || contentType == '') && 'hide'
            } common-fields`}
          >
            <label htmlFor='Content Link'>Content Link</label>
            <textarea
              placeholder='Enter Content Link here.'
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div
            className={`${
              (contentType == 2 || contentType == '') && 'hide'
            } common-fields`}
          >
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
  );
};

export default EbookAdd;
