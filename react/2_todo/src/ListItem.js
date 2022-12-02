import React from "react";
import "./ListItem.css";

function ListItem(props) {
  const items = props.items;

  const strike = (e, key) => {
    
    const ele = document.getElementById(key)
    // console.log(8, ele)
    // const ele = e.target;
    ele.classList.toggle("strikeItem");
  };

  const listItem = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        {/* <p onClick={strike}>
          {item.text}
          <span class="material-icons">clear</span>
        </p> */}
        <p id={item.key}>
          {item.text}
        </p>
        <span class="material-icons" onClick={(e) => strike(e, item.key)}>clear</span>

      </div>
    );
  });

  return <div>{listItem}</div>;
}
export default ListItem;
