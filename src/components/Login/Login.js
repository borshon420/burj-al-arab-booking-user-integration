import React, { useContext } from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {user, signInUsingGoogle} = useFirebase();
    return (
        <div>
            <h1>This is Login</h1>
            <h2>{user.displayName}</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
    );
};

export default Login;