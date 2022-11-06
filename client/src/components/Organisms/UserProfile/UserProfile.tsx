import React from 'react';


interface Props {
    user: string;
}

const UserProfile = ({ user }: Props) => {
    return (
        <div>
            <h1>User Profile {user}</h1>
        </div>
    );
};

export default UserProfile;
