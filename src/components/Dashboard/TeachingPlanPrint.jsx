import React, { useContext, useRef } from 'react';
import { PrintContext } from '../../contexts/PrintContext';
import { useReactToPrint } from 'react-to-print';

const TeachingPlanPrint = () => {
  const { printData } = useContext(PrintContext);
  console.log(printData);

  const componentRef = useRef();

  const printPlan = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <section ref={componentRef} className='teaching-plan-print'>
        <header>
          <h1 style={{ fontSize: '3rem' }}>Vivekananda College</h1>
          <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>
            Teaching Plan Report
          </h2>
        </header>

        <main className='print-container'>
          <div className='teacher-subject-info'>
            <section>
              <h3>Teacher Information</h3>
              <div>
                <p>Teacher Name: {printData.teacherName}</p>
                <p>Department: {printData.department}</p>
                <p>Session: {printData.session}</p>
              </div>
            </section>

            <section>
              <h3>Subject Information</h3>
              <div>
                <p>Subject Name: Computer Science</p>
                <p>Semester: Sem {printData.semester}</p>
                <p>Paper: {printData.paper}</p>
                <p>Section: {printData.sectionModule}</p>
                <p>Unit Name (Topic): {printData.topic}</p>
              </div>
            </section>
          </div>

          <section className='plan'>
            <h3>Teaching Schedule</h3>
            <table>
              <thead>
                <tr>
                  <th>Sub Unit Name</th>
                  <th>Month</th>
                  <th>No. of Classes</th>
                </tr>
              </thead>
              <tbody>
                {printData &&
                  printData.subModules &&
                  printData.subModules.map((items, index) => {
                    return (
                      <tr key={index}>
                        <td>{items.subUnitName}</td>
                        <td>{items.month}</td>
                        <td>{items.noOfClasses}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </section>

          <section className='sign-print'>
            <h3>Signature</h3>
            <button onClick={printPlan}>Print</button>
          </section>
        </main>
      </section>
    </>
  );
};

export default TeachingPlanPrint;
