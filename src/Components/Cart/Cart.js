import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,plr) => total + plr.salary, 0);
    const listContainer = document.getElementById('player-list');
    for(let i = 0; i < cart.length; i++){
        let elem = cart[i];
        let listItem = document.createElement("li");
        listItem.textContent = "Name : " + elem.name + " ; Salary : " + elem.salary;
        listContainer.appendChild(listItem);
    }
    return (
        <div>
            <h2>Selection Details</h2>
            <p>Player Added : {cart.length}</p>
            <ul id="player-list"></ul>
            <p>Total Budget : {total}</p>
        </div>
    );
};

export default Cart;