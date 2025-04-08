import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar";

function Navbar() {
 return (
   <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
     <h1 className="text-2xl font-bold">BooksCafe</h1>
    
   <SearchBar/>
     <nav>
       <NavLink to="/" className="mr-4 text-gray-300 hover:text-white">
         Home
       </NavLink>
       <NavLink to="cabinet" className="mr-4 text-gray-300 hover:text-white">
         Cabinet
       </NavLink>
       <NavLink to="auth/login/sighup" className="mr-4 text-gray-300 hover:text-white">
         Login/Signup
       </NavLink>
       <NavLink to="/logout" className="mr-4 text-gray-300 hover:text-white">
         Logout
       </NavLink>
     <button>Dark/light</button>
     </nav>
   </div>
 );
}

export default Navbar
