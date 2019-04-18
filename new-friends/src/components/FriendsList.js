import React from 'react';
import { Link } from 'react-router-dom';
import Friends from './Friends';

 const FriendsList = props => (
    <div className="list-container">
        <Link to="/add" className="add-button">Add Friend</Link>
        <div className="list">
            {props.friends.map(friends => (
                <Friends name={friends.name}
                    age={friends.age}
                    email={friends.email}
                    id={friends.id}
                    key={friends.id}
                    deleteFriend={props.deleteFriend}
                    handleUpdate={props.editFriend}
                />
            ))}
        </div>
    </div>
);

 export default FriendsList; 