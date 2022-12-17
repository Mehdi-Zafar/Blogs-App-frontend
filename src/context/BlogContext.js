import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogContextProvider = ({children}) =>{

    const [blogs,setBlogs] = useState(null);


    return(
        <BlogContext.Provider value={{blogs,setBlogs}}>
            {children}
        </BlogContext.Provider>
    )
}