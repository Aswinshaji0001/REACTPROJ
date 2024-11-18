import "../css/More.css";
import { Link } from "react-router-dom";

function More(){
    return (
        <>
        <div className="cos">
        <div className="cos1">
            <div className="cos2">
                <img src="" alt=""/>
            </div>
            <div className="cos3">
                <div className="details">
                    <table>
                        <tr>
                            <th>Emp-ID</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Emp-Name</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Salary</th>
                            <td ></td>

                        </tr>
                        <tr>
                            <th>Experience</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Designation</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th rowspan="2">Contact</th>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="actions" align="right">
                            <Link to="/edit"><button className="button-3">Edit</button></Link>
                            </td>
                            <td className="actions" >
                                <button className="button-3" onclick="">Delete</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div> `
        </>
    )
}

export default More;