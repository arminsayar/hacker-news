import React from 'react';
import { StoriesContainer } from './containers/StoriesContainer';
import { Header } from './components/header';

export const App = () => {
   return <>
      <Header />
      <StoriesContainer />
   </>
};

