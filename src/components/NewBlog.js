import { useState } from "react";
import { useNavigate } from "react-router";

const NewBlog = () => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [snippet, setSnippet] = useState('')
    const [error,setError] = useState(null)
    const navigate = useNavigate();

    const formSubmit = async (e)=>{
        e.preventDefault()

        const blog = {title,snippet,content}

        const response = await fetch('/blogs',{
            method:'POST',
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
            alert('New Blog added!')
            navigate("/")
        }else{
            setError(json.error)
        }

    }

    return (
         <div className="Newblog">
             <h4><u>Create new blog</u></h4>
             <form onSubmit={formSubmit}>
                <label >Title:</label><br />
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/><br /><br />
                <label >Snippet:</label><br />
                <textarea name="snippet" id="snippet" style={{height: '30vh'}} onChange={(e)=>setSnippet(e.target.value)} value={snippet}></textarea><br />
                <label >Content:</label><br />
                <textarea name="content" id="content" style={{height: '60vh'}}  onChange={(e)=>setContent(e.target.value)} value={content}></textarea><br />
                <button>Create</button>
            </form>
        </div>

     );
}
 
export default NewBlog;