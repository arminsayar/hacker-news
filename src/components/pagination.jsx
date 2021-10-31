import React from 'react';
import styled from "styled-components";

const
    Box = styled.div`
        width:35px;
        height:35px;
        background-color: #ffffff;
        color: #ffffff;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius:50%;
        `,
    BoxContent = styled.div`
        color: #525FFF;
        font-family: 'Righteous', cursive;
        font-size:20px;
        pointer-events:none;
        `,
    MainDiv = styled.div`
        display:flex;
        align-items: center;
        justify-content: center;
        height:100%;
        `,
    Mdiv = styled.div`
        background-color: #525FFF;
        width:100%;
        height:80px;
        `,
    Next = styled.a`
        color:#ffffff;
        margin-left:20px;
        cursor: pointer;
        font-family: 'Righteous', cursive;
        font-size:20px;
        &:hover {
            color: #00003a;
        }
        `,
    Prev = styled.a`
        color:#ffffff;
        margin-right:20px;
        cursor: pointer;
        font-family: 'Righteous', cursive;
        font-size:20px;
        &:hover {
            color: #00003a;
        }
        `,
    CpRight = styled.div`
        background-color: #525FFF;
        padding-bottom:10px;
        display:flex;
        justify-content: center;
        `,
    CpLink = styled.a.attrs({
        href: "https://github.com/arminsayar"
    })`
    color: #ffffff;
    &:hover {
        color: #00003a;
    }
        `,
    CpSpan = styled.span`
    color: #ffffff;
    margin-left:5px;
    cursor:pointer;
        `;

export const Page = (props) => {

    return (
        <>
            <Mdiv>
                <MainDiv>
                    <Prev href="#" onClick={props.prevClick}>
                        ◀️
                    </Prev>
                    <Box>
                        <BoxContent>
                            {props.pageNumber}
                        </BoxContent>
                    </Box>
                    <Next href="#" onClick={props.nextClick}>
                        ▶️
                    </Next>
                </MainDiv>
                <CpRight>
                    <CpLink>© Armin Sayar </CpLink><CpSpan>- Made with 🚬 and ☕</CpSpan>
                </CpRight>
            </Mdiv>
        </>
    );
}

