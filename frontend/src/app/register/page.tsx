'use client'

import React, { useState } from "react"
import RegisterForm from "./RegisterForm"
import {LoginWrapper, Box, Header, LoginBody} from "@/Style/GeneralStyle";
// import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
// import ReactDom from "react-dom"
// import { Progress } from "@/components/ui/progress"
// import { useSession } from "next-auth/client"

export default function LoginPage() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const Login = (details: {username:string, password: string} )=> {
        console.log(details);
    }

    const Logout = () => {
        console.log('Logout');
    }

    return (
        <LoginWrapper>
            <Box>
                <Header> Sign Up</Header>
                <LoginBody>
                    {(username != "") ? (
                        <div>
                            <h2>Welcome, <span>{username}</span></h2>
                            <button>Logout</button>
                        </div>
                    ): (<RegisterForm Login={Login} error={Error}/>) }

                </LoginBody>
            </Box>
        </LoginWrapper>
    )

}


