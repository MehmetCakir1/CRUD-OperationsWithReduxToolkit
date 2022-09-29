import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from './postSlice'


const CreatePost = () => {
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({title,body}))
    setTitle("")
    setBody("")
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='border border-1 border-black'/>
      <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} className='border border-1 border-black'/>
      <button onClick={()=>navigate(-1)}>GO BACK</button>
      <button>SUBMIT</button>


    </form>
    </>
  )
}

export default CreatePost