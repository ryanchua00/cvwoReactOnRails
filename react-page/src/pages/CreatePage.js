import '../App.css';
import Create from '../components/Create';
import React from 'react';

function CreatePage(props) {

    return (
        <div>
            <h2>{'Create New Task'}</h2>
            <Create tasks_api_URL={props.tasks_api_URL} tags_api_URL={props.tags_api_URL}/>
        </div>
    );
};

export default CreatePage;