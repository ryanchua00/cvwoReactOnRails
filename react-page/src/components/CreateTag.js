import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

function CreateTag(props) {

    // setting state for APIData to load data from API
    const [TagAPIData, setTagAPIData] = useState([]);

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


    return (
        <div>

        </div>
    );
};

export default CreateTag;