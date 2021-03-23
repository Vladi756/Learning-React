import React from 'react'

const Book = ({img, title, author}) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("What did I just say?!");
  };
  const complexExample = (author) =>{
    console.log(author);
  }
  return (
  <article className = 'book' onMouseOver = {() => {
    console.log(title);
  }}>
    <img src={img} alt=''/>
    <h1 onClick={()=> alert("Hey!")}>{title}</h1> {/*In-line function*/}
    <h4>{author}</h4>
    <button type ="button" onClick={clickHandler}>Don't Press</button> {/*Reference*/}
    <button type = "button" onClick= {() => complexExample(author)}>Complex</button>
  </article>
  ); 
}

export default Book
