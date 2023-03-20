import styled from "styled-components"
import Bot from "../components/Bot"
import Top from "../components/Top"

export default function Historico() {
    return(
        <>
        <Top />
        <h2>Histórico</h2>
        <Frase> Em breve você poderá ver o histórico dos seus hábitos aqui!</Frase>
        <Bot/>
        </>
    )
}

const Frase =styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
padding-left: 17px;


`