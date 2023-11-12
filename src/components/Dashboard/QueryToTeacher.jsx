import React, {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
const url = 'http://localhost:3000/upload';

const QueryToTeacher = () => {

  const [course, setCourse] = useState('')
  const [teacherName, setTeacherName] = useState('')
  const [file, setFile] = useState(null)

  const handleQuerySubmit = async (e) => {
    e.preventDefault()
    try {
      if (course && teacherName && file){
        const formData = new FormData();
        formData.append('file', file);
        formData.append('course', course);
        formData.append('teacherName', teacherName);
        formData.append('date', new Date().toLocaleDateString('de-DE'));

        const { data } = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        toast.success(data.message)
      }else{
        toast.error('Please fill all fields')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='query-to-teacher common'>
        <h1 style={{borderBottomColor: 'transparent'}}>Query To Teacher</h1>
        <div>
          <form
            className='add-new-material'
            onSubmit={(e) => handleQuerySubmit(e)}
          >
            <div className='add-new-material-container'>
            <div className='course-type common-fields'>
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
          <div className='teacher-name common-fields'>
            <label htmlFor='Teacher Name'>
              Teacher Name<sup>*</sup>
            </label>
            <select
              name='course'
              required=''
              onChange={(e) => setTeacherName(e.target.value)}
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
                <label htmlFor='Upload File'>Upload File</label>
                <input
                  type='file'
                  onChange={(e) => {
                    setFile(e.target.files[0]), console.log(e.target.files[0]);
                  }}
                />
              </div>
              <button className='add-new-material-btn'>Submit Query</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default QueryToTeacher