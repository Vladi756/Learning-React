import React from 'react'
import ReactDom from 'react-dom'
import './index.css'  

function BookList(){
  return( 
  <section className = 'booklist'> 
    <Book/>   
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}

const Book = () => {
  return <article className = 'book'>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => <img src="https://images-na.
ssl-images-amazon.com/images/I/71xLmdLOQ0L.
_AC_UL200_SR200,200_.jpg" alt="Image of Book"/>

const Title = () => <h1>12 More Rules for Life</h1>
const Author = () => <h4>Jordan Peterson</h4>

ReactDom.render(<BookList/>, document.getElementById('root')
);
