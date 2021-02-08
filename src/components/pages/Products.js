import React, { useState, useContext } from 'react';
import CardItem from '../CardItem';
import './Products.css';
import { ArticleContext } from '../../_contexts/ArticleContextProvider';

export default function Products() {
  const { articles } = useContext(ArticleContext);

  return (
    <>
      <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {articles.map((article) => (
                <div key={article.id}>
                  <CardItem
                    src={article.picture}
                    text={article.name}
                    label='Drone'
                    path={`/products/${article.id}`}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
