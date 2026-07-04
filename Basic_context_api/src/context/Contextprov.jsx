import React, { useState } from 'react'
import UserContext from './Usercontext'

export default function Contextprov({children}) {
    const [data,setdata]=useState(null);
  return (
    <UserContext.Provider value={{data,setdata}}>
        {children}
    </UserContext.Provider>
  )
}
