import { useEffect, useState } from "react"
import styled from "styled-components"
import Bot from "../components/Bot"
import Top from "../components/Top"
import Context, { AuthContext } from "../auth";
import React, { useContext } from "react";
import axios from "axios";

export default function Hoje() {
const [tem,setTem]= useState(false)
const {tk,setTk} = React.useContext(AuthContext);


const [mostrar,setMostrar]=useState({});
useEffect(()=>{

const hab = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{ headers: {
    Authorization: `Bearer ${tk.token}`,
  }})


hab.then((ele)=>setMostrar(ele.data),console.log('deu bom'))
hab.catch((ele)=>console.log('carregando'))
},[])




    return(
        <>
        <Top />
        <Titulo>
        <h2>segunda, 20/03</h2>
        <p>Nenhum hábito concluído ainda </p>
        <span>67% dos hábitos concluídos</span>
        <button onClick={()=>console.log(mostrar)}>ola</button>
                </Titulo>




        <Bot/>
        </>
    )
}

const Card = styled.div`


`



const Titulo = styled.div`
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
padding-left: 17px;
display: none;

}

span{
    padding-left:17px ;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #8FC549;

}

`