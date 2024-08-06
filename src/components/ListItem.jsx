import React from 'react';

const ListItem = () => {
  return (
    <li class="list-item">
    <span>
      <h3 class="expense-transaction">₹14</h3>
      <h4>Breakfast</h4>
    </span>
    <button class="delbtn"><i class="fa-solid fa-trash"></i></button>
  </li>  
  );
}

export default ListItem;
