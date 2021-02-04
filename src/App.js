import React from 'react';
import { useEffect, useReducer } from "react";
import SingleItem from "./SingleItem"
import reducer from "./reducer/reducer"

const url = "https://course-api.com/react-useReducer-cart-project";


const initialState={
  data:[],
  loading:true,
  total:0,
  totalAmnt:0
}



const App=()=>{

const [myState, dispatch] = useReducer(reducer, initialState);

const getData = async ()=>{
const response = await fetch(url);
const finalData = await response.json();
dispatch({type:'ADD_ALL_ITEMS', payload:finalData});
}

useEffect(()=>{
getData();
},[])


if(myState.loading){
 return (
     <h1>Loading...</h1>
 );
}

return (
    <div style={{ margin: "0" }}>
      <nav style={{ background: "#2680c0", padding: "2rem" }}>
        <div
          style={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <h1 >MyCart</h1>
          <h3>Total Items: {myState.total}</h3>
        </div>
      </nav>

      {myState.data.map((item, index) => {
        return (
          <SingleItem item={item} index={index} dispatch={dispatch} />
        );
      })}

<hr></hr>

<div style={{padding:'1rem', display:'flex', justifyContent:'center'}}>
  <nav style={{
            width: "55%",
            display: "flex",
            justifyContent: "space-between",
     }}
      >
  <h3>Total</h3>
  <h3>${myState.totalAmnt}</h3>
  </nav>
</div>
    </div>
  );
}

export default App;
