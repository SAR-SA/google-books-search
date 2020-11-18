import React from "react";
import { Button } from "react-bootstrap";


function SavedBooks(props) {
    const onClickFunc = () => {
        props.deleteGoogleBook(props);
    }

    return (
        <div>
            <div className="card mt-3">
            <div className="card-header"></div>
            <div className="card-body">
                <img src={props.image} style={{maxWidth: "100px"}} alt="book"/>
                <h4 className="card-title" style={{margin: "10px 0"}}>{props.title}</h4>
                <p className="card-text">{props.description}</p>
                <p>Author(s): {props.authors}</p>
                <a href={props.link} target="_blank" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                <Button onClick={onClickFunc} variant="danger">Delete</Button>
            </div>
            </div>
        </div>
    )
}
  
  export default SavedBooks