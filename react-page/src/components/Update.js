import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update(props) {

    // setting state for APIData to load data from API
    const [TagAPIData, setTagAPIData] = useState([]);

    // GET request to API
    useEffect(() => {
        axios.get(props.tags_api_URL).then((response) => {
            setTagAPIData(response.data);
        })
    }, []);

    // setting state for each field
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tag, setTag] = useState('');
    const [id, setID] = useState(null);

    // hook to get data stored in the localStorage
    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setTitle(localStorage.getItem('Title'));
        setBody(localStorage.getItem('Body'));
        setTag(localStorage.getItem('Tag'));
    }, []);

    // Send user back to Read.js page
    let navigate = useNavigate();
    const redirect = () => {
        navigate('/');
    };

    // PUT request to API
    const updateData = () => {
        axios.put(props.tasks_api_URL + id, {
            title,
            body,
            tag,
        });
        redirect();
    };

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>{'Title'}</label>
                    <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Field>
                <p></p>
                <Form.Field>
                    <label>{'Body'}</label>
                    <input placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
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
                <Button onClick={updateData} type="submit">
                    {'Update'}
                </Button>
            </Form>
        </div>
    );
};

export default Update;