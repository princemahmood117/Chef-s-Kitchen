const Nav = () => {
  return (
    <nav className="mx-auto p-4">
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
            </div>
            
          </div>
          <a className="btn btn-ghost text-3xl">Recipe Calories</a>
        </div>
        <div className="navbar lg:flex">
          <ul className="menu menu-horizontal text-xl hidden md:hidden lg:flex">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>

        <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search"  className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="./avatar-green.png" alt="avatar" />
        </div>
      </div>
      <ul tabindex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
      </div>
    </nav>



);


  
};

export default Nav;
