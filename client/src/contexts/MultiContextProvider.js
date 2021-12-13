import { AuthProvider } from "./AuthContext";
import { CreateProvider } from "./CreateContext";
import { createContext } from "react";

export const MultiContext = createContext(null);
export const  MultiContextProvider = (props) => {

    return(
     
            <MultiContext.Provider value={{ authContext:AuthProvider,createContext:CreateProvider}}>
                {props.children}
            </MultiContext.Provider>
        
    )
}