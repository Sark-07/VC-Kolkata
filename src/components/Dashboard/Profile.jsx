import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
const url = 'http://localhost:3000/upload';
const menus = ['Edit Profile', 'Photo & Profile Upload', 'Change Password']
const Profile = () => {
  const {logout} = useAuth()
  const [menuIndex, setMenuIndex] = useState(-1)
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [qualification, setQualification] = useState('')
  const [photo, setPhoto] = useState(null)
  const [profile, setProfile] = useState(null)
  const [newPassword, setNewPassword] = useState('')
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')

  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()

    try {

      const formData = new FormData()
      formData.append('email', JSON.parse(localStorage.getItem('token')).email)
      formData.append('name', name)
      formData.append('designation', designation)
      formData.append('qualification', qualification)
      formData.append('photo', photo)
      formData.append('profile', profile)
      formData.append('newPassword', newPassword)
      console.log(profile, photo);
      const { data } = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(data.message);
      
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='teaching-plan common'>
      <h1>Profile</h1>
      <div className='profile-layout'>
        <div className='overview'>
          <div className='dp-name'>
            <div className='dp'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
                alt='Teacher DP'
              />
            </div>
            <h1>John Doe</h1>
            </div>
            <div className='details'>
              <p><b>Designation:</b> Head of the Department</p>
              <p><b>Department:</b> Computer Science & Engineering</p>
              <p><b>Qualification:</b> MS in Computer Science</p>
              <p><b>Username:</b> John07</p>
              <p><b>Password:</b> john.doe</p>
            </div>
            <div className="view-proflie-logout-btn">
              <button><Link to={''} style={{color: 'black'}}>View Profile</Link></button>
              <button onClick={() => handleLogout()}>Logout</button>
            </div>
        </div>
        <form className='profile-edit' onSubmit={(e) => handleProfileSubmit(e)}>
            <nav>
                {
                    menus.map((items, index) => {
                        return <span onClick={() => setMenuIndex(index)} key={index} style={index == menuIndex ? {borderBottomColor: '#bedeb1'} : {borderBottomColor: 'transparent'}}>{items}</span>
                    })
                }
            </nav>
            <div className={`edit ${menuIndex != 0 && 'hide'}`}>
            <div className='common-fields'>
                <label htmlFor='Name'>Name</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  onChange={(e) => setName(e.target.value)}
                />
            </div>  
            <div className='common-fields'>
                <label htmlFor='Designation'>Designation</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  onChange={(e) => setDesignation(e.target.value)}
                />
            </div>
            <div className='common-fields'>
                <label htmlFor='Qualificaation'>Qualificaation</label>
                <input
                  type='text'
                  placeholder='Eg: DBMS'
                  onChange={(e) => setQualification(e.target.value)}
                />
            </div>
            </div>
            <div className={`photo-profile-upload ${menuIndex != 1 && 'hide'}`}>
            <div className='common-fields'>
                <label htmlFor='Photo'>Photo <span style={{fontWeight: '400', fontSize: '0.8rem'}}>(.jpg/.jpeg)</span></label>
                <input
                  type='file'
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
            </div>
            <div className='common-fields'>
                <label htmlFor='Profile'>Profile <span style={{fontWeight: '400', fontSize: '0.8rem'}}>(.docx/.pdf)</span></label>
                <input
                  type='file'
                  onChange={(e) => {setProfile(e.target.files[0])}}
                />
            </div>
            </div>
            <div className={`change-password ${menuIndex != 2 && 'hide'}`}>
            <div className='common-fields'>
                <label htmlFor='New Password'>New Password</label>
                <input
                  type={`${showPassword ? 'text' : 'password'}`}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div className="show-password" style={{display: 'flex', gap: '.75em', alignItems: 'center', fontSize: '.8rem'}}>
                <input type="checkbox" style={{width: 'fit-content'}} onChange={(e) => setShowPassword(!showPassword)}/>
                <span>Show Password</span>
            </div>
            </div>
            <button className={`${menuIndex < 0 && 'hide'}`}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
