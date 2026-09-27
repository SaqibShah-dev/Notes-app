import React, { useState } from "react";
import axios from "axios"

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const prevTask = [...task];
    prevTask.push({ title, details });
    setTask(prevTask);
    setTitle("");
    setDetails("");
  };

  const deleteNode = (idx)=>{
    const prevTask = [...task];
    prevTask.splice(idx,1);
    setTask(prevTask);
    
  }

  // const getData = async ()=> {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(res);
    
  // }


  // localStorage.setItem('user','sarthak');
  // localStorage.setItem('age',18);
  // const user = localStorage.getItem('user');
  // const age = localStorage.getItem('age')
  // console.log(' user ',user  , '   age ',age);
  // localStorage.removeItem('user');
  // localStorage.removeItem('age');
  
  // localStorage.clear();
  // sessionStorage.clear();

  // const user = {
  //   username: 'sarthak',
  //   age : 18,
  //   city : 'rwp'
  // }
  // localStorage.setItem('user',JSON.stringify(user));
  // const users = JSON.parse(localStorage.getItem('user'));
  // console.log(users);
  
  return (
    <div className="h-screen lg:flex bg-black text-white lg:overflow-hidden">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 flex-col font-medium items-start  p-10"
      >
        <h1 className="text-xl font-bold">Add Notes</h1>
        <input
          className="px-5 w-full py-2 border-2 rounded"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="flex px-5 w-full h-32 py-2 items-start flex-row border-2 rounded"
          type="text"
          placeholder="Enter details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="w-full bg-white text-black px-5 py-2 rounded active:bg-gray-300">
          Add Notes
        </button>
      </form>
      <div className="bg-black lg:border-l-2 lg:w-1/2 p-10">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-6 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col relative items-start h-52 w-40 bg-cover rounded-xl text-black p-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx21K4CCoCFHUwbMBoILw5Zus6YhymzbcBrA&s')]"
              >
                <h3 className="leading-tight text-xl fondt-bold">
                  {elem.title}
                </h3>
                <p className="mt-2 leading-tight font-medium">{elem.details}</p>
                <button onClick={()=>{
                  deleteNode(idx);
                }} className="w-full bg-red-400 cursor-pointer active:scale-90 py-1 text-xs rounded font-bold text-white">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
