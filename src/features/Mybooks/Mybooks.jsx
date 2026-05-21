import React,{useState,useEffect} from 'react'

function Mybooks() {
    const [mybooks,setMybooks]=useState([]);
    const username = localStorage.getItem(
        "username"
    );
    useEffect(()=>{
        fetch(`https://twb2-server-3.onrender.com/books/${username}`)
        .then(res=>res.json())
        .then(data=>{
            setMybooks(data)
        })
    },[])

    const deletebook=(id)=>{
        fetch(`https://twb2-server-3.onrender.com/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            alert("Book returned successfully");
        })
    }


  return (
    <div className="mybooks-container">
        <h1>My Books</h1>
        {
            mybooks?.map((book)=>{
                return(<li className="book-card">
                    <div className="book-header">
                        <h3>{book.booktitle}</h3>
                        <button  className="return-btn" onClick={()=>{deletebook(book._id)}}>Return Book</button>
                    </div>
                    <p>Author Name:{book.author}</p>
                </li>)
            })
        }
        
    </div>
  )
}

export default Mybooks