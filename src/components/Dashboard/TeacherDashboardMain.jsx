import React from 'react';
import DashboardLeftContainer from './DashboardLeftContainer';
import DashboardRightHeader from './DashboardRightHeader';
import UniversityQuestion from './UniversityQuestion';
import TeachingPlan from './TeachingPlan';
import QuestionBank from './QuestionBank';
import VideoLesson from './VideoLesson';
import PPTClass from './PPTClass';
import StudyMaterial from './StudyMaterial';
import StudentList from './StudentList';
import  Overview  from './Overview';
import Notification from './Notification';
import StudentQuery from './StudentQuery';
import CollegeExam from './CollegeExam';
import Ebook from './Ebook';
import Profile from './Profile';
import './Dashboard.module.css/dashboard.css';
import QueryToTeacher from './QueryToTeacher';

const TeacherDashboardMain = ({option}) => {

  return (
    <div className='dashboard'>
      <div className='dashboard-left'>
        <DashboardLeftContainer/>
      </div>
      <div className='dashboard-right'>
        <DashboardRightHeader />
        {
          option == 0 ? <Overview/> : option == 1 ? <StudentList/> : option == 2 ? <StudyMaterial/> : option == 3 ? <TeachingPlan/> : option == 4 ? <Notification/> : option == 5 ? <Ebook/> : option == 6 ? <QuestionBank/> : option == 7 ? <PPTClass/> : option == 8 ? <VideoLesson/> : option == 9 ? <UniversityQuestion/> : option == 10 ? <StudentQuery/> : option == 11 ? <CollegeExam/> : option == 12 ? <Profile/> : option == 13 ? <QueryToTeacher/> : <></>
        }
      </div>
    </div>
  );
};

export default TeacherDashboardMain;