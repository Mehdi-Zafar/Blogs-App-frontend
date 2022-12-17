import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import Moment from 'moment'; 
import { Link } from "react-router-dom";

const ReadBlog = () => {
    
    const location = useLocation();
  const { redirect } = location.state;
  const navigate = useNavigate();

  const del = async ()=>{
    if(window.confirm('Are you sure?')){
        const response = await fetch('/blogs/'+redirect._id,{
            method:'DELETE'
        })

        const json = await response.json()
        if(response.ok){
            alert("Blog Deleted!")
            navigate("/");
        }
    }
    
}


    return ( 
        <div className="single-blog">
            <h1>{redirect.title}</h1>
            <p>{redirect.snippet}</p>
            <h4>{redirect.content}</h4>
            <button className="deletebtn" onClick={del} title="Delete blog"><i class="bi bi-trash-fill"></i></button>
            <Link to="/update-blog" state={{redirect:redirect}}><button className="editbtn" title="Edit blog"><i class="bi bi-pencil-fill"></i></button></Link>
            <div className="blog-dates">
                <p><strong>Created at: {Moment(redirect.createdAt).format('MMM Do YY')}</strong></p>
                <p><strong>Updated at: {Moment(redirect.updatedAt).format('MMM Do YY')}</strong></p>
            </div>
        </div>
     );
}
 
export default ReadBlog;