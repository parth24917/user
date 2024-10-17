import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from '../src/redux/store';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Home from '../src/components/Home';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/" element={<Login/>} /> {/* Default to Login */}
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;