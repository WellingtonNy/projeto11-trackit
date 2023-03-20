import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Bot(){
    return(
        <Bots data-test="menu">
            <Cont>
                <Link data-test="habit-link" to='/habitos'>
            <h1> Hábitos </h1>
            </Link>

            <Link data-test="today-link" to='/hoje'>
            <h1>Hoje</h1>
            </Link>
            <Link data-test="history-link" to='/historico'>
            <h1>Histórico</h1>
            </Link>
            </Cont>
        </Bots>
    )
}

const Bots=styled.div`
width: 100%;
height: 70px;
position: relative;
`
const Cont =styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
max-height: 70px;
min-height:70px;
background-color: #ffffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
bottom: 0;
right: 0;
height: 100%;
max-width: 100%;

a{
    text-decoration: none;
}

h1{


padding: 0  25px;

height: 22px;
left: 36px;
top: 619px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: #52B6FF;

}

`