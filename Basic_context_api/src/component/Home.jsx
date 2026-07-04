import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/Usercontext';

function Home() {
    const [User, setUser] = useState("");
    const [password, setpassword] = useState("")
    const {setdata}=useContext(UserContext);
    const handlesubmit=(e)=>{
        e.preventDefault();
        setdata({User,password});
    }
  return (
    <>
    <input type="text" value={User} onChange={(e)=>{setUser(e.target.value)}} />
    <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
    <button type='submit' onClick={handlesubmit}>Submit</button>
    </>
  )
}
export default Home