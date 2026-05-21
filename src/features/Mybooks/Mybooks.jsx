import React,{useState,useEffect} from 'react'

function Mybooks() {
    const [mybooks,setMybooks]=useState([]);
    const username = localStorage.getItem(
        "username"
    );
    useEffect(()=>{
        fetch(`http://localhost:5500/books/${username}`)
        .then(res=>res.json())
        .then(data=>{
            setMybooks(data)
        })
    },[])

    const deletebook=(id)=>{
        fetch(`http://localhost:5500/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            alert("Book returned successfully");
        })
    }


  return (
    <div>
        <h1>My Books</h1>
        {
            mybooks?.map((book)=>{
                return(<li>
                    <div style={{display:'flex', alignItems:'center',gap:'20px'}}>
                        <h3>{book.booktitle}</h3>
                        <button onClick={()=>{deletebook(book._id)}}>Return Book</button>
                    </div>
                    <p>Author Name:{book.author}</p>
                </li>)
            })
        }
        
    </div>
  )
}

export default Mybooks