import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost, deletePost, editItem,updatePost } from "./postSlice";

const UserPost = () => {
  const [id, setId] = useState("");
  const [bodyText, setBodyText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);
  const edit = useSelector((state) => state.post.edit);
  const body = useSelector((state) => state.post.body);
  console.log(post);
  console.log(body);


  const fetchUserPost = () => {
    if (id) {
      dispatch(getPost(id));
    }
    setId("");
  };
  useEffect(() => {
    setBodyText(body);
  }, [body]);

  return (
    <>
      {!loading ? (
        <div className="container m-auto">
          <h1 className="text-3xl font-bold text-blue-700 text-center my-3">
            FETCH POST
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="border border-1 border-black w-full max-w-[30rem] p-1"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4  font-bold">
            <button
              onClick={fetchUserPost}
              className="bg-green-300 py-1  w-[10rem] mt-3"
            >
              Feth User Post
            </button>
            <button
              onClick={() => navigate("/create")}
              className="bg-blue-300 py-1 w-[10rem] mt-3"
            >
              Create User Post
            </button>
          </div>
          <section className="mt-9 text-center">
            <p className="font-bold capitalize">{post[0]?.title}</p>
            {!edit ? (
              <p className="capitalize">{post[0]?.body}</p>
            ) : (
              <div>
                <textarea
                  type="text"
                  className="border border-1 border-black w-full h-[5rem] resize-none mt-3 "
                  value={bodyText}
                  onChange={(e) => setBodyText(e.target.value)}
                />
                <div className="flex gap-x-4 justify-center items-center mt-2 font-semibold">
                    <button className="bg-teal-400 w-[5rem] py-1 "  onClick={() =>{
                  dispatch(
                    updatePost({
                         id:post[0].id,
                         title:post[0].title,
                         body:bodyText })
                         );
                  dispatch(
                    editItem({ edit: false, body: bodyText })
                    );
                    }}
              >SAVE</button>
                    <button className="bg-slate-400 w-[5rem] py-1 "  onClick={() =>
                  dispatch(editItem({ edit: false, body: bodyText }))
                }
              >CANCEL</button>
                </div>
              </div>
            )}
          </section>
          {!edit && post[0]?.title && (
            <aside className="flex gap-x-4 justify-end md:px-12 mt-4 font-semibold">
              <button
                className="bg-red-400 w-[5rem] rounded-md"
                onClick={() => dispatch(deletePost(id))}
              >
                DELETE
              </button>
              <button
                className="bg-emerald-400 w-[5rem] rounded-md"
                onClick={() =>
                  dispatch(editItem({ edit: true, body: post[0]?.body }))
                }
              >
                EDIT
              </button>
            </aside>
          )}
        </div>
      ) : (
        <h1>LOADING</h1>
      )}
    </>
  );
};

export default UserPost;
 