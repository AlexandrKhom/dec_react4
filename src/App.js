import React, {useState} from 'react';
import './App.css';

function App() {
    // const [firstName, setFirstName] = useState(``)
    // const [age, setAge] = useState(``)

    const [userData, setUserData] = useState({firstName: ``, age: ``, email: ``})
    const submitFu = () => {
        alert(JSON.stringify(userData, null, 2))
    }

    const updateFu = (event) => {
        const {target: {value, name}} = event
        setUserData({...userData, [name]: value})
    }

    return (
        <div className="App">
            {/*<input*/}
            {/*    value={userData.firstName}*/}
            {/*    onChange={({target: {value}})=>updateFu(`firstName`,value)}*/}
            {/*    type="text"*/}
            {/*    name="firstName"*/}
            {/*    placeholder="enter name"*/}
            {/*/>*/}
            <br/>
            <input
                value={userData.email}
                // onChange={({target: {value}})=> setAge(value)}
                //     onChange={({target: {value}})=>updateFu(`email`, value)}
                onChange={updateFu}
                type="email"
                name="email"
                placeholder="enter email"
            />
            <br/>
            {/*<input*/}
            {/*    value={userData.age}*/}
            {/*    // onChange={({target: {value}})=> setAge(value)}*/}
            {/*    onChange={(event)=>setUserData(event.target.value)}*/}
            {/*    type="number"*/}
            {/*    name="age"*/}
            {/*    placeholder="enter age"*/}
            {/*/>*/}
            <br/>
            <div>
                <button onClick={submitFu}>SUBMIT</button>
            </div>
        </div>
    );
}

export default App;
