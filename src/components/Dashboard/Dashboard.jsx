import React from 'react';
import DashboardLeftContainer from './DashboardLeftContainer';
import DashboardRightHeader from './DashboardRightHeader';
import UniversityQuestion from './UniversityQuestion';
import './Dashboard.module.css/dashboard.css';
import './Dashboard.module.css/dashboardComponents.css';
import TeachingPlan from './TeachingPlan';
import QuestionBank from './QuestionBank';
import VideoLesson from './VideoLesson';
import PPTClass from './PPTClass';
import InstructionMaterial from './InstructionMaterial';
import StudentList from './StudentList';
import { useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';

const Dashboard = () => {

  const {option} = useContext(SidebarContext)
  console.log(option);

  return (
    <div className='dashboard'>
      <div className='dashboard-left'>
        <DashboardLeftContainer />
      </div>
      <div className='dashboard-right'>
        <DashboardRightHeader />
        {
          option == 1 ? <StudentList/> : option == 2 ? <InstructionMaterial/> : option == 3 ? <TeachingPlan/> : option == 4 ? <></> : option == 5 ? <></> : option == 6 ? <QuestionBank/> : option == 7 ? <PPTClass/> : option == 8 ? <VideoLesson/> : option == 9 ? <UniversityQuestion/> : <></>
        }
      </div>
    </div>
  );
};

export default Dashboard;
