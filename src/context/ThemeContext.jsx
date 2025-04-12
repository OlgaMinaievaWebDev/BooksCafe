import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// Create a ThemeProvider component
const ThemeProvider = ({ children })=> {
 const [theme, setTheme] = useState('light')
 
 useEffect(() => {
  if (theme === 'dark') {
   document.documentElement.classList.add('dark');
   document.documentElement.style.colorScheme = 'dark';
  } else {
   document.documentElement.classList.remove('dark');
   document.documentElement.style.colorScheme = 'light';
  }
  },[theme])

 // Function to toggle the theme
 const toggleTheme = () => {
   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
 }

 return (
  <ThemeContext.Provider value={{theme, toggleTheme}}>
   {children}
  </ThemeContext.Provider>
 )
}
export { ThemeContext, ThemeProvider };