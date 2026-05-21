import React from 'react'
import {useFormik} from 'formik'
import { useLoginMutation } from '../../services/userApi.js';
import { useDispatch } from 'react-redux';
import { upadateUser } from './userSlice.js';
import { useNavigate } from 'react-router-dom';


function Login() {
    var[loginFn] = useLoginMutation();
    var dispatch = useDispatch();
    var navigate = useNavigate();
    const loginForm= useFormik({
        initialValues:{username:"",password:""},
        onSubmit:(values)=>{
            loginFn(values).then((res)=>{
                dispatch(upadateUser(res.data));
                navigate("/");
                window.localStorage.setItem("token",res.data.token);
                window.localStorage.setItem("username",res.data.username);
            });
        },
    });
    // localStorage.setItem("username",
    //     res.data.username
    // );

  return (
    <div className="login-container">

        <h1>Login</h1>
        <form onSubmit={loginForm.handleSubmit}>
            <input type="text" {...loginForm.getFieldProps("username")} placeholder="Username" />
            <input type="password" {...loginForm.getFieldProps("password")} placeholder="Password" />
            <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}

export default Login;