"use client"
import { useState } from "react"

const Login = () =>{
    const [email,setEmail] = useState()

    const loginData = ()=>{
        e.preventDefault()
    }
    return(
        <>
            <form onChange={loginData}>
                <h1>Login form</h1>
            </form>
        </>
    )
}

export default Login