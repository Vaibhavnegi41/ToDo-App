import { useState } from "react"

const AddTaskModal = ({closeModel,setTodos})=>{

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    function addTodo(){
        if(!title.length){
            alert("please enter the title name");
            return;
        }
        if(!description.length){
            alert("please enter the your description ");
            return;
        }
        const newTodo={
            title,
            description,
            isCompleted:false,
            id: Date.now()
        }
        let newTodos;
        setTodos((prev)=>{
            newTodos= [newTodo, ...prev]
            return newTodos;
        })
        localStorage.setItem("todosList",JSON.stringify(newTodos));
        closeModel();
    }
    return(
        <div onClick={closeModel} className="fixed top-0 left-0 w-full h-full bg-black/ backdrop-blur-sm flex justify-center items-center">

            <div onClick={(e)=>{e.stopPropagation()}} className="h-[60vh] w-[500px] relative bg-[#4F959D] flex flex-col gap-5 rounded-md p-10">

                <button className="h-5 w-5  border border-black bg-white absolute -top-2 -right-2 pb-6 " onClick={closeModel}>X</button>

                <input value={title} onInput={(e)=>setTitle(e.target.value)} className="h-[10vh] w-full pl-5 rounded-md" type="text" placeholder="Enter new title.."/>

                <textarea  value={description} onInput={(e)=>setDescription(e.target.value)} placeholder="Add a description" className="w-full h-full pl-5 pt-5 max-h-full"/>

                <button onClick={addTodo} className="bg-[#205781] text-white py-2">Add Task</button>

            </div>

        </div>
    )
}

export default AddTaskModal