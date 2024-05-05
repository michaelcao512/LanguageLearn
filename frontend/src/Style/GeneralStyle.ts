'use client'
import styled, { createGlobalStyle } from "styled-components";
// import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";

export const GlobalStyle = createGlobalStyle`
    body {
        @apply bg-background text-foreground;
        background-image: linear-gradient(#f6f6e1, #d4a6d4 48%, #a6ccec);
        background-size: 100%;
        background-attachment: fixed;
        font-family: Copperplate;
    }
`;

export const Header = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Copperplate;
    font-weight:bold;
    font-size:50px;
    padding: 20px;
`;


export const Box = styled.div`
    margin-top: 8rem;
    width: 450px;
    height: 400px;
    padding: 20px;
    border:  1px solid white;
    border-radius: 50px;
`;

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0px;
    margin:0px;
    width: 100%;
    height: 86vh;
`;

export const LoginBody = styled.div`
    padding: 20px;
    font-family: Copperplate;
    display: center;
    align-items: center;
`;

// export const StyledInputWrapper = styled(Input)`
//     border-radius:
// `;

