import React from 'react'
import DashboardLeftContainer from './DashboardLeftContainer'
import DashboardRightHeader from './DashboardRightHeader'
import UniversityQuestion from './UniversityQuestion'
import './Dashboard.module.css/dashboard.css'
import './Dashboard.module.css/dashboardComponents.css'
import TeachingPlan from './TeachingPlan'
import QuestionBank from './QuestionBank'
import VideoLesson from './VideoLesson'
import PPTClass from './PPTClass'
import InstructionMaterial from './InstructionMaterial'

const Dashboard = () => {
  return (
    <div className='dashboard'>

        <div className="dashboard-left">
            <DashboardLeftContainer/>
        </div>
        <div className="dashboard-right">
          <DashboardRightHeader/>
          <TeachingPlan/>
          {/* <QuestionBank/> */}
          {/* <UniversityQuestion/> */}
          {/* <VideoLesson/>
          <PPTClass/> */}
          {/* <InstructionMaterial/> */}
        </div>
    </div>
  )
}

export default Dashboard