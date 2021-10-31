import React from 'react';
import styled from "styled-components";

const
    Title = styled.a`
          font-size: 1em;
          color: #000000;
          font-family: 'Alata', sans-serif;
          cursor: pointer;
          margin-right:10px;
          &:hover { 
              color: #00003a;
          }
          `,
    Link = styled.a`
          font-size: .8em;
          color: #000001;
          opacity: 0.8;
          font-family: 'Alata', sans-serif;
          cursor: pointer;
          width: 200px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          display: inline-block;
          &:hover { 
              color: #00003a;
          }
          `,
    TitleDiv = styled.div`
          display:flex;
          align-items: center;
          margin:0 10px 0 10px;
          `,
    DetailDiv = styled.div`
          display:flex;
          align-items: center;
          margin:0 10px 2px 10px;
          `,
    Paragraph = styled.a`
          font-size: .8em;
          color: #000001;
          opacity: 0.8;
          font-family: 'Alata', sans-serif;
          cursor: pointer;
          width: 100px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          display: inline-block;
          &:hover { 
              color: #00003a;
          }
          `,
    MainDiv = styled.div`
    margin:10px 20px;
    border: 2px solid #ffffff;
    border-radius:2px;
          &:hover { 
              border-left: 2px solid #507fff;
           } 
          `,
    DateStyled = styled.a`
              font-size: .8em;
              color: #000001;
              opacity: 0.8;
              font-family: 'Alata', sans-serif;
              cursor: pointer;
              white-space: nowrap;
              text-overflow: clip;
              overflow: hidden;
              display: inline-block;
              margin-left:20px;
              &:hover { 
                  color: #00003a;
              }
          `;

export const Body = function (props) {

    return (
        <>
            <MainDiv>
                <TitleDiv>
                    <Title href={props.url} target="_blank">{props.title}</Title>
                    <Link href={props.url} target="_blank">({props.url})</Link>
                </TitleDiv>
                <DetailDiv>
                    <Paragraph href={props.url} target="_blank">point: {props.point}</Paragraph>
                    <Paragraph href={props.url} target="_blank">author: {props.author}</Paragraph>
                    <DateStyled href={props.url} target="_blank">created at: {props.date}</DateStyled>
                </DetailDiv>
            </MainDiv>
        </>
    );
}