import '../App.css';
import TagTable from '../components/TagTable';
import { Link, useNavigate  } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManageTag(props) {

    // setting state for APIData to load data from API
    const [TagAPIData, setTagAPIData] = useState([]);
    const [key, setKey] = useState(0);

    // Setting state for variables
    const [name, setName] = useState('');

    // Send user back to Read.js page
    let navigate = useNavigate();
    const redirect = () => {
        navigate('/tags');
    };

    // POST request to API
    const postData = () => {
        axios.post(props.tags_api_URL, { name });
    };

    // Event handler
    const submit = () => {
        postData();

        // refreshes TagTable
        setKey(key + 1);
    };

    return (
        <div>
            <h2>{'Create New Tag'}</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>{'Name of new Tag '}</label>
                    <p></p>
                    <input placeholder="Name of new Tag" onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <p></p>
                <Button onClick={submit} type="submit">
                    {'Submit'}
                </Button>
            </Form>
            <TagTable key={key} tags_api_URL={props.tags_api_URL}/>
            <h2>{'Return to Homepage'}</h2>
                <Link className="btn-primary" to='/'>
                    <Button>Back to Home</Button>
                </Link>
        </div>
    );
};

export default ManageTag;