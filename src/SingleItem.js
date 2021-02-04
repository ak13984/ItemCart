import React from 'react'

export default function SingleItem({item,index, dispatch}) {
    return (
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        key={index}
      >
        <div style={{ display: "flex", margin: "2rem" }}>
          <img src={item.img} style={{ height: "10rem" }}></img>
          <div>
            <h3 style={{ textTransform: "capitalize" }}>{item.title}</h3>
            <h4>${item.price}</h4>
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: index });
              }}
            >
              Remove
            </button>
          </div>
        </div>
        <div style={{ margin: "2rem" }}>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() =>
              dispatch({ type: "ADD_SINGLE_ITEM", payload: index })
            }
          >
            Inc.
          </button>
          <h3>{item.amount}</h3>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() =>
              dispatch({ type: "DECREASE_SINGLE_ITEM", payload: index })
            }
          >
            Dec.
          </button>
        </div>
      </div>
    );
}
