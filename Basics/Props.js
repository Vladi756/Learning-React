import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// Setup objects with properties of components
const firstBook = {
 img: 'https://images-na.ssl-images-amazon.com/images/I/71xLmdLOQ0L._AC_UL200_SR200,200_.jpg',
 title: '12 More Rules for Life',
 author: 'Jordan Peterson'
}

const secondBook = {
 img: 'https://images-na.ssl-images-amazon.com/images/I/81kdwZtIGbL._AC_UL200_SR200,200_.jpg',
 title: 'Green Eggs and Ham',
 author: 'Dr. Seuss'
}
// Specify exactly which props each component wants and from where
function BookList() {
  return (
    <section className='booklist'>
      <Book img = {firstBook.img} title= {firstBook.title} author = {firstBook.author}/>
      <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author}/>
    </section>
  );
}
// Components search for certain props
const Book = (props) => {
  return (
  <article className = 'book'>
    <img src={props.img} alt=''/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
  ); 
}

ReactDom.render(<BookList />, document.getElementById('root')
);
