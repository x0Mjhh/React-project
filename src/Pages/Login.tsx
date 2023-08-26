// import useLocalStorage from 'react';

import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login() {

    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value);
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    const save = () => {

        const user = localStorage.getItem("username");
        const pass = localStorage.getItem("password");


        if (username === '' || password === '') {
            alert("is Not has data");
        } else if (username != user || password != pass) {
            alert("login Error")
        } else {
            localStorage.setItem('login', 'true');
            navigate('/')

        }
    }



    return (
        <>
            <div className="flex justify-center h-screen items-center ">
                <div className="h-72  rounded-lg gap-4 w-96 border ">

                    <div className="flex flex-col justify-center items-center  gap-3 w-full h-full">

                        <div className=" text-white">
                            <label htmlFor="username">User Name</label>
                        </div>
                        <input className="rounded-lg w-72 h-10" value={username} onChange={handleUsername} type="text" id="username" placeholder=" Enter your username" />

                        <div className=" text-white">
                            <label htmlFor="pass">Password</label>
                        </div>
                        <input className="rounded-lg w-72 h-10" value={password} onChange={handlePassword} type="password" id="pass" placeholder=" Enter your password"/>


                        <div className=" text-white">
                            <button onClick={save} className="border-2 h-10 w-24" type="submit">Log in</button>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )

}


