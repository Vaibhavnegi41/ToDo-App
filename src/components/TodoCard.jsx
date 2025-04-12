const TodoCard = ({todo,setTodos})=>{
    
    function toggleCompleted(){
        setTodos((prev)=>{
            const newTodos=prev.map((item)=>{
                if(item.id === todo.id){
                    return {
                        ...item,
                        isCompleted: !item.isCompleted,
                    };
                }
                
                
                return item;
            })
            return newTodos;
        })
    }

    const {title, description,isCompleted}=todo;

    return(
        <div className="h-[360px] w-[360px] text-white bg-[#4F959D] rounded-[20px] p-6 flex flex-col gap-10">

            <div className=" flex justify-between">

            <h3 className="font-semibold">{title}</h3>
            
            <button onClick={toggleCompleted}>
            {isCompleted?"❤️":<div className="w-4 h-4 border border-black rounded-sm"></div>}
            </button>
            </div>

            <div className="h-[200px] w-[310px] bg-[#F6F8D5] rounded-[18px] ">
            <p className=" ml-4 text-black p-4 mr-5 mt-10 text-1xl font-serif text-lg">{description}</p>
            </div>

        </div>
    )
}

export default TodoCard;    