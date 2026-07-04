import { useParams } from "react-router-dom"

function User() {
    const {id}=useParams();
  return (
    <div className="bg-gray-400 text-5xl p-4 mx-100 text-center">User {id}</div>
  )
}

export default User;