import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

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
       <button
         onClick={toggleTheme}
         className="bg-amber-500 p-2 rounded-full hover:bg-amber-600 transition-colors duration-200 flex items-center justify-center shadow-md text-lg">
         {theme === 'dark' ? (
           <FaMoon className="text-gray-300 hover:text-white" />
         ) : (
           <FaSun className="text-gray-300 hover:text-white" />
         )}
     </button>
     </nav>
   </div>
 );
}

export default Navbar
