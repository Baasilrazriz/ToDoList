"use client";
import React, { useState } from "react";

const page = () => {
  const [title, SetTitle] = useState("");
  const [Description, SetDescription] = useState(
    ""
  );
  const [mainTask, setmainTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();

    setmainTask([...mainTask, { title, Description }]);
    SetTitle("");
    SetDescription("");
    console.log(mainTask);
  };
  
const deleteHandler=(i)=>{
  let copytask=[...mainTask]
  copytask.splice(i ,1 )
  setmainTask(copytask)

}

  let renderTask = <h1>No Tasks Available</h1>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
          
        <li className="border-slate-800 bg-white border-4 rounded-lg flex md:flex-row flex-col items-center justify-between mb-5 p-5 gap-10">
          <div className=" w-auto h-auto flex flex-col md:flex-row flex-grow md:flex-nowrap flex-wrap  justify-between  md:w-2/3 gap-10 overflow-hidden">
            <div className="grid place-content-center border-2 border-teal-500 rounded-lg   text-black h-auto md:w-1/4 w-full  text-3xl font-bold text-center p-2">
              {t.title}
            </div>

            <div className="grid place-content-center border-2 border-teal-500 rounded-lg bg-red-400 text-black h-auto w-full md:w-3/4 text-lg font-medium text-left p-2 overflow-hidden">
              {t.Description}
            </div>
          </div>
         <div className=" w-full h-auto md:w-1/3 grid md:place-content-end place-content-center">
         <button
            onClick={()=>{
              deleteHandler(i)
            }}
            className="bg-red-600 text-white px-4 py-3   border-red-900 border-2 hover:border-red-800 hover:bg-red-500 hover:text-white rounded-md  ease-in-out transition-all font-bold text-2xl"
            >
            Delete
          </button>
         </div>
        </li>
          
      );
    });
  }

  return (
    <>
      <div className=" ">
      <div className=""> 
      <form onSubmit={submithandler} className="">
         <div className="md:flex my-5 ">
         <div className="grid md:flex md:place-content-start place-content-center">
          <input
            type="text"
            className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md"
            placeholder="Enter Task Here"
            value={title}
            onChange={(e) => {
              SetTitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md"
            placeholder="Enter Description Here"
            value={Description}
            onChange={(e) => {

              SetDescription(e.target.value);

            }}
          />
          </div>
          <div className="grid place-content-center">
          <button className="bg-black text-2xl px-4 md:px-8 py-3 text-white border-gray-500 border-2 hover:border-black hover:bg-gray-300 hover:text-black rounded-md  ease-in-out transition-all font-bold">
            Add Task
          </button>
          </div>
         </div>
        </form>
      
      </div>
        <hr />
        <div className="bg-slate-200 p-8">
        <div className="grid place-content-end   text-black h-auto w-full  text-3xl font-bold text-center p-2 mb-5">Tasks left for the day: {mainTask.length}</div>
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
