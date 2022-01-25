import Home from './pages/Home';
import ManageTag from './pages/ManageTag';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';
import React from 'react';
//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { createTheme, ThemeProvider } from '@material-ui/core';
//import { blue, orange } from '@material-ui/core/colors';
//
//const theme = createTheme({
//    palette: {
//        primary: blue,
//        secondary: orange,
//    },
//});

const tasks_api_URL = 'http://localhost:3000/api/v1/tasks/';
const tags_api_URL = 'http://localhost:3000/api/v1/tags/';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home tasks_api_URL={tasks_api_URL} tags_api_URL={tags_api_URL} />} />
                    <Route path="/create" element={<CreatePage tasks_api_URL={tasks_api_URL} tags_api_URL={tags_api_URL} />} />
                    <Route path="/update" element={<UpdatePage tasks_api_URL={tasks_api_URL} tags_api_URL={tags_api_URL} />} />
                    <Route path="/tags" element={<ManageTag tasks_api_URL={tasks_api_URL} tags_api_URL={tags_api_URL} />} />
                </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
