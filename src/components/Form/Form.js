import React from 'react';
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";

const Form = (props) => {
    const history = useHistory();

    return (
        <form onSubmit={props.submitFormData}>
            <input
                type="text"
                className="Input"
                name="name"
                value={props.name}
                onChange={props.onInputChange}
                placeholder="Name"
            />
            <input
                type="phone"
                className="Input"
                name="phone"
                value={props.phone}
                onChange={props.onInputChange}
                placeholder="Phone"
            />
            <input
                type="email"
                className="Input"
                name="email"
                value={props.email}
                onChange={props.onInputChange}
                placeholder="Email"
            />
            <input
                type="text"
                className="Input"
                name="photo"
                value={props.photo}
                onChange={props.onInputChange}
                placeholder="Photo"
            />
            Photo preview <img src={props.photo} alt={props.name}/>
            <Button variant="contained" type='submit'>Save</Button>
            <Button variant="contained" type='button' onClick={() => history.push('/')}>Back to Contacts</Button>
        </form>
    );
};

export default Form;