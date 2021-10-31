import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Body } from '../components/body'
import { Page } from '../components/pagination';

const Input = styled.input.attrs({
  type: 'search',
  id: 'search',
})`
min-width:calc(20vw - 10px);
min-height:40px;
padding-left:20px;
padding-left:20px;
border-radius:32px;
font-family: 'Alata', sans-serif;
margin: 10px 0 25px 0;
float:right;
&:focus {
outline: none;
box-shadow: 0px 0px 5px #00003a;
}
`,
  HeaderStyled = styled.div`
background-color: #525fff;
display:flex;
justify-content: center;
align-items: center;
min-height:60px;
width:100%;
`;

export const StoriesContainer = function (props) {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const baseUrlF = () => {
    let baseUrl = `https://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=20`;
    if (query) {
      baseUrl += `&query=${query}`;
    }
    if (pageNumber > 0) {
      baseUrl += `&page=${pageNumber}`;
    }
    return baseUrl
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        baseUrlF(),
      );

      setData(result.data);
    };

    fetchData();
  }, [query, pageNumber]);

  const changeValue = (e) => {
    setQuery(e)
    baseUrlF();
  }

  const nextClick = () => {
    if (pageNumber < 49) {
      setPageNumber(pageNumber + 1)
      baseUrlF();
    } else {
      setPageNumber(49)
    }
  }
  const prevClick = () => {
    if (pageNumber !== 0) {
      setPageNumber(pageNumber - 1)
      baseUrlF();
    } else {
      setPageNumber(0)
    }
  }
  return (
    <>
      <HeaderStyled>
        <Input
          placeholder={query.length < 1 ? 'Search Here...' : query}
          onKeyDown={e => setTimeout(() => changeValue(e.target.value), 1000)}
        />
      </HeaderStyled>


      {data.hits.map(item => (
        <Body key={item.objectID} title={item.title} date={item.created_at.slice(0, 10)} point={item.points} author={item.author} url={item.url} />
      ))}
      <Page pageNumber={pageNumber + 1} nextClick={() => nextClick()} prevClick={() => prevClick()} />
    </>
  );
}

