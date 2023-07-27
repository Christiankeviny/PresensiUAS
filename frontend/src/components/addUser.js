import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddUser = () => {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [gender,setGender]= useState("Male");
    const navigate = useNavigate();

    const saveUser = async(event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name,
                email,
                gender,
            }); 
            navigate("/");
        } 
        catch (error) {
            console.log(error);
        }
    }
    
    return (
    <div className="coloumns">
        <h className='title is-1 is-spaced'>Halaman Presensi</h>
        <div className="coloumn is-half">
            <form onSubmit={saveUser}>
            <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input 
                    type="text" 
                    className="input" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder='Name' />
            </div>
            </div>

            <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input 
                    type="text" 
                    className="input" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='Email' />
            </div>
            </div>
            
            <div className="field">
            <label className="label">Gender</label>
            <div className="control">
            <div className="select is-fullwidth">
                <select  value={gender} onChange={(event) => setGender(event.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            </div>
            </div>

            <div className="field">
            <div className="control">
                <button type="submit" className='button is-success'>Save</button>
            </div>
            </div>
            </form>
        </div>
    </div>
  );
};

export default AddUser