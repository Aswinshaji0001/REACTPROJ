import React from 'react'
import "../css/Edit.css";


const Edit = () => {
  return (
    <div>
      <label for="name">Name:</label>
            <input type="text" id="name" name="name"/>

            <label for="salary">Salary</label>
            <input type="number" id="salary" name="salary"/>

            <label for="experience">Experience</label>
            <input type="text" id="experience" name="experience"/>

            <label for="designation">Designation</label>
            <input type="text" id="designation" name="designation"/>

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" value/>

            <div className="prf">
                <img src="${employ.profile}" className="prfimg" id="proimg" alt=""/>
            </div>

             <label for="profile">Profile</label>
            <input type="file" id="profile" name="profile" onchange="pic()"/>

            <div className="buttons">
                <button >Submit</button>
                <button type="reset">Reset</button>
            </div>
    </div>
  )
}

export default Edit;
