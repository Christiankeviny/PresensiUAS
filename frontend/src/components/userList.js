import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const UserList = () => {
    const [user, setUser]= useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers= async() => {
        const response = await axios.get("http://localhost:5000/users")
        setUser(response.data);
    };

    const deleteUser = async(id) =>{
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="coloums">
        <div className="coloumn is-half">
            <Link to="add" className='button is-success'>Isi Presensi</Link>
            <table className="table is-striped is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user, index) => (
                <tr key={user._id}>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                        <Link to={`edit/${user._id}`} 
                        className='button is-info is-small'>Edit</Link>
                        <button onClick={() => deleteUser(user._id)} className='button is-danger is-small'>Absen keluar</button>
                    </td>
                </tr>    
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList