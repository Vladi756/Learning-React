import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71xLmdLOQ0L._AC_UL200_SR200,200_.jpg',
    title: '12 More Rules for Life',
    author: 'Jordan Peterson',
  } 
  ,
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81kdwZtIGbL._AC_UL200_SR200,200_.jpg',
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss',
  } 
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((individualBook) => {
        return (
            <Book key = {individualBook.id} {...individualBook}/>
        );
      })}
    </section>
  );
}
const Book = ({img, title, author}) => {
  return (
  <article className = 'book'>
    <img src={img} alt=''/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  ); 
}

ReactDom.render(<BookList />, document.getElementById('root')
);