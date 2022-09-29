import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastWarnNotify } from "../../helpers/toastify";
import { createPost } from "./postSlice";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [values,setValues]=useState({
    title:"",
    body:""
  })
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post=useSelector((state)=>state.post.post)

  useEffect(() => {
    setValues({
      title:title,
      body:body,
    })
  }, [title,body])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && body){
      setValues({
      title:title,
      body:body,
    })
    dispatch(createPost({ values}));
    setTitle("");
    setBody("");
    setShow(true);
    toastSuccessNotify("New post created successfully")
    }else{
      toastWarnNotify("Please don't leave any fields blank")
    }
  };

  // console.log(post);

  return (
    <>
      <form className="container m-auto mt-9">
        <div className="flex flex-col justify-center items-center mt-3">
          <label htmlFor="title" className="font-bold text-xl text-red-600">
            TITLE
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-1 border-black w-full max-w-[30rem] mt-2 p-1"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-3">
          <label htmlFor="title" className="font-bold text-xl text-red-600">
            TEXT
          </label>
          <input
            id="text"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border border-1 border-black w-full max-w-[30rem] mt-2 p-1"
          />
        </div>
        <div className="flex justify-center items-center mt-7 gap-x-6 font-semibold">
          <button
            onClick={() => navigate("/")}
            className="bg-green-400 w-[6rem] py-1"
          >
            GO BACK
          </button>
          <button
            type="submit"
            className="bg-cyan-400 w-[6rem] py-1"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </form>
      { show &&
        <section className="mt-9 text-center">
          {
            post?.map((item)=>{
              const {title,body,id}=item
              return(
                <div key={id}>
                  <p className="font-bold capitalize">{title}</p>
                  <p className="capitalize">{body}</p>
                </div>
              )
            })
          }
       
        </section>
      }
    </>
  );
};

export default CreatePost;
