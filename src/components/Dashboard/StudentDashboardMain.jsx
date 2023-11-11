import React from 'react'
import DashboardLeftContainer from './DashboardLeftContainer';
import DashboardRightHeader from './DashboardRightHeader';
import UniversityQuestion from './UniversityQuestion';
import TeachingPlan from './TeachingPlan';
import QuestionBank from './QuestionBank';
import VideoLesson from './VideoLesson';
import PPTClass from './PPTClass';
import StudyMaterial from './StudyMaterial';
import Overview  from './Overview';
import Notification from './Notification';
import StudentQuery from './StudentQuery';
import CollegeExam from './CollegeExam';
import Ebook from './Ebook';

const StudentDashboardMain = ({option}) => {
    return (
        <div className='dashboard'>
          <div className='dashboard-left'>
            <DashboardLeftContainer/>
          </div>
          <div className='dashboard-right'>
            <DashboardRightHeader />
            {
              option == 0 ? <Overview/> : option == 2 ? <StudyMaterial/> : option == 3 ? <TeachingPlan/> : option == 4 ? <Notification/> : option == 5 ? <Ebook/> : option == 6 ? <QuestionBank/> : option == 7 ? <PPTClass/> : option == 8 ? <VideoLesson/> : option == 9 ? <UniversityQuestion/> : option == 10 ? <StudentQuery/> : option == 11 ? <CollegeExam/> : <></>
            }
          </div>
        </div>
      );
}

export default StudentDashboardMain