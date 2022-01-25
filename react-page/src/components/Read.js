import '../App.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Read(props) {

    // setting state for APIData to load data from API
    const [TaskAPIData, setTaskAPIData] = useState([]);
    const [TagAPIData, setTagAPIData] = useState([]);

    // GET request to API
    useEffect(() => {
        axios.get(props.tasks_api_URL).then((response) => {
            setTaskAPIData(response.data);
        })
        axios.get(props.tags_api_URL).then((response) => {
            setTagAPIData(response.data);
        })
    }, []);

    // setting data to local storage to be used in Update.js and Delete.js
    const setData = (data) => {
            let { id, title, body, tags_id } = data;
            localStorage.setItem('ID', id);
            localStorage.setItem('Title', title);
            localStorage.setItem('Body', body);
            localStorage.setItem('Tags_id', tags_id);
    };

    // function to refresh page after deleting
    const getData = () => {
        axios.get(props.tasks_api_URL)
            .then((getData) => {
                 setTaskAPIData(getData.data);
             })
    }

    // DELETE request to API
    const onDelete = (ID) => {
        axios.delete(props.tasks_api_URL + ID).then(() => {
            getData();
        });
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Body</Table.HeaderCell>
                        <Table.HeaderCell>Tags</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {TaskAPIData.filter((data) => {
                            return TagAPIData.map((value) => {
                                if (props.searchTag === "" || props.searchTag === null) {
                                    return data;
                                } else if (value.name === props.searchTag && value.id === data.tags_id) {
                                    return data;
                                }
                            })
                        })
                        .filter((data) => {
                            {/* Filtering out based off searchTerm */}
                                if (props.searchTerm === "") {
                                    return data;
                                } else {
                                    return data.title.toLowerCase().includes(props.searchTerm.toLowerCase());
                                }
                        })
                        .map((data) => {
                            {/* Mapping filtered data to cells */}
                                 if (data.tag === null) {
                                     return (
                                          <Table.Row>
                                               <Table.Cell>{data.title}</Table.Cell>
                                               <Table.Cell>{data.body}</Table.Cell>
                                               <Table.Cell></Table.Cell>
                                               <Table.Cell>
                                                   <Link to='/update'>
                                                       <Button onClick={() => setData(data)}>Update</Button>
                                                   </Link>
                                               </Table.Cell>
                                               <Table.Cell>
                                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                               </Table.Cell>
                                          </Table.Row>
                                     )
                                 } else {
                                    return TagAPIData.map((value) => {
                                        if (data.tag === value.id) {
                                             return (
                                                  <Table.Row>
                                                       <Table.Cell>{data.title}</Table.Cell>
                                                       <Table.Cell>{data.body}</Table.Cell>
                                                       <Table.Cell>{value.name}</Table.Cell>
                                                       <Table.Cell>
                                                           <Link to='/update'>
                                                               <Button onClick={() => setData(data)}>Update</Button>
                                                           </Link>
                                                       </Table.Cell>
                                                       <Table.Cell>
                                                            <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                                       </Table.Cell>
                                                  </Table.Row>
                                             )
                                         }
                                    });
                                 }
                             })
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default Read;
