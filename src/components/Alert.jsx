import React from 'react';


const Alert = (props) => {
    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    };


    return(
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    )
}

export default Alert