import React from 'react'

const TeachingPlanFetch = ({navigate}) => {
  return (
    <div>
            <div className='add-material add-new-btn'>
              <button
                onClick={() => navigate('/teacher-dashboard/teaching-plan/add')}
              >
                Add New
              </button>
            </div>

            <table>
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>Sl No</th>
                  <th style={{ width: '200px' }}>Paper</th>
                  <th style={{ width: '60px' }}>Section</th>
                  <th style={{ width: '180px' }}>Unit Name</th>
                  <th style={{ width: '80px' }}>View Topic</th>
                  <th style={{ width: '150px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Computer Organization &amp; Architecture</td>
                  <td>CC-5</td>
                  <td>Computer Organization &amp; Architecture</td>
                  <td>
                    <a href='#'>Click</a>
                  </td>
                  <td className='actions'>
                    <button style={{ marginInline: '0.5em' }}>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  )
}

export default TeachingPlanFetch