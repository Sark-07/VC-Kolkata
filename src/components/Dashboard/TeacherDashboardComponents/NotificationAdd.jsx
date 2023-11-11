import React from 'react'

const NotificationAdd = ({setCourse, setDate, setFile, setSubject, setSemester, handleNotificationSubmit}) => {
  return (
    <div>
          <div className='add-material add-new-btn'>
            <button onClick={() => window.history.back()}>Back</button>
          </div>
          <form
            className='add-new-material'
            onSubmit={(e) => handleNotificationSubmit(e)}
          >
            <div className='add-new-material-container'>
            <div className='common-fields'>
            <label htmlFor='Semester'>
              Semester
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
          <div className='common-fields'>
            <label htmlFor='Course Type'>
              Course Type
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
              <div className='common-fields'>
                <label htmlFor='Date'>Date</label>
                <input
                  type='date'
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
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
                <label htmlFor='Upload File'>Upload File</label>
                <input
                  type='file'
                  onChange={(e) => {
                    setFile(e.target.files[0]), console.log(e.target.files[0]);
                  }}
                />
              </div>
              <button className='add-new-material-btn'>Add Notification</button>
            </div>
          </form>
        </div> 
  )
}

export default NotificationAdd