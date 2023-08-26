import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const [username, setUser] = useState('');
    const [email, setEmil] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value);
    }
    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmil(e.target.value);
    }
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    const save = () => {
        if (username === '' || email === '' || password === '') {
            alert("Not has data");
        } else {

            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("login", "false");

            navigate('/login')

        }


    }

    return (
        <>

            <div className="flex justify-center h-screen items-center">
                <div className="flex flex-col justify-center items-center h-72 border gap-2 w-96  ">
                    <div className="text-white">
                        <label htmlFor="username" >User Name</label>
                    </div>
                    <input className="rounded-lg w-72 h-10" type="text" value={username} onChange={handleUsername} required />


                    <div className="text-white">
                        <label htmlFor="email">Email</label>
                    </div>
                    <input className="rounded-lg w-72 h-10" type="text" placeholder=""
                        value={email}
                        onChange={handleEmail} required />


                    <div className="text-white">
                        <label htmlFor="pass">Password</label>
                    </div>
                    <input className="rounded-lg w-72 h-10" type="password" value={password} onChange={handlePassword} required />


                    <div className="text-white p-2">
                        <button className="border-2 h-10 w-24" type="submit" onClick={save}>Log in</button>
                    </div>

                </div>
            </div>

        </>
    )
}

