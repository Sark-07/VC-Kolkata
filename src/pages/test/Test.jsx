import axios from "axios"
import React from 'react'

const Test = () => {
    const fetchData = async () => {
        try {
            const payload = {
                email: JSON.parse(localStorage.getItem('token')).email,
                semester: 5,
                course: 'Honours'
              }
            const {data} = await axios.post('http://localhost/vc/fetch/videofetch.php', payload)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    
  return (
    <button onClick={fetchData}>Click</button>
  )
}

export default Test