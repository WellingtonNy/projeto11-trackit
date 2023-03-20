import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function SingPage() {
    
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [name,setName] = useState()
    const [image,setImage] = useState()
    const [load,setLoad] = useState(false)
   const navigate=useNavigate()

   
    function sub(elemento){

        elemento.preventDefault();
        setLoad(true)
        const corpo={email,name,image,
                     password}
                     console.log(corpo);
       const logar=axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',corpo)

       logar.then((ele)=>navigate('/'))

       logar.catch(()=> alert('erro ao criar conta'),setLoad(false))
    }


    function cadastro(){
        navigate('/');
    }

    return(
    <Limite>
    <img src="assets/trackit.svg"></img>
    <Formulario onSubmit={sub}>
    <input
    disabled={load}
    id="email"
    type="email"
    required
    value={email}
    onChange={e => setEmail(e.target.value)}
    placeholder="E-mail" />

    <input
    disabled={load}
    id="password"
    type="password"
    required
    value={password}
    onChange={e => setPassword(e.target.value)}
    placeholder="Senha" />

<input
disabled={load}
    id="name"
    type="text"
    required
    value={name}
    onChange={e => setName(e.target.value)}
    placeholder="Nome" />

<input
disabled={load}
    id="image"
    type="url"
    required
    value={image}
    onChange={e => setImage(e.target.value)}
    placeholder="Foto" />




<button disabled={load} type="submit">Cadastrar</button>

</Formulario>

<Gambiarra onClick={cadastro} disabled={load}>

<a >Já tem uma conta? Faça login!</a>

</Gambiarra>

    </Limite>  
)
}

const Gambiarra=styled.button`
background-color: #ffffff;
border: none;
margin-top: 20px;
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
}`

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