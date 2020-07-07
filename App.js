import React from "react"

function App(){

  const idade = 18

  return(
    <div>
      <h1>App</h1>
    <Chamar idade = {idade}/>
    </div>
  );
}

function Chamar(props){
  return(
    <div>
     <h3> {props.idade} </h3> 
    </div>
  )
}

export default App;