import TodoCard from "./TodoCard"
const TodoSection=({openTheModal,todos,setTodos})=>{
    
    return(
        <div className="min-h-[562px] bg-[#98D2C0] p-8 flex flex-col items-center gap-4">

            <h2 className="text-center  text-2xl font-semibold">TODO</h2>

            <button  onClick={openTheModal} className=" h-10 w-30 border border-black/10 bg-[#205781] text-white px-5 rounded-md">Create Task</button>
            <div className="flex gap-20 m-20 flex-wrap justify-center">

                {todos.length<=0 && <p className="text-2xl ">The Task list is empty !</p>}
                
                {todos.map(todo=>{
                    if(!todo.isCompleted)
                    return <TodoCard key={todo.id} todo={todo} setTodos={setTodos}/>
                })}
                {todos.map(todo=>{
                    if(todo.isCompleted)
                    return <TodoCard key={todo.id} todo={todo} setTodos={setTodos}/>
                })}

            </div>

        </div>
    )
}
export default TodoSection