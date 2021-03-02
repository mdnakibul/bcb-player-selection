import React from 'react';
import './Player.css'
const Player = (props) => {
    const { id, name, salary, type, image } = props.player;
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{id} ) {name}</h5>
                <p className="card-text">Player's Salary : {salary}</p>
                <p className="card-text">Player Type : {type}</p>
                <button className="btn btn-primary" onClick={() => props.handleAddPlayer(props.player)}>Add Player</button>
            </div>
        </div>
    );
};

export default Player;