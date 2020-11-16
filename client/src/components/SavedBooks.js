import React from "react";


function SavedBooks(props) {
    const onClickFunc = () => {
        props.deleteGoogleBook.bind(props);
    }

    return (
        <div>
            <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
                <img src={props.image} style={{maxWidth: "100px"}} alt="book"/>
                <h4 className="card-title" style={{margin: "10px 0"}}>{props.title}</h4>
                <p className="card-text">{props.description}</p>
                <p>Author(s): {props.author}</p>
                <a href={props.link} target="_blank" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                <button onClick={onClickFunc} className="btn">Delete</button>
            </div>
            </div>
        </div>
    )
}
  
  export default SavedBooks