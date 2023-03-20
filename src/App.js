import styled from "styled-components";
import LoginPage from "./pages/HomePage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SingPage from "./pages/HomePage/SingPage";


export default function App() {



    return (
        <>
            <BrowserRouter>
                <Container>


                <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SingPage />} />

                </Routes>
                </Container>
            </BrowserRouter>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 375px;
    height: 100vh;
    max-height: 667px;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid black;
    padding: 36px;
    
`;
