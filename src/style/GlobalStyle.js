import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
	}
	
    input{
		
width: 303px;
height: 45px;
background-color: #FFFFFF;
border: 1px solid #D4D4D4;
border-radius: 5px;
font-family: Lexend Deca;
font-size: 20px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;

	}
	input::placeholder{
	 color: #DBDBDB;
	 font-family: Lexend Deca;

	}

	h2{
		
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
padding-left: 17px;
padding-top: 30px;
padding-bottom: 16px;
	}

`;

export default GlobalStyle;