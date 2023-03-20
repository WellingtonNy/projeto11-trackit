import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function sub(){
    alert('sub')
}

export default function SingPage() {
    
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()
    const [nome,setNome] = useState()
    const [foto,setFoto] = useState()


    return(
    <Limite>
    <img src="assets/trackit.svg"></img>
    <Formulario onSubmit={sub}>
    <input
    id="email"
    type="text"
    required
    value={email}
    onChange={e => setEmail(e.target.value)}
    placeholder="E-mail" />

    <input
    id="senha"
    type="password"
    required
    value={senha}
    onChange={e => setSenha(e.target.value)}
    placeholder="Senha" />

<input
    id="nome"
    type="text"
    required
    value={nome}
    onChange={e => setNome(e.target.value)}
    placeholder="Nome" />

<input
    id="foto"
    type="text"
    required
    value={foto}
    onChange={e => setFoto(e.target.value)}
    placeholder="Foto" />




<button type="submit">Cadastrar</button>

</Formulario>
<Link to='/'>
<a>Já tem uma conta? Faça login!</a>
</Link>
    </Limite>  
)
}

const Limite = styled.div`
width: 100%;
height:100% ;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;

img{
    width: 180px;
    
}

a{
font-family: Lexend Deca;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #52b6ff;
margin-top: 20px;
cursor: pointer;
}
`
const Formulario =styled.form`
display: flex;
flex-direction: column;
margin-top: 32px;

input{
    margin-top: 10px;
    padding-left: 10px;
}

button{
  
height: 45px;
background-color: #52B6FF;
border: 1px solid #D4D4D4;
border-radius: 5px;
font-family: Lexend Deca;
font-size: 21px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
margin-top: 10px;
color: #FFFFFF;
}


`