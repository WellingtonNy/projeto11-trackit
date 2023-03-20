import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		border-radius: border-box;
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

`;

export default GlobalStyle;