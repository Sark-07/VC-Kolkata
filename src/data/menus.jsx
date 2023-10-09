export const menus = [
    {
        menu: <><TbAntennaBars5 style={active == 0 && {color: '#6366f1'}} />Overview</>,
        path: '/teacher-dashboard'
    },
    {
        menu: <><PiStudentDuotone style={active == 1 && {color: '#6366f1'}}/>Student List</>,
        path: '/teacher-dashboard/student-list'
    },
    {
        menu: <><MdOutlineIntegrationInstructions style={active == 2 && {color: '#6366f1'}}/>Instruction Material</>,
        path: '/teacher-dashboard/instruction-material'
    },
    {
        menu: <><PiChalkboardTeacherFill style={active == 3 && {color: '#6366f1'}}/>Teaching Plan</>,
        path: '/teacher-dashboard/teaching-plan'
    },
    {
        menu: <><BsFiletypePpt style={active == 7 && {color: '#6366f1'}}/>PPT Class</>,
        path: '/teacher-dashboard/pptclass'
    }
]