//import "./styles.css";
import React from 'react'
import React ,{useState, useEffect} from 'react'
export default function App() {
  const [name, setname]= useState('')
  const [id, setid] = useState[1]
  useEffect(()=>{
    fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`).then((resp)=>resp.json())
    .then((data)=>{
      console.log(data.name)
      setname(data.name)
    })
  }, [id])

  const changeInput = (e)=>{
    setid(e.target.value)
  }


  return (
    <div className="App">
      <h1 id ="text"> Type a number between 1 to 10</h1>
      <input id ="input" onChange={(e)=>changeInput(e)}/>
      <p id ="name">{name}</p>
    </div>
  );
}
