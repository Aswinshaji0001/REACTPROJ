import { Link } from "react-router-dom";
import "../css/Home.css";

function Home(){
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
                <li><button onclick="logout()">Logout</button></li>
            </ul>
            <div className="button1">
               <Link to="/add"><button>Add employee</button></Link>
            </div>
        </div>
    </div>
    <div className="large-card" id="contents"> 
    <div className="card">
            <img src="" alt="" className="card-image"/>
            <div className="card-content">
            <h2 className="card-name" value=""></h2>
            <p className="card-designation" value=""></p>
             <Link to={"/more"}><button className="see-more">See More</button></Link>
             </div>
            </div>
    </div>
    </>
    )
}

export default Home;