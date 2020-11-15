import React from "react";
import { Component } from "react";

function Books() {
    onClickFunc = () => {
        this.props.saveGoogleBook(this.props);
    }

    const {book} = this.props
    return (
        <div>
            <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
                <img src={this.props} style={{maxWidth: "100px"}} alt="book"/>
                <h4 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h4>
                <p className="card-text">{this.props.description}</p>
                <a href={this.props.link} target="_blank" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                <button onClick={this.onClickFunc} className="btn">Save</button>
            </div>
            </div>
        </div>
    )
}
  
  export default Books