import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

function Footer() {
    const {data}=useContext(UserContext);
  if(data){
    return( <div>hello {data.User}</div>)
  }
  else{
    return(<div>please log in first</div>)
  }
}

export default Footer