import styled from "styled-components";
import LoginPage from "./pages/HomePage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SingPage from "./pages/HomePage/SingPage";
import Historico from "./pages/Historico";
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";


export default function App() {



    return (
        <>
            <BrowserRouter>
                <Container>


                <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SingPage />} />
                <Route path="/hoje" element={<Hoje />} />
                <Route path="/habitos" element={<Habitos />} />
                <Route path="/historico" element={<Historico />} />

                </Routes>
                </Container>
            </BrowserRouter>
        </>
    );
}

const Container = styled.div`
position: relative;
    width: 100%;
    max-width: 375px;
    height: 100vh;
    max-height: 667px;
    margin: 0 auto;
    background-color: #ffffff;
   
    
    
`;
