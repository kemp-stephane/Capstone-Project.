import * as React from 'react';
import './Actions.css'

import { useNavigate } from 'react-router-dom';

export default function Actions({ id }) {

    const navigator = useNavigate()


    const handleUpdate = () => {
        console.log(id);
        navigator("/update/"+id)
    }

    const handleDelete = async () => {
        console.log(id);
        const res = await fetch("http://localhost:5000/api/blog/delete/"+id, {
            method: "DELETE",
            headers: {
                token: localStorage.getItem("token")
            }
        })
        const data = await res.json();
        if(res.ok){
            alert("blog deleted")
        }else{
            console.log(data);
        }
    }

    return (
        <div className='btn'>
            <button onClick={() => {handleUpdate()}} className="button">Update</button>
            <button onClick={() => {handleDelete()}} className="button">Delete</button>
        </div>
    );
}