import React from 'react';
import styled from "styled-components";

const
        Title = styled.h1`
        font-size: 1.8em;
        color: #ffffff;
        font-family: 'Righteous', cursive;
        cursor: pointer;
        &:hover { 
            color: #00003a;
        }
        `,
        HeaderStyled = styled.div`
        background-color: #525fff;
        display:flex;
        justify-content: center;
        align-items: center;
        min-height:60px;
        width:100%;
        `,
        TitleDiv = styled.div`
        padding-left:0;
        `;

export const Header = () => {
    
    return (
        <>
            <HeaderStyled>
                <TitleDiv>
                    <Title>HACKER NEWS</Title>
                </TitleDiv>
            </HeaderStyled>
        </>
    );
}

