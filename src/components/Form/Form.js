import React from 'react';
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";
import './Form.css';

const Form = (props) => {
    const history = useHistory();

    return (
        <form onSubmit={props.submitFormData}>
            <h1 className='title-form'>{props.title.toUpperCase()}</h1>
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
            <p className='title-photo'>Photo preview</p> <img className='img' src={props.photo} alt={props.name}/>
            <Button className='btn-form' variant="contained" type='submit'>Save</Button>
            <Button variant="outlined" type='button' onClick={() => history.push('/')}>Back to Contacts</Button>
        </form>
    );
};

export default Form;