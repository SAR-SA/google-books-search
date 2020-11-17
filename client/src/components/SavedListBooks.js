import React from "react";
import SavedBooks from "./SavedBooks";

function SavedListBooks(props) {
    return (
        props.bookState.map((book) => (
            <SavedBooks
                key={book._id}
                id={book._id}
                title={book.title}
                link={book.link}
                authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
                image={book.image ? book.image : "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"}
                description={book.description}
                deleteGoogleBook={props.deleteGoogleBook}
            />
        ))
    )
}

export default SavedListBooks;
