import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { getPost,deletePost } from './postSlice'

const UserPost = () => {
    const [id,setId]=useState("")
    const [bodytext,setBodyText]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const post=useSelector((state)=>state.post.post)
    const loading=useSelector((state)=>state.post.loading)
    const edit=useSelector((state)=>state.post.edit)
    // console.log(post);
    // console.log(loading);

    const fetchUserPost = ()=>{
        if(id){
            dispatch(getPost(id))
        }
        setId("")
    }

  return (
    <div>
        <h1 className='text-3xl font-bold text-blue-700 text-center my-3'>FETCH POST</h1>
        <div className='flex justify-center items-center'>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} className="border border-1 border-black w-full max-w-[30rem] p-1"/>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-x-4  font-bold'>
            <button onClick={fetchUserPost} className="bg-[orangered] py-1 w-[10rem] mt-3">Feth User Post</button>
            <button onClick={()=>navigate("/create")} className="bg-blue-300 py-1 w-[10rem] mt-3">Create User Post</button>
        </div>
        <section className='mt-5'>
            <p className='font-bold'>{post[0]?.title}</p>
            <p>{post[0]?.body}</p>
        </section>
        <aside>
            <button>DELETE</button>
            <button>EDIT</button>
        </aside>
    </div>
  )
}

export default UserPost