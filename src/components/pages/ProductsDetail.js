import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductsDetail.css';
import Icon from '../Icon';

const ProductsDetail = (props) => {
  const URL = 'http://localhost:5000';
  const id = props.match.params.id;
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/articles/${id}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div className='container'>
      <div className='banner-container'>
        <img src={`${article.banner}`} />
        <h1>{article.name}</h1>
      </div>
      <div className='articles-container'>
        <div className='picture-container'>
          <img
            className='picture'
            src={`${article.picture}`}
            alt={`${article.name}`}
          />
        </div>
        <div className='text'>
          <h2>{article.description_title}</h2>
          <p>{article.description}</p>
          <Icon data={article} />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
