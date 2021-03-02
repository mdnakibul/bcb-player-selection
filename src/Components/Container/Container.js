import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Container.css'

const Container = () => {
    const [players,setPlayers] = useState([]) ;
  const [cart, setCart] = useState([]);


  useEffect(()=>{
    fetch('https://api.mocki.io/v1/045d88d3')
    .then(res => res.json())
    .then(data=>setPlayers(data))
    .catch(error => console.log("Error",error))
  }, []);


  const handleAddPlayer = (player) => {
      if(cart.includes(player)){
          alert('Player Already Added')
      }else{
        const newCart = [...cart, player];
        setCart(newCart);
        console.log("Player added");
        document.getElementById('player-list').innerHTML = '';
      }
   }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <h2 className="text-center">Player List</h2>
                    <div className="player-container">
                    {
                        players.map(player => <Player player={player} handleAddPlayer = {handleAddPlayer} key={player.id}></Player>)
                    }
                    </div>
                </div>
                <div className="col-md-2">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Container;