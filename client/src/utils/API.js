import axios from "axios";

//Exporting an object of methods for accessing the API

export default {
    googleBooks:function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    //Saves book to DB
    saveBooks: function(bookData) {
        return axios.post("/api/books", bookData)
    },
    //get saved books from DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    //get books by id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    //delete book by id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};