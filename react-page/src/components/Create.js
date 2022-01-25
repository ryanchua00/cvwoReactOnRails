import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

function Create(props) {

    // GET request to API
    useEffect(() => {
            axios.get(props.tags_api_URL).then((response) => {
                setTagAPIData(response.data);
            })
        }, []);

    // Setting state for variables
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tag, setTag] = useState('');
    const [TagAPIData, setTagAPIData] = useState([]);

    // Send user back to Read.js page
    let navigate = useNavigate();
    const redirect = () => {
        navigate('/');
    };

    // POST request to API
    const postData = () => {
        axios.post(props.tasks_api_URL, {
            tag,
            title,
            body
        });
        redirect();
    };

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>{'Title '}</label>
                    <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                </Form.Field>
                <p></p>
                <Form.Field>
                    <label>{'Body '}</label>
                    <input placeholder="Body" onChange={(e) => setBody(e.target.value)} />
                </Form.Field>
                <p></p>
                <Form.Field>
                    <label>{'Tag '}</label>
                        <select onChange={(e) => setTag(e.target.value)}>
                            <option></option>
                            {TagAPIData.map((data) => {
                                return <option value={data.id}>{data.name}</option>;
                            })}
                        </select>
                </Form.Field>
                <p></p>
                <Button onClick={postData} type="submit">
                    {'Submit'}
                </Button>
            </Form>
        </div>
    );
};

export default Create;