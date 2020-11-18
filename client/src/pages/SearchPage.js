import React, {Component} from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import SubmitBtn from "../components/SubmitBtn";
import API from "../utils/API";
import ListBooks from "../components/ListBooks";
import { Redirect } from "react-router-dom";

class SearchPage extends Component {
    state = {
        books: [],
    search: ""
    };

      // Create function to search for books through Google API
      searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.items)
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };

    // Create function to handle input data
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    // Create function to handle form data submission
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveGoogleBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBooks({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
        .then(res => console.log("Successful POST to DB!", res))
        .catch(err => console.log("this is the error", err));
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <Container>
                <form>
                    <h5>Search for books</h5>
                    <SearchBox 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        onClick={this.handleFormSubmit}
                        name="search"
                        placeholder="e.g. Ready Player One"
                    />
                    <SubmitBtn onClick={this.handleFormSubmit}/>
                </form>
                
                {this.state.books.length ? (
                    <ListBooks 
                    bookState={this.state.books}
                    saveGoogleBook={this.saveGoogleBook}>
                    </ListBooks>
                ) : (
                    <div>
                    
                    </div>
                )}
                </Container>
            </div>
        )
    }
}

export default SearchPage;