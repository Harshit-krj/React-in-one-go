import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export default function Github() {
    // const [data,setdata]=useState(null);
    const data=useLoaderData();
    useEffect(()=>{
        fetch("https://api.github.com/users/harshit-krj")
        .then((res)=>res.json())
        .then((res)=>{
            setdata(res);
        })
    },[])

  return (
    <div className="bg-gray-600 mx-10 p-10">
    <div  className="text-center text-white text-7xl">Github Profile</div>
     {data ? (
        <>
          <div className="text-white text-center text-5xl">{data.login}</div>
          <img src={data.avatar_url} alt="avatar"  className="mx-auto mt-6 rounded-full w-80" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
export const loaderdata=async ()=>{
  const res=await fetch("https://api.github.com/users/harshit-krj")
  return res.json();
}
