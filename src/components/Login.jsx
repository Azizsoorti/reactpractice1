import React, { useState } from 'react'

function Login() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  
    const [allEntry, setAllEntry] = useState();
    const submitForm = (e) => {
        e.preventDefault();
        var newEntry = {
            name: name,
            email: email,
            password: password
        }
        console.log(newEntry);
    }

    return (
        <div style={{
            width: "350px", height: "400px", backgroundColor: "white", borderRadius: "20px", margin: "100px auto",
            boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"

        }}>

            <h1 style={{ marginBottom: "20px", textAlign: "center" }} >Login Form</h1>
            <form onSubmit={(e) => { submitForm(e) }}>
                <input onChange={(e) => { setName(e.target.value) }} style={{ display: "block",  width: "100%", borderRadius: "16px", borderColor: "white" }} type="text" placeholder='Username' />
                <input onChange={(e) => { setEmail(e.target.value) }} style={{ display: "block", margin: "30px 0", width: "100%", borderRadius: "16px", borderColor: "white" }} type="text" placeholder='Email' />
                <input onChange={(e) => { setPassword(e.target.value) }} style={{ display: "block", width: "100%", borderRadius: "16px", borderColor: "white" }} type="text" placeholder='Password' />
                <button type='Submit' style={{ background: "skyblue", borderRadius: "16px", width: "70%", borderColor: "skyblue", color: "white", margin: "70px 15%" }}>Submit</button>
            </form>
        </div>
    )
}

export default Login

