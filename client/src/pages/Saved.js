import React from "react";
import { Component } from "react";
// import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import API from '../utils/API';
import SavedListBooks from "../components/SavedListBooks";
// import Container from "../components/Grid"

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }


    render() {
        return (
            <div>
                {/* <Container fluid> */}
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <SavedListBooks 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedListBooks>
                ) : (
                    <h5>No results to display</h5>
                )}
                {/* </Container> */}
            </div>
        )
    }
}

export default Saved