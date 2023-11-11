import React from 'react'

const TeachingPlanAdd = ({setPaper, setSectionModule, subUnit, setSubUnit, setTopic, modules, handleTeachingPlanSubmit}) => {
  return (
    <div>
          <div className='add-material add-new-btn'>
            <button onClick={() => window.history.back()}>Back</button>
          </div>
          <form
            className='add-new-material'>
            <div className='add-new-material-container'>
              <div className='common-fields'>
                <label htmlFor='Paper'>Paper</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  required
                  onChange={(e) => setPaper(e.target.value)}
                />
              </div>
              <div className='common-fields'>
                <label htmlFor='Section/Module'>Section/Module</label>
                <input
                  type='text'
                  placeholder=''
                  required
                  onChange={(e) => setSectionModule(e.target.value)}
                />
              </div>
              <div className='common-fields'>
                <label htmlFor='Topic Name'>Topic Name</label>
                <input
                  type='text'
                  placeholder='Eg: Transaction'
                  required
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className='common-fields'>
                <label htmlFor='No. of Sub Unit'>No. of Sub Unit</label>
                <select
                  required=''
                  onChange={(e) => setSubUnit(e.target.value)}
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
              </div>
            </div>
          </form>
          <div className={`${subUnit === "" && 'hide'} teaching-plan-modules`}>
                
                {
                  modules && modules.map((items, index) => {

                    return (
                      <div key={index} className="modules">
                  <div className="sub-unit-name modules-common">
                    <label htmlFor={'Sub Unit Name'}>Sub Unit Name</label>
                    <input className='fields' type="text" />
                  </div>
                  <div className="code modules-common">
                    <label htmlFor={'Code: '}>Code:</label>
                    <input className='fields' type="text"/>
                  </div>
                  <div className="month modules-common">
                    <label htmlFor={'Month:'}>Month:</label>
                    <select className='fields'>
                    <option value=""> Select Month</option>
                    <option value="January"> January</option>
                    <option value="February"> February</option>
                    <option value="March"> March</option>
                    <option value="April"> April</option>
                    <option value="May">May</option>
                    <option value="june"> June</option>
                    <option value="July"> July</option>
                    <option value="August"> August</option>
                    <option value="September"> September</option>
                    <option value="October"> October</option>
                    <option value="November"> November</option>
                    <option value="December"> December</option>
                    </select>
                  </div>
                  <div className="no-of-classes modules-common">
                    <label htmlFor={'No. of Classes:  '}>No. of Classes: </label>
                    <input className='fields' type="text" />
                  </div>
                </div>
                    )
                  })
                }

          </div>
          <div style={{width: '100%', textAlign: 'center', marginBlockEnd: '2em'}}>
          <button className='add-new-material-btn' onClick={(e) => handleTeachingPlanSubmit(e)}>Add Plan</button>
          </div>
        </div>
  )
}

export default TeachingPlanAdd