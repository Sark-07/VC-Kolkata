import React from 'react';

const InstructionMaterial = () => {
  return (
    <>
      <div className='instruction-material common'>
        <h1>Instruction Material</h1>
        <form className='instruction-material-form common-form'>
          <div className='semester'>
            <label htmlFor='Semester'>
              Semester<sup>*</sup>
            </label>
            <select name='semester' required=''>
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
            <select name='course' required=''>
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
        <table class='table table-bordered'>
          <thead>
            <tr>
              <th style={{ width: '58px' }}>Sl&nbsp;No</th>
              <th>Date</th>
              <th>Paper Name</th>
              <th>Topic Name</th>
              <th style={{ width: '110p' }}>View File</th>
              <th style={{ width: '200p' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>28-11-2021</td>
              <td>CMS-A-CC-5-11-TH [Database Management system (DBMS)]</td>
              <td>Introduction [Date: 22.11.2021]</td>
              <td>
                <a
                  href='https://www.eshikshak.behalacollege.in/uploads/instructional_material/20211128041637676221.pdf'
                  class='btn btn-primary btn-xs'
                  
                >
                  Click
                </a>
              </td>
              <td className='actions'> 
                <button>Copy</button>
                <button style={{ marginInline: '0.5em' }}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InstructionMaterial;
