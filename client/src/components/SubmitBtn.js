import React from "react";
import { Button } from "react-bootstrap";

function SubmitBtn(props) {
    return(
        <Button variant="primary" {...props} className="btn submitBtn">Search</Button>
    )
}

export default SubmitBtn;