import styled from "styled-components"

export default function Top(){
    return(
        <Topo>
            <Cont>
            <h1>TrackIt</h1>
            <img src='data:image/jpeg;base64,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'></img>
            </Cont>
        </Topo>
    )
}

const Topo=styled.div`
width: 100%;
height: 70px;
position: relative;
`
const Cont =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
top: 0;
right: 0;
width: 100%;
h1{


height: 49px;
padding-left: 18px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;

}

img{
    border-radius: 50%;
    width: 51px;
    height: 51px;
    margin-right: 20px;
}

`