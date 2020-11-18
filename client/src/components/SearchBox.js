import React from 'react';


function SearchBox(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export default SearchBox