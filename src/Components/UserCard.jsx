

const UserCard = ({user,setToggle,deleteUser,ind,setUpdatedData}) => {
  return (
    <div className=" p-4 border border-white bg-black rounded ">
    <div className=" h-30 w-30 rounded overflow-hidden" >
       <img src={user.image} alt={user.name || "User image"} className="w-full h-full object-cover rounded-xl" />
    </div>
    <div>
        <h1 className="flex flex-col gap-1">{user.name}</h1>
    <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.contact}</p>
    </div>
    <div className="">
    <button 
     onClick={()=>{
      setUpdatedData(user)
      setToggle(prev=>!prev)}}
     className="bg-yellow-700  text-white py-1 px-2 rounded-xl ">Update</button>

    <button 
     onClick={()=>deleteUser(ind)}
    className="bg-red-700 text-white py-1 px-2 rounded-xl ">Delete</button>
    </div>
    </div>
  )
}

export default UserCard
