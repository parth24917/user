import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice'; 

import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users); 
    

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleEdit = async (id) => {
        console.log(`Edit user with ID: ${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            dispatch(fetchUsers()); 
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users && users.length > 0 ? (
                    users.map((user) => (
                        <li key={user._id}>
                            {user.username}
                            <button onClick={() => handleEdit(user._id)}>Edit</button>
                            <button onClick={() => handleDelete(user._id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <div>No users found</div>
                )}
            </ul>
        </div>
    );
};

export default Home;