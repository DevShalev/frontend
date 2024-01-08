import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {

  const [users , setUsers] = useState([]);

  useEffect(()=>{
    loadData()
  },[users])

  const loadData = () =>{
    axios.get('http://localhost:5000/api/users')
    .then(res => {
      setUsers(res.data.users)
    })
    .catch(err => console.log(err.message))
  }

  return(
    <div>
      <ul className="list-group">
        {
          users.map(user => <li className="list-group-item" ><b> {user.name} | {user.email} </b></li>)
        }
      </ul>
    </div>
  )
}

export default App;