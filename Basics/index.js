import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// Using 

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}
const author = 'Jordan Peterson';
const Book = () => {
  const title = '12 More Rules for Life';
  return <article className='book'>

  <img src="https://images-na.ssl-images-amazon.com/images/I/71xLmdLOQ0L.
  _AC_UL200_SR200,200_.jpg" alt="Book"/>
  
  {/* Curly braces take us to the JavaScript world - no longer hard coded - using 'title' variable */}
  <h1>{title}</h1>
  <h4>{author.toUpperCase()}</h4>
  {/* Has to return a value - can't be a statement */}
  </article>
}

ReactDom.render(<BookList />, document.getElementById('root')
);