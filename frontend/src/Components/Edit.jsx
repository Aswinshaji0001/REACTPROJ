import "../css/Edit.css";
import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";




const Edit = () => {
  const {id} = useParams();
  const [employ,setEmploy]=useState({});
const handleChange=(e)=>{
    console.log(e.target.value);
    setEmploy((pre)=>({
        ...pre,[e.target.name]:e.target.value
    }))
}
  useEffect(()=>{
      getEmployees();
  },[]);
  const getEmployees=async()=>{
      const res = await fetch(`http://localhost:3000/api/getemploy/${id}`)
      const data = await res.json();
      setEmploy({...data})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(employ);
    const res = await fetch(`http://localhost:3000/api/editemploy/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(employ)
    })
    console.log(res);
}

const handleFile=async(e)=>{
    console.log(e.target.files[0]);
    const profile = await convertTBase64(e.target.files[0]);
    console.log(profile);
    setEmploy((pre)=>({...pre,profile:profile}))
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
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={employ.name} onChange={handleChange} />

            <label htmlFor="salary">Salary</label>
            <input type="number" id="salary" name="salary" value={employ.salary} onChange={handleChange}/>

            <label htmlFor="experience">Experience</label>
            <input type="text" id="experience" name="experience" value={employ.experience} onChange={handleChange}/>

            <label htmlFor="designation">Designation</label>
            <input type="text" id="designation" name="designation" value={employ.designation} onChange={handleChange}/>

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value={employ.phone} onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={employ.email} onChange={handleChange}/>

            <div className="prf">
                <img src={employ.profile} className="prfimg" id="proimg" alt=""/>
            </div>

             <label htmlFor="profile">Profile</label>
            <input type="file" id="profile" name="profile" onChange={handleFile}/>

            <div className="buttons">
                <button>Submit</button>
                <button type="reset">Reset</button>
            </div>
          </form>
    </div>
  )
}

export default Edit;
