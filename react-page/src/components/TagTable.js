import '../App.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Read(props) {

    // setting state for APIData to load data from API
    const [TagAPIData, setTagAPIData] = useState([]);

    // GET request to API
    useEffect(() => {
        axios.get(props.tags_api_URL).then((response) => {
            setTagAPIData(response.data);
        })
    }, []);

    // setting data to local storage
    const setData = (data) => {
            let { id, name } = data;
            localStorage.setItem('ID', id);
            localStorage.setItem('Name', name);
    };

    // function to refresh page after deleting
    const getData = () => {
        axios.get(props.tags_api_URL)
            .then((getData) => {
                 setTagAPIData(getData.data);
             })
    }

    // DELETE request to API
    const onDelete = (ID) => {
        axios.delete(props.tags_api_URL + ID).then(() => {
            getData();
        });
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Tags</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {TagAPIData.map((data) => {
                         return (
                              <Table.Row>
                                   <Table.Cell>{data.name}</Table.Cell>
                                   <Table.Cell>
                                        <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                   </Table.Cell>
                              </Table.Row>
                         )
                    })}
                </Table.Body>
            </Table>
        </div>
    );
};

export default Read;
