import { useState,useEffect,useContext } from "react";
import Bloglist from "./Bloglist"
import BeatLoader from "react-spinners/BeatLoader";
import { BlogContext } from "../context/BlogContext";

const Home = () => {
    
    const [loading,setLoading] = useState(false)
    const {blogs,setBlogs} = useContext(BlogContext)
    useEffect(()=>{
        const fetchBlogs = async () => {
            const response = await fetch('/blogs')
            const json = await response.json()
            if (response.ok){
                setLoading(false)
                setBlogs(json.blogs) 
            }
        }
        setLoading(true)
        fetchBlogs()
    },[])


    return ( 
        <div className="homeContent">
            {
                loading ?
                <div className="loader">
                <BeatLoader
                color={"black"}
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              </div>
              :
            
                <><h1>All Blogs</h1><div>
                        {blogs && blogs.map((blog) => (
                            <Bloglist key={blog._id} blog={blog} />
                        ))}
                    </div></>
            }
        </div>
     );
}
 
export default Home;