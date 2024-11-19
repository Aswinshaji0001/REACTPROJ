import React, { useState } from 'react'
import "../css/Addi.css";
import { Form } from 'react-router-dom';

const Add = () => {
    const [emp,setEmp]=useState({
        name:"",
        salary:"",
        experience:"",
        designation:"",
        phone:"",
        email:"",
        profile:""
    })
    const handleChange=(e)=>{
        console.log(e.target.value);
        setEmp((pre)=>({
            ...pre,[e.target.name]:e.target.value
        }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(emp);
        const res = await fetch("http://localhost:3000/api/addemp",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(emp)
        })
        console.log(res);
    }

    const handleFile=async(e)=>{
        console.log(e.target.files[0]);
        const profile = await convertTBase64(e.target.files[0]);
        console.log(profile);
        setEmp((pre)=>({...pre,profile:profile}))
    }

    function convertTBase64(file){
        return new Promise((resolve,reject)=>{
            const fileReader=new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload=()=>{
                resolve(fileReader.result)
            }
            fileReader.onerror=(error)=>{
                reject(error)
            }
        });
    }
  return (
    <div>
    <div className="container">
        <h1>Employ Registration</h1>
        <form id="frm" onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={handleChange} name="name" required/>

            <label htmlFor="salary">Salary</label>
            <input type="number" id="salary" name="salary" onChange={handleChange} required/>

            <label htmlFor="experience">Experience</label>
            <input type="text" id="experience" name="experience" onChange={handleChange} required/>

            <label htmlFor="designation">Designation</label>
            <input type="text" id="designation" name="designation" onChange={handleChange}required/>

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone"  onChange={handleChange}required/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"  onChange={handleChange}required/>

            <div className="prf" >
                <img src="" className="prfimg" id="proimg" alt=""/>
            </div>

            <label htmlFor="profile">Profile</label>
            <input type="file" id="profile" name="profile" onChange={handleFile}required/>

            <div className="buttons">
                <button>Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Add;
