import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
const url = 'http://localhost:3000/upload';

const QuestionBank = () => {

  const navigate = useNavigate();
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [paper, setPaper] = useState('');
  const [topic, setTopic] = useState('');
  const [file, setFile] = useState(null);
  const pathname = window.location.pathname;
  const search = useLocation().search;
  const querySemester = new URLSearchParams(search).get('semester');
  const queryCourse = new URLSearchParams(search).get('course');
  const [questionBank, setQuestionBank] = useState(null)

  const handleQuestionBankSubmit = async (e) => {
    e.preventDefault();

    try {
      if (semester && course && paper && topic && file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('semester', semester);
        formData.append('course', course);
        formData.append('paper', paper);
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

  const fetchQuestionBank = async (e) => {
    e.preventDefault();
    if (semester && course) {
      navigate(
        `/teacher-dashboard/question-bank/fetch?semester=${semester}&course=${course}`
      );
    }else {
      toast.error('Please fill up all fields.');
    }
  };

  useEffect(() => {
    if (querySemester && queryCourse) {
      fetch('http://localhost:3000/fetch')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data), setQuestionBank(data);
        });
    }
  }, [querySemester, queryCourse]);

  return (
    <>
    <div className="question-bank common">
        <h1>Question Bank</h1>
        <form className='question-bank-form common-form' onSubmit={(e) => fetchQuestionBank(e)}>
                <div className="semester">
                <label htmlFor="Semester">Semester<sup>*</sup></label>
                <select name="semester" required="" onChange={(e) => setSemester(e.target.value)}>
                <option >Select Semester</option>
                <option value="1">1st Sem</option>
                <option value="2">2nd Sem</option>
                <option value="3">3rd Sem</option>
                <option value="4">4th Sem</option>
                <option value="5">5th Sem</option>
                <option value="6">6th Sem</option>
                </select>
                </div>
                <div className="course-type">
                    <label htmlFor="Course Type">Course Type<sup>*</sup></label>
                <select name="course" required="" onChange={(e) => setCourse(e.target.value)}>
                    <option defaultValue='Select Course Type'>Select Course Type</option>
                    <option value="General">General</option>
                    <option value="Honours">Honours</option>
                    <option value="PG">PG</option>
                    <option value="Add On course">Add On course</option>
                    <option value="Yoga materials">Yoga materials</option>
                </select>
                </div>
          <button className='form-submit'>Submit</button>
        </form> 
        {
          questionBank && pathname == '/teacher-dashboard/question-bank/fetch' ? <div>
            <div className="add-material add-new-btn">
          <button onClick={() => navigate('/teacher-dashboard/question-bank/add')}>Add New</button>
        </div>
        <table>
                <thead>
                    <tr>
                      <th style={{width: '60px'}}>Sl No</th>
                      <th>Paper</th>
                      <th>Unit Name</th>
                      <th style={{width: '150px'}}>Question File</th>
                      <th style={{width: '200px'}}>Action</th>
                    </tr>
                </thead>
          </table>
          </div> : <></>
        } 
          <div
          className={`${
            pathname !== '/teacher-dashboard/question-bank/add' &&
            'hide'
          }`}
        >
          <div className='add-material add-new-btn'>
            <button
              onClick={() =>
                window.history.back()
              }
            >
              Back
            </button>
          </div>
          <form
            className='add-new-material'
            onSubmit={(e) => handleQuestionBankSubmit(e)}
          >
            <div className='add-new-material-container'>
              <div className='common-fields'>
                <label htmlFor='Paper Name'>Paper Name</label>
                <input
                  type='text'
                  placeholder='Eg: Advance DBMS'
                  required
                  onChange={(e) => setPaper(e.target.value)}
                />
              </div>
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
    </>
  )
}

export default QuestionBank