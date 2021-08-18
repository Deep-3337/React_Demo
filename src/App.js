import logo from './logo.svg';
import './App.css';
import Header from './Header'
import {useState,useEffect} from 'react';


// State

function App() {

  // let [name, setName] = useState("Deep");
  // let [age, setAge] = useState("23");



  // // useEffect :- call default


  // useEffect(() => {
  //   console.log("hello");
  // },[name])




  // function changeName(){
  //   setName("Sharma");
  // }

  // function changeAge(){
  //   setName("21");
  // }

  return (
    <div className="App">

      {/* <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeAge}>Change Age</button> */}
      <Header/>

    </div>
  );
}

export default App;
