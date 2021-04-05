import React, {useState} from 'react';
import './App.css';

function App() {

  const [userData, setUserData] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    age: ``,
    pass: ``,
  })

  const handleSubmit =()=>{
    alert(JSON.stringify(userData, null, 2))
  }

  const updateUserData = (e)=>{
    const {target: {value, name}} = e
    if (name === `age` && (!Number(value) || Number(value)>= 100) ){
      return
    }
    setUserData({...userData, [name]: value})
  }


  return (
    <div className="App">
      <input
          value={userData.firstName}
          onChange={updateUserData}
          type= 'text'
          name="firstName"
          placeholder="enter name"
      />
      <br/><br/>
      <input
          value={userData.lastName}
          onChange={updateUserData}
          type= 'text'
          name="lastName"
          placeholder="enter last"
      />
      <br/><br/>
      <input
          value={userData.email}
          onChange={updateUserData}
          type= 'email'
          name="email"
          placeholder="enter email"
      />
      <br/><br/>
      <input
          value={userData.age}
          onChange={updateUserData}
          type= 'number'
          name="age"
          placeholder="enter age"
      />
      <br/><br/>
      <input
          value={userData.pass}
          onChange={updateUserData}
          type= 'password'
          name="pass"
          placeholder="enter pass"
      />
      <br/><br/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
