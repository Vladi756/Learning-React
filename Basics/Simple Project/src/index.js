import React from 'react'
import ReactDom from 'react-dom'


import './index.css'
import {books} from './Books'
import SpecificBook from './Book'

function BookList() {
  return (
    <section className='booklist'>
      {books.map((individualBook, index) => {
        return (
            <SpecificBook key = {individualBook.id} {...individualBook}/>
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root')
);