import { createContext, useContext } from "react";
export const ThemeContext=createContext({
    theme:"light",
    darktheme:()=>{},
    lightheme: ()=>{}
});
export const Provider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}