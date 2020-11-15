import React from "react";
import Books from "./Books";


function ListBooks(props) {
  console.log(props)
   return (
     props.bookState.map((book) => (
       <Books 
         key={book.id}
         id={book.id}
         title={book.volumeInfo.title}
         link={book.volumeInfo.previewLink}
         authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
         image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"}
         description={book.volumeInfo.description}
         saveGoogleBook={props.saveGoogleBook}
       />
     ))
   )
}

// const myEngineer = new Engineer("Shawn Rather", 42, "SAR-SA");
// class Enginner extends Employee {
//   constructor(name, id, github) {
//     super(name, id);
//     this.github = github;
//   }
// }
  
  export default ListBooks