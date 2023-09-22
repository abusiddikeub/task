
import { useState } from "react";

import { useEffect } from 'react';
import { useForm } from "react-hook-form";

const TodoList =()=> {
  const [Items, setItems] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    setItems(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(Items));
  }, [Items]);

  const addTask = () => {
    if (todoItem.trim() !== '') {
      setItems([...Items, todoItem]);
      setTodoItem('');
    }
  };



  // --------------
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
        <div>
      <h2 className="text-center text-5xl mt-5 mb-10">To-Do List with</h2>
      <input
      className="p-5 border rounded-sm"
        type="text"
        placeholder="Add a task..."
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button className="btn btn-success ms-5" onClick={addTask}>Add</button>
      <ul>
        {Items.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      </div> 
   

     <div>
     <button className="btn mt-20" onClick={()=>document.getElementById('my_modal_5').showModal()}>Task</button>
 <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
   <div className="modal-box">
   
     <div className="modal-action"> 

      <form method="dialog" onSubmit={handleSubmit(onSubmit)} className=" p-10">
         {errors.exampleRequired && <span></span>}
         <input
          className="text-input"
          {...register("title", {required:true, maxLength: 99})}
          placeholder="Title"
         />

         <br />

 <input
           className="text-input"
           {...register("description", {required:true, maxLength: 150})}
           placeholder="Description"         />

         <br />

 <input           className="text-input"
           {...register("start")} required
          placeholder="Start"
          type="date"
        /> start
        <br />
 <input
          className="text-input"
           {...register("end")} required
           placeholder="Start"           type="date"
        /> end

 <br />

        <input
          className="text-input border border-red-500"
          {...register("file")}
           placeholder="image link"
          type="file"
                
         />
 <br />

 <select className="text-input" {...register("status")} required  >
          <option value="person1">person1</option>
          <option value="person2">person2</option>
          <option value="person3">person3</option>
         </select>
      
 <br />

           <input className="mt-3 bg-purple-800 text-white p-2 w-1/2 hover:bg-orange-600 rounded-xl"
           value="Submit "
          type="submit"
        />
      {/* </form> */}
        
      <form method="dialog">
     
     <button className="btn">Close</button>
   </form>
       </form>

      
    </div> 
    </div>
</dialog>

       <div>
 
    </div> 
  
     </div>
    </>
  )}
export default TodoList;






