import React from 'react';

function User({item}) {
    return (
        <div>
            {item.name}{item.status}
        </div>
    );
}

export default User;
