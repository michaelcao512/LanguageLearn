'use client'
import React, { useState } from "react"
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

export default function LoginForm({ Login, error }: { Login: any, error: any }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <label>Username:
                        <Input type="username" id="username" name="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </label>
                </div>
                <div>
                    <label>Password:
                        <Input type="password" id="password" name="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </label>
                </div>
                <div>
                    <a href="./app">
                        <Button>Login</Button>
                    </a>
                    <a href="./register">
                        <p> Don't have an account? Sign up</p>
                    </a>
                </div>
            </div>
        </form>
    )
}

