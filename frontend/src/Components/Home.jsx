import { Link } from "react-router-dom";
import "../css/Home.css";
import { useEffect, useState } from "react";

function Home(){
    const [emp,setEmp]=useState([""]);
    useEffect(()=>{
        getEmployees();
    },[])

    const getEmployees=async()=>{
        const res = await fetch("http://localhost:3000/api/getemployees")
        const data = await res.json();
        setEmp([...data])
    }
    console.log(emp);
    
    return (
        <>
    <div className="navbar">
        <h1>NOVAVI</h1>
        <div className="filter" id="filter">
            <input type="text" name="" id="" placeholder="Filter"/>
        </div>
        <div className="right">
            <ul>
                <li><a href="#" id="user"></a></li>
                <li>Sign Up</li>
                <li>Sign Up</li>
                <li><button>Logout</button></li>
            </ul>
            <div className="button1">
               <Link to="/add"><button>Add employee</button></Link>
            </div>
        </div>
    </div>
    <div className="large-card" id="contents"> 
    {
    emp.map((employees)=> <div className="card" key={employees._id}>
            <img src={employees.profile} alt="" className="card-image"/>
            <div className="card-content">
                <h2 className="card-name">{employees.name}</h2>
                <p className="card-designation" value="">{employees.designation}</p>
                <Link to={"/more"}><button className="see-more">See More</button></Link>
             </div>
            </div>
    )
    }
    </div> 
    </>
    )
}

export default Home;