import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateBlog = () => {
    const location = useLocation();
  const { redirect } = location.state;

  const [title, setTitle] = useState(redirect.title)
    const [content, setContent] = useState(redirect.content)
    const [snippet, setSnippet] = useState(redirect.snippet)
    const [error,setError] = useState(null)

    const navigate = useNavigate();

    const formSubmit = async (e)=>{
        e.preventDefault()
        const blog = {title,snippet,content}

        const response = await fetch('/blogs/'+redirect._id,{
            method:'PATCH',
            body: JSON.stringify(blog),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (response.ok){
            setTitle('')
            setSnippet('')
            setContent('')
            setError(null)
            alert('Blog updated!')
        }else{
            setError(json.error)
        }
        navigate("/");

    }
    return ( 
        <div className="Newblog">
             <h4><u>Update Blog</u></h4>
             <form onSubmit={formSubmit}>
                <label >Title:</label><br />
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/><br /><br />
                <label >Snippet:</label><br />
                <textarea name="" id="" cols="40" rows="6" onChange={(e)=>setSnippet(e.target.value)} value={snippet}></textarea><br />
                <label >Content:</label><br />
                <textarea name="" id="" cols="50" rows="9" onChange={(e)=>setContent(e.target.value)} value={content}></textarea><br />
                <button>Update</button>
            </form>
        </div>
     );
}
 
export default UpdateBlog;