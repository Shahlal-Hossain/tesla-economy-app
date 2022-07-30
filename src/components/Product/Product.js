import React from 'react';
import styled from 'styled-components';

const Product = ({pd}) => {
    
    let {bgImage,title,description,leftButtonText,rightButtonText} = pd;
    return (

        <div>
        <MainImages imeges={bgImage}>

            <Itemtext>
                <h1> {title}</h1>
                <p> {description}</p>
            </Itemtext>
            <ButtonGroup>
                <LeftButton> 
                    {leftButtonText}
                </LeftButton>
                {
                    rightButtonText &&
                    <RightButton  > 
                        {rightButtonText}
                    </RightButton>
                }
            </ButtonGroup>
        </MainImages>

        </div>
    );
};

export default Product;

const MainImages =styled.div`
width: 100vw;
height: 100vh;
background-image: ${props => `url('/images/${props.imeges}')`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`


const Itemtext =styled.div`
padding-top: 10vh;
text-align: center;
h1{
    font-size: 25px;
}
`
const ButtonGroup =styled.div`
display: flex;
margin-bottom: 40px;
`
const LeftButton =styled.div`
background-color: rgb(50, 48, 44);
height: 40px;
width: 250px;
color: #f2eaea;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 14px;
cursor: pointer;
margin: 10px;
padding: 3px;
border-radius: 30px;

`
const RightButton =styled.div`
background-color: antiquewhite;
height: 40px;
width: 250px;
color: #000;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 14px;
cursor: pointer;
margin: 10px;
padding: 3px;
border-radius: 30px;

`