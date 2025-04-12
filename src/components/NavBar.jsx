const NavBar =()=>{
    return(
        <div className="h-16 p-10 bg-[#205781] flex justify-between gap-8 items-center">
            <div className="h-12 w-12 flex gap-4 justify-start rounded-full bg-[#67AE6E]">
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYx9JcCXKpk_cehUreEfu3gsjAFrNR8y96w&s"
          alt="image 1"
          className="h-full w-full object-cover rounded-full"
        />
        <p className="font-semibold text-white">ToDo App</p>
            </div>
            
            <div className="font-semibold text-white flex gap-8">
            <p className="text-xs">HOME</p>
            <p className="text-xs">TASKS</p>
            
            <p className="text-xs">ABOUT US</p>
            </div>
        </div>
    )
}
export default NavBar;
