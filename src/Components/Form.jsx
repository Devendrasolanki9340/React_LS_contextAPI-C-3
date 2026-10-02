import { useForm } from 'react-hook-form';
// import { useState } from 'react';
import { nanoid } from 'nanoid'


const Form = ({setUsers,setToggle ,users,updatedData}) => {

    

    let{
        register,
        handleSubmit,
        reset,
        formState:{errors},
    } = useForm({ 
        mode:"onChange",
        defaultValues: updatedData,
    }) 
    
    let formSubmit = (data)=>{
        // console.log(data);
        if(updatedData){

          setUsers((prev)=>{
            return prev.map((val)=>{
              return val.id === updatedData.id ? {...data} : val 
            })
          })


        }else{
           let arr = [...(users || []), {...data,id:nanoid()}]
        setUsers(arr)
        localStorage.setItem("users",JSON.stringify(arr))
        }
        reset()
        setToggle((prev)=> !prev)
    }
    
    
    return (
    <div className="flex  items-center flex-col gap-3 ">
      <h1 className="text-xl font-bold">Create User</h1>
      <form 
      onSubmit={handleSubmit(formSubmit)}
      className=" h-70 w-90 flex border-2 bg-black flex-col gap-3 rounded border border-white">
        <input
          {...register("name",{ 
            required:"Name is required",
            pattern:{
                 value:/^\S.*$/ ,
            message:"Blank spaces is not allowed"
            }
           })}
          className="p-2 rounded outline-0 border border-white "
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className='text-red-500 '>{errors.name.message}</p>}

        <input
          {...register("email",{ 
            required:"Email is required",
            pattern:{
             value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
             message:"Please enter  valid email"
            }
           })} 
          className="p-2 rounded outline-0 border border-white "
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}

        <input
          {...register("mobile", { 
            required:"Mobile is required",
            minLength:{
                value:10,
                message:"Minimum 10 digits are required",
            },
            maxLength:{
                value:10,
                message:"Maximum 10 digits are required",
            }
           })}
          className="p-2 rounded outline-0 border border-white "
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && <p className='text-red-500 text-sm'>{errors.mobile.message}</p>}
        <input
          {...register("image", { 
            required:"Image is required"
           })}
          className="p-2 rounded outline-0 border border-white "
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className='text-red-500 text-sm'>{errors.image.message}</p>}
        <button className="text-white bg-blue-700 p-2 rounded-2xl cursor-pointer">Add User</button>
      </form>
    </div>
  );
};

export default Form;
