import React, { Component } from 'react'
import finzlogo from './finzlogo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import './Req.css'
const data = [

{ SNo: "1", name: "Roshan Dsouza", email: "Roshan236Dsouza@gmail.com", dateofbirth: "09/04/1999", PhNo: "9485933223", Gender: "Male", Addressproof: "xx"  },
{ SNo: "2", name: "Maya Bhat", email: "MayaBhat2408@gmail.com", dateofbirth: "30/02/2001", PhNo: "9034728491", Gender: "Female", Addressproof: "xx"  },
{ SNo: "3", name: "Aditi Singh", email: "Aditisinghh@gmail.com", dateofbirth: "13/12/2003", PhNo: "6709841238", Gender: "Female", Addressproof: "xx"  },
{ SNo: "4", name: "Rao H", email: "RaoH@gmail.com", dateofbirth: "03/04/2000", PhNo: "7683405912", Gender: "Male", Addressproof: "xx"  },
{ SNo: "5", name: "Harshitha M", email: "HarshithaM567@gmail.com", dateofbirth: "27/12/2004", PhNo: "8694502850", Gender: "Female", Addressproof: "xx"  },
{ SNo: "6", name: "Rohan Sahoo", email: "RohanSahoo60@gmail.com", dateofbirth: "12/03/2001", PhNo: "9012678230", Gender: "Male", Addressproof: "xx"  },
{ SNo: "7", name: "Herambh P", email: "HerambhPms12@gmail.com", dateofbirth: "11/05/2005", PhNo: "6089231879", Gender: "Male", Addressproof: "xx"  },
{ SNo: "8", name: "Deepika", email: "Deepika23@gmail.com", dateofbirth: "12/09/2003", PhNo: "9012678129", Gender: "Female", Addressproof: "xx"  },
{ SNo: "9", name: "Mohammed Salim", email: "MohammedSalim@gmail.com", dateofbirth: "03/07/2002", PhNo: "8901384289", Gender: "Male", Addressproof: "xx"  },
{ SNo: "10", name: "Syed Ashar", email: "SyedAshar@gmail.com", dateofbirth: "09/05/2001", PhNo: "6790231869", Gender: "Male", Addressproof: "xx"  },

]

function Tabledata() {

  const navigate = useNavigate();
  function replyclick() {
  navigate("/reply")

 }

 return (

 <div className='container'>
 <div class="header">{
  <header className="App-header">
    <img src={finzlogo} className="App-logo" alt="finzlogo" />
  </header>
}

 </div>
  <div className="App">
   <table>
    <tr>
      <th>SNo</th>
      <th>name</th>
      <th>email</th>
      <th>dateofbirth</th>
      <th>Phno</th>
      <th>Gender</th>
      <th>Adressproof</th>
    </tr>
 {data.map((val, key) => {
 return (
 <tr key={key}>
 <td>{val.SNo}</td>
 <td>{val.name}</td>
 <td>{val.email}</td>
 <td>{val.dateofbirth}</td>
 <td>{val.Phno}</td>
 <td>{val.Gender}</td>
 <td>{val.Addressproof}</td>
 <button onClick={replyclick} type="submit">accept</button>
 <button>reject</button>
 </tr>
)
})}
  </table>
 </div>
</div>
  );
}
export default Tabledata
