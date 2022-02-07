import React,{useState,useEffect} from "react";
import axios from "axios";
function DataFetching(){
    const [data,setData] = useState(null);
    const [timeline,setTimeline] = useState("posts");
    const [id,setId] = useState(null);
    useEffect(async ()=> {
        let data = null;
        data = timeline === "posts" ? await axios.get("https://jsonplaceholder.typicode.com/posts"):
        timeline === "singlePost" ? await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        :null;
        setData(data.data);
    },[id,timeline]);
    const handleClick=(id)=> {
        setId(id);
        setTimeline("singlePost");
    }
    return (
        <ul>
            <button onClick={()=> {
                setTimeline("posts");
            }}>
                Show All
            </button>

            {
                data &&  data.length>=1 && data.map(post=> {
                    return <li key={post.id} onClick={()=>handleClick(post.id)}>{post.title}</li>
                })
            }
            {
                data && <li>{data.title}</li>
            }
        </ul>
    )
}
export default DataFetching;