import React from 'react'

const QuestionBank = () => {
  return (
    <>
    <div className="question-bank common">
        <h1>Question Bank</h1>
        <form className='question-bank-form common-form'>
                <div className="semester">
                <label htmlFor="Semester">Semester<sup>*</sup></label>
                <select name="semester" required="">
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
                <select name="course" required="">
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
    </div>
    </>
  )
}

export default QuestionBank