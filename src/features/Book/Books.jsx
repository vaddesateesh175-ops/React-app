import React,{useState,useEffect} from 'react'

function Books() {
    var [books,setBooks]=useState([]);
    const username=localStorage.getItem("username")
    // var [selectedBook,setSelectedBook]=useState([])
    useEffect(()=>{
        fetch(" https://twb2-server-2.onrender.com",{
            headers:{
                 token:window.localStorage.getItem("token"),
            }
        }).then(res=>res.json()).then(data=>{
            setBooks(data);
        })
    },[]);
    
    const addbook=(book)=>{

                    fetch("https://twb2-server-2.onrender.com/addbook",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
               username: username,
               booktitle:book.title,
               author:book.author,

            })

        })
        .then(res=>res.json())
        .then(data => {
            if(data.msg === "Book is not available"){
                alert("Book is already taken by another user");
            }
            else{
                alert("Book added successfully");
            }
        })

    }
    
  return (
    <div>
        <h1>BOOKS</h1>
        <ul>
            {
                books?.map((book,i)=>{
                    return(<li>
                        <div style={{display:'flex', alignItems:'center',gap:'20px'}}>
                            <h3>{book.title}</h3>
                            <button onClick={()=>{addbook(book)}}>Add Book</button>  
                        </div>
                        <b>Author Name:{book.author}</b>
                    </li>)
                })
            }
        </ul>

    </div>
  )
}

export default Books