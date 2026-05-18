import { useFormik } from 'formik';
import React,{useEffect} from 'react'

function Photos() {
  var [photos,setPhotos]=React.useState([]);
  useEffect(()=>{
    fetch("http://localhost:5500/photos",{
      headers:{
        token:window.localStorage.getItem("token"),
      }
    }).then(res=>res.json()).then(data=>{
      setPhotos(data);
    })
  },[])


  var photoform=useFormik({
    initialValues:{
      photo:"",
    },
    onSubmit:(values)=>{
      console.log(values);
      var fd=new FormData();
      fd.append("photo",values.photo);
      fetch("http://localhost:5500/uploadPhoto",{
        method:"POST",
        headers:{
          token:window.localStorage.getItem("token"),
        },
        body:fd,
      }).then(res=>res.json()).then(data=>{
        console.log(data);
      })
    }
  })
  return (
    <div>
      <h1>Photos</h1>
      <form onSubmit={photoform.handleSubmit} encType='multipart/form-data'>
        <input type="file" name='photo'   onChange={(ev) => {
            photoform.setFieldValue("photo", ev.currentTarget.files[0]);
          }} />
        <button>Upload</button>
      </form>
      <ul>
        {
          photos?.map((photo)=>{
            return <li>
               <img src={"http://localhost:5500/"+photo.photoUrl} width="200" />
            </li>
          })
        }


      </ul>
    </div>
  )
}

export default Photos