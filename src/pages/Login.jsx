import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"



function Login({ onLogin }){
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password , setpassword]= useState("");
    const navigate = useNavigate(); 

    useEffect(() => {
        setname("");
        setemail("");
        setpassword("");
    }, []);

    const handlelogin =(e)=>{
        e.preventDefault();

        if(!name || !email || !password){
            alert("Please enter the details");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        }

        localStorage.setItem("user", JSON.stringify(user));
        setname("");
        setemail("");
        setpassword("");
        onLogin();
        navigate("/");
    }

    return(
        <div className="login-page">
            <div className="login-box">

            <h1>Sign In</h1>
            <form onSubmit={handlelogin}>

            <input 
            value={name}
            type="text"
            placeholder="enter the name"
            onChange={(e)=> setname(e.target.value)}
                />
            
            <input
            type="email"
            value={email}
            placeholder="enter the mail"
            onChange={(e)=> setemail(e.target.value)}
            />

            <input
            type="password"
            value={password}
            placeholder="enter the password"
            onChange={(e) => setpassword(e.target.value)}
            />

            <button type="submit"> log In</button>



            </form>




            </div>

        </div>
    )
        
}


export default Login;