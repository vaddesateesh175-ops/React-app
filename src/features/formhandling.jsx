import {useEffect} from "react";
import { Formik, useFormik } from "formik";

function StudentForm(){
    var studentForm=useFormik({
        firstname:"",
        lastname:"",
        gender:"",
        age:"",
    })
    return(<div>
        <h1>student form</h1>
         <form onSubmit={studentForm.handleSubmit}>
            firstname : <input type="text" {...studentForm.getFieldProps("firstname")} /> 
            <br />
            lastname : <input type="text" {...studentForm.getFieldProps("lastname")} />
            <br />
            gender :
            <input type="radio" {...studentForm.getFieldProps("gender")} value="m" />male
            <input type="radio" {...studentForm.getFieldProps("gender")} value="f" />female
            <input type="radio" {...studentForm.getFieldProps("gender")} value="o" />others
            <br/>
            age : <input type="text"  {...studentForm.getFieldProps("age")}/>
            <br/>
            <button type="submit">Show details</button>
         </form>

    </div>)
}
export  default StudentForm;