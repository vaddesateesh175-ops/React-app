import {useEffect} from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function StudentForm(){
    var studentForm=useFormik({
        initialValues: {
          firstname: "",
         lastname: "",
         gender:"",
        age: "",
    },
     validationSchema: Yup.object({
            firstname: Yup.string()
              .required("First name is Mandatory")
              .min(3)
              .matches(/^[a-zA-Z]+$/, "first name sarigga ivvu"),

            age:Yup.number().test((a,ctx)=>{
                console.log(ctx)
                if(a>=25){
                    return true;
                }
                else{
                    if(ctx.parent.gender==="m" && a<25){
                        return ctx.createError({message:"Arey neeku pellendura nadu,,, "});

                    }
                     if(ctx.parent.gender==="f" && a<21){
                        return ctx.createError({message:"Oyee neeku pellendura nadu,,, "});

                    }
                    else {
                      return true;
                    }

                }
            }),
            
     }),
     onSubmit: () => {
      console.log(studentForm.values);
    },
     
    })
    useEffect(()=>{
        studentForm.setValues({
             firstname: "sateesh",
         lastname: "vadde",
         gender:"m",
         age: "19",
        })
        
    },[])
    return(<div>
        <h1>student form</h1>
        <p>{JSON.stringify(studentForm)}</p>
        {/* <p>{JSON.stringify(studentForm.getFieldProps("gender")?.value)}</p> */}
         <form onSubmit={studentForm.handleSubmit}>
            firstname : <input type="text" {...studentForm.getFieldProps("firstname")} /> 
            <b>
                {studentForm.touched.firstname && studentForm?.errors?.firstname &&(
                    <>
                     <br />
                        <b>{studentForm?.errors.firstname}</b>
                     </>
                )}
            </b>
            <br />
            lastname : <input type="text" {...studentForm.getFieldProps("lastname")} />
            
            <br />
            gender :
            <input type="radio" {...studentForm.getFieldProps("gender")} value="m" 
            checked={studentForm.getFieldProps("gender")?.value == "m"} />male

            <input type="radio" {...studentForm.getFieldProps("gender")} value="f" />female
            <input type="radio" {...studentForm.getFieldProps("gender")} value="o" />others
            <br/>
            age : <input type="text"  {...studentForm.getFieldProps("age")}/>
             <b>
            
                 {studentForm?.touched.age && studentForm?.errors?.age && (
                    <>
                    <br />
                       <b>
                          {studentForm?.errors.age}
                        </b>
                    </>
                  
                   )}
                
              
             </b>

            <br/>
            <button type="submit">Show details</button>
         </form>

    </div>)
}
export  default StudentForm;