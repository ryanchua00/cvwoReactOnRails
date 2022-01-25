import Read from './Read';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchBar(props) {
    const [query, setQuery] = useState('');
    const [tag, setTag] = useState('');
    const [TagAPIData, setTagAPIData] = useState([]);

    // GET request to API
    useEffect(() => {
        axios.get(props.tags_api_URL).then((response) => {
            setTagAPIData(response.data);
        })
    }, []);

    return (
        <div>
            <label htmlFor="header-search">
                <span className="visually-hidden">{'Search Tasks'}</span>
            </label>
            <p></p>
            <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search Tasks"
            />
            <select onChange={(e) => setTag(e.target.value)}>
                <option value=""></option>
                {TagAPIData.map((data) => {
                        return <option value={data.id}>{data.name}</option>;
                })}
            </select>
            <Read searchTag={tag} searchTerm={query} tasks_api_URL={props.tasks_api_URL} tags_api_URL={props.tags_api_URL} />
        </div>
    );
};

export default SearchBar;
