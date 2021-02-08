import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import useLocalStorage from '../_hooks/useLocalStorage';
import API from '../services/API';

export const ArticleContext = createContext();

const ArticleContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [userLogged, setUserLogged] = useLocalStorage('user');

  const URL = 'http://localhost:5000';

  useEffect(() => {
    axios
      .get(`${URL}/articles`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   setUserLogged(null);
  //   API.get('/me').then((res) => setUserLogged(res.data));
  // }, []);

  return (
    <ArticleContext.Provider
      value={{
        articles,
        userLogged,
        setUserLogged,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
