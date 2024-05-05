'use client'

import React, { useState, useRef, useEffect} from "react"
import LoginForm from "./LoginForm"
import Link from "next/link"
import styled from 'styled-components';
import {Box, Header, LoginBody, LoginWrapper} from "@/Style/GeneralStyle";


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
                <Header> Log in</Header>
                <LoginBody>
                    {(username != "") ? (
                        <div>
                            <h2>Welcome, <span>{username}</span></h2>
                            <button>Logout</button>
                        </div>
                    ): (<LoginForm Login={Login} error={Error}/>) }

                </LoginBody>
            </Box>
        </LoginWrapper>
    )
}






