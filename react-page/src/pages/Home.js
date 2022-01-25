import '../App.css';
import { ReactComponent as Logo } from '../logo.svg';
import { ReactComponent as RailsLogo } from '../rails-logo.svg';
import SearchBar from '../components/SearchBar';
import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
                <div className="App-Header">
                    <h1>{'Task Management App'}</h1>
                </div>
                <div>
                    <h2>{'Tasklist'}</h2>
                    <SearchBar tasks_api_URL={props.tasks_api_URL} tags_api_URL={props.tags_api_URL} />
                    <h2>{'Create new Task:'}</h2>
                        <Link to='/create'>
                            <Button>Create</Button>
                        </Link>
                    <h2>{'Manage Tags'}</h2>
                        <Link to='/tags'>
                            <Button>Manage</Button>
                        </Link>
                </div>
                <div className="logo-div">
                    <p></p>
                    <Logo className="App-logo"/>
                    <RailsLogo className="App-logo-rails"/>
                </div>
        </div>
    );
};

export default Home;
