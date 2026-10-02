const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4  rounded flex items-center bg-amber-600 justify-between">
      <div>
        <img
          className="rounded-full"
          width={40}
          src="https://th.bing.com/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          alt=""
        />
      </div>
      <div className="flex gap-6 font-semibold ">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button 
        type="button"
      onClick={()=> setToggle((prev)=> !prev)}
      className="p-2 bg-blue-700 text-white cursor-pointer rounded ">
        Create user
      </button>
    </div>
  );
};

export default Navbar;
