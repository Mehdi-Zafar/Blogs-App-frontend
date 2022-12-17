import Moment from 'moment'; 
import { Link } from 'react-router-dom';
import { BlogContext } from "../context/BlogContext";
import { useContext } from 'react';
const Bloglist = ({blog}) => {

    const {blogs,setBlogs} = useContext(BlogContext)
    const del = async ()=>{
        if(window.confirm('Are you sure?')){
            const response = await fetch('/blogs/'+blog._id,{
                method:'DELETE'
            })
    
            const json = await response.json()
            if(response.ok){
                alert("Blog Deleted!")
                setBlogs(prev=>prev.filter(blog=>blog._id !== json._id))
            }
        }
        
    }

    // const singleblog = async ()=>{
    //     const url = '/blogs/'+blog._id;
    //     const response = await fetch(url)
    //     const json = await response.json()
    //     if(response.ok){
    //         console.log(json)
    //     }
    // }

    return ( 
            <div className="blog-template">
                <h1>{ blog.title }</h1>
                <p>{ blog.snippet }</p>
                {/* <h4 className="blog-content">{blog.content}</h4> */}
                <Link to={`${blog._id}`} state={{redirect:blog}}><button className="read-blog" >Read Blog</button></Link>
                <button className="deletebtn" onClick={del} title="Delete blog"><i class="bi bi-trash-fill"></i></button>
                <Link to="/update-blog" state={{redirect:blog}}><button className="editbtn" title="Edit blog"><i class="bi bi-pencil-fill"></i></button></Link>
                <p><strong>Created at: {Moment(blog.createdAt).format('MMM Do YY')}</strong></p>
            </div>
     );
}
 
export default Bloglist;