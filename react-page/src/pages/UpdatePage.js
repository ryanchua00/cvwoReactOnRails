import '../App.css';
import Update from '../components/Update';
import React from 'react';

function UpdatePage(props) {

    return (
        <div>
            <h2>{'Update Post'}</h2>
            <Update tags_api_URL={props.tags_api_URL} tasks_api_URL={props.tasks_api_URL}/>
        </div>
    );
};

export default UpdatePage;