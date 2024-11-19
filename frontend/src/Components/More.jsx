import { useEffect, useState } from "react";
import "../css/More.css";
import { Link, useParams } from "react-router-dom";

function More(){
    const {id} = useParams();
    const [employ,setEmploy]=useState({});
    useEffect(()=>{
        getEmployees();
    },[]);
    const getEmployees=async()=>{
        const res = await fetch(`http://localhost:3000/api/getemploy/${id}`)
        const data = await res.json();
        setEmploy({...data})
    }
    const deleteEmploy=async()=>{
        
            fetch(`http://localhost:3000/api/deleteemploy/${id}`,{
              method:"DELETE",
                headers:{"Content-Type":"application/json"}
            }).then((res)=>{
                  console.log(res);
                  if(res.status==201){
                      alert("Deleted")
                  }else{
                      alert("error");
                  }
              }). catch ((error)=>{
                  console.log(error);
                  
              })
    }
    return (
        <>
        <div className="cos">
        <div className="cos1">
            <div className="cos2">
                <img src={employ.profile} alt=""/>
            </div>
            <div className="cos3">
                <div className="details">
                    <table>
                        <tbody>
                        <tr>
                            <th>Emp-Name</th>
                            <td>{employ.name}</td>
                        </tr>
                        <tr>
                            <th>Salary</th>
                            <td>{employ.salary}</td>

                        </tr>
                        <tr>
                            <th>Experience</th>
                            <td>{employ.experience}</td>
                        </tr>
                        <tr>
                            <th>Designation</th>
                            <td>{employ.designation}</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Contact</th>
                            <td>{employ.phone}</td>
                        </tr>
                        <tr>
                            <td>{employ.email}</td>
                        </tr>
                        <tr>
                            <td className="actions" align="right">
                            <Link to={`/edit/${employ._id}`}><button className="see-more">Edit</button></Link>
                            </td>
                            <td className="actions" >
                                <button className="button-3" onClick={deleteEmploy}>Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div> `
        </>
    )
}

export default More;