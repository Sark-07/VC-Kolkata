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
              option == 0 ? <Overview/> : option == 1 ? <StudyMaterial/> : option == 2 ? <TeachingPlan/> : option == 3 ? <Notification/> : option == 4 ? <Ebook/> : option == 5 ? <QuestionBank/> : option == 6 ? <PPTClass/> : option == 7 ? <VideoLesson/> : option == 8 ? <UniversityQuestion/> : option == 9 ? <StudentQuery/> : option == 10 ? <CollegeExam/> : <></>
            }
          </div>
        </div>
      );
}

export default StudentDashboardMain