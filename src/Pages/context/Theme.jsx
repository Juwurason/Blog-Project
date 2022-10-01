import { createContext, useState, useContext } from "react"

const ThemeContext = createContext(null);
export {ThemeContext}

const Theme = ({children}) =>{
    
    const [theme, setTheme] = useState("light")
   
    const changeTheme = () =>{
        if (theme == "light") setTheme("dark")
        else setTheme("light")
    }

  return (
    <ThemeContext.Provider value={{theme, setTheme, changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
 export const useAuth = () => useContext(ThemeContext)

export default Theme