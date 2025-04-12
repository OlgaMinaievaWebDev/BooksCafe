import { createContext, useState } from "react";

const ThemeContext = createContext();

// Create a custom hook to use the ThemeContext
const ThemeProvider = ({ children })=> {
 const [theme, setTheme] = useState('light')
 
 const toggleTheme = () => {
   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
 }
 const value = { theme, toggleTheme };



 return (
  <ThemeContext.Provider value={{}}>
   {children}
  </ThemeContext.Provider>
 )
}
export { ThemeContext, ThemeProvider };